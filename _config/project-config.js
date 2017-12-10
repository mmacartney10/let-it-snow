module.exports = {
  basePixel: 16,
  src: './_src/',
  dest: './public/',
  views: '../Views/Partials/',
  images: 'images/',
  scripts: 'scripts/',
  styles: 'styles/',
  fonts: 'fonts/',
  vendorScriptFileList: [
    './_src/scripts/vendor/*.js'
  ],
  mainScriptFileList: [
    './_src/scripts/src/*.js'
  ],
  stylesSrc: [
    './_src/styles/_settings/*.scss',
    './_src/styles/_tools/*.scss',
    './_src/styles/_generic/*.scss',
    './_src/styles/_elements/*.scss',
    './_src/styles/_objects/*.scss',
    '../Views/Partials/**/*.scss'
  ]
}
