'use strict';
(function() {

  window.addEventListener('load', init);

  function init() {
    document.getElementById('back').addEventListener('click', backHome);
    let click = document.getElementById('click');
    click.addEventListener('click', addToCounter);
    click.addEventListener('mouseover', moveButton);
  }

  function backHome() {
    location.href = "/index.html";
  }

  function addToCounter() {
    counter = document.getElementById('counter');
    counter.textContent = parseInt(counter.textContent) + 1;
    console.log(counter.textContent);
  }

  function moveButton() {
    let moveButton = document.getElementById('click');
    moveButton.style.position = 'absolute';
    var leftPos = Math.random() * window.innerWidth - 63;
    var topPos = Math.random() * window.innerHeight - 6;
    moveButton.style.left = leftPos < 0? "0px": leftPos + "px";
    moveButton.style.top = topPos < 0? "0px": topPos + 'px';
  }

})();