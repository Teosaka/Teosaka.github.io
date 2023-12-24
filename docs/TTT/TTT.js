'use strict';
(function() {

  window.addEventListener('load', init);

  function init() {
    document.getElementById('back').addEventListener('click', backHome);
  }

  function backHome() {
    location.href = "/index.html";
  }

})();