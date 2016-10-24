$ = require 'jquery'

do fill = ( item = 'The most creative minds in the Art') ->
  $('.tagline').append "#{{item}}"
  fill
