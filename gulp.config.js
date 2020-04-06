module.exports = {
  SRC_PATH : "src",
  DIST_PATH: "dist",
  STYLES_LIBS : [
    'node_modules/normalize.css/normalize.css',
    'src/styles/settings/vars.scss',
    'src/styles/settings/mixins.scss',
    'src/styles/main.scss'
  ],
  JS_LIBS: [
    "node_modules/jquery/dist/jquery.js", 
    "https://api-maps.yandex.ru/2.1/?apikey=7f07cea9-2d98-42ff-9813-69e86f9f8f5c&lang=ru_RU",
    "node_modules/mobile-detect/mobile-detect.js",
    "node_modules/jquery-touchswipe/jquery.touchSwipe.js",
    "src/js/*.js"
  ]
}