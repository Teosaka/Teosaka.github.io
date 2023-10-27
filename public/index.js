'use strict';
(function() {

  window.addEventListener('load', init);

  function init() {
    document.getElementById('btn').addEventListener('click', test);
    console.log('hi');
  }

  function test() {
    location.href = 'C4.html';
  }


})();