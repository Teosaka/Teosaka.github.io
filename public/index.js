'use strict';
(function() {

  window.addEventListener('load', init);

  function init() {
    document.getElementById('btn').addEventListener('click', test);
  }

  function test() {
    window.location.href = 'public/C4.html';
  }


});