// Stolen from https://github.com/shomeya/bootstrap-stylus/blob/v1.4.0-stylus/lib/index.js

exports.path = __dirname;

exports = module.exports = function () {
  return function(style){
    style.include(__dirname + '/styl');
  }
}
