var $, fill;

$ = require('jquery');

(fill = function(item) {
  $('.tagline').append("" + item);
  return fill;
})('Creative in the Art world');
