var $, fill;

$ = require('jquery');

(fill = function(item) {
  $('.tagline').append("" + {
    item: item
  });
  return fill;
})('The most creative minds in Art');
