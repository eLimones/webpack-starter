import $ from 'jquery'
//import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
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

