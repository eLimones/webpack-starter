import $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import './custom-styles.css'

$(function(){
  $('#myButton').click(function() {
    console.log('Click on: left');
  });

  $('#otherButton').click(function() {
    console.log('Click on: right');
  });
  console.log('Hello, World!');
});

