const gulp      = require('gulp'),
  browserSync = require('browser-sync').create(),
  concat      = require('gulp-concat'), 
  rename      = require('gulp-rename'),
  minifyCSS   = require('gulp-minify-css'),
  uglify      = require('gulp-uglify'),
  data        = require('gulp-data'),
  header      = require('gulp-header'),
  sourcemaps  = require('gulp-sourcemaps'),
  stylus      = require('gulp-stylus'),
  nib         = require('nib'),
  stylint     = require('gulp-stylint'),
  path        = require('path'),
  cache       = require('gulp-cache'),
  coffee      = require('gulp-coffee'),
  purify      = require('gulp-purifycss'),
  pug         = require('gulp-pug'),
  argv        = require('yargs').argv;  

//data
const pkg   = require('./frontend.json'),
      debug = argv.debug;


//Rutas
const routes = {
  app: path.join(__dirname, 'publication/'),
  src: path.join(__dirname, 'src/'),
  css: 'css/',
  stylus: 'stylus/',
  views: 'views/',
  templates: 'templates/',
  js: 'js/',
  coffee: 'coffee/'
};

/**Routes

  routes.app + routes.js = 'publication/js/'
  routes.src + routes.coffee = 'src/coffee/'
  routes.app + routes.css = 'publication/css/'
  routes.src + routes.stylus = 'src/stylus/'
  routes.src + routes.views = 'src/views/'
  routes.src + routes.templates = 'src/templates/'

**/

//Error handler//
function onError(err) {
  console.log(err);
  this.emit('end');

};


const banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @link <%= pkg.author.name %> - <%= pkg.author.email %>',
  ' * @license <%= pkg.license %>',
  ' *<%= new Date() %>',
  ' */',
  ''
].join('\n');

//arreglo concatenar JS en el orden en el que se cargan
const jsLibs = [
  routes.app + routes.js +'libs/jquery.validate.js',
  routes.app + routes.js +'libs/bootstrap.min.js',
  routes.app + routes.js +'libs/jquery.bxslider.min.js',
  routes.app + routes.js +'libs/jquery.magnific-popup.min.js',
  routes.app + routes.js +'libs/velocity.min.js'
];


//Tarea para comprimir las libreriras JS
gulp.task('libs',  () =>{  
     return gulp.src(jsLibs)
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(concat('concat.libs.js'))
        .pipe(gulp.dest(routes.app + routes.js))
        .pipe(rename('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(routes.app + routes.js));
});

//Tarea para compilar Coffeescript
gulp.task('coffee',  () =>{
  return gulp.src( routes.src + routes.coffee +  '*.coffee')
  .pipe(sourcemaps.init()) //cargamos tarea de sourcemaps
  .pipe(coffee({
    bare:true
   }))
  .on('error', onError)
  .pipe(sourcemaps.write('../maps')) //creamos sourcemap aparte
  .pipe(gulp.dest(routes.app + routes.js))
  .pipe(browserSync.reload({
      stream: true
  }))
});


//tarea para compilar stylus
gulp.task('css',  () =>{
  return gulp.src(routes.src + routes.stylus + 'main.styl')
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(sourcemaps.init()) //cargamos tarea de sourcemaps
  .pipe(stylus({ //iniciamos stylus
    use: nib(), // cargamos nib para uso de css3
    compress: false
  }))
  .on('error', onError)
  .pipe(rename('style.css')) //renombramos el archivo
  .pipe(gulp.dest(routes.app + routes.css)) // destino del archivo
  .pipe(sourcemaps.write('../maps')) //creamos sourcemap aparte
  .pipe(gulp.dest(routes.app + routes.css))
  .pipe(browserSync.reload({
      stream: true
    }))

});

gulp.task('csslint', () =>{
  return gulp.src(routes.src + routes.stylus + '**/*.styl')
        .pipe(stylint({
          rules:{
            'leadingZero': 'never',
            'commentSpace': 'never'
          }

        }))
         .pipe(stylint.reporter({
          verbose: true
         }))

});

//Concatenar y minificar CSS
gulp.task('minicss',  () =>{
  return gulp.src([routes.app + routes.css + '**/*.css', '!'+routes.app + routes.css +'/**/'+pkg.name+'.min.css'])
  .pipe(concat(pkg.name +'.min.css'))
  // .pipe(purify([ routes.src + '/**/*.**'],
  //   {info:true} ))
  .pipe(minifyCSS())
  .pipe(gulp.dest(routes.app + routes.css))

});


//Render de pug
gulp.task('views',  () =>{
  return gulp.src(routes.src + routes.views + '*.pug')
    .pipe(data( function (file) {
      return {
        debug: debug,
        name: pkg.name
      };
    }))
  .pipe(pug({
    pretty: true
    }))
  .on('error', onError)
  .pipe(gulp.dest(routes.app))
  .pipe(browserSync.reload({
      stream: true
    }))
});



//Tarea base de browsersync para crear el servidor
gulp.task('browserSync',  () =>{
  browserSync.init({
    server: {
      baseDir: routes.app
    },
  })
});

gulp.task('limpiar', (done) =>{
  return cache.clearAll(done);
});


//tarea que observa cambios para recargar el navegador
gulp.task('watch', ['browserSync', 'views', 'css', 'coffee'],  () =>{

  gulp.watch( routes.src + routes.stylus +'**/*.styl',  ['css']); //Stylus
  gulp.watch(routes.src + routes.coffee +'**/*.coffee',  ['coffee']); //Coffee
  gulp.watch([routes.src + routes.views + '*.pug', routes.src + routes.templates + '**/*.pug'],  ['views']); //Pug
  // gulp.watch('publication/js/**/*.js', browserSync.reload);
  gulp.watch(routes.app + 'images/**/*.{gif,svg,jpg,png}', browserSync.reload); //Images
  gulp.watch(routes.app + 'fonts/**/*.{svg,eot,ttf,woff,woff2}', browserSync.reload); //Fonts

});


//custom Build js & css
gulp.task('watch:assets', ['browserSync',  'css', 'csslint', 'coffee', 'minicss'], () =>{

  gulp.watch( routes.src + routes.stylus +'**/*.styl',  ['css', 'csslint']); //Stylus
  gulp.watch(routes.src + routes.coffee +'**/*.coffee',  ['coffee']); //Coffee
  gulp.watch( [routes.app + routes.css + '**/*.css', '!'+routes.app + routes.css +'/**/'+pkg.name+'.min.css'], ['minicss'] )

});

