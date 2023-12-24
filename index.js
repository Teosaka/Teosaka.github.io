'use strict';
(function() {

  window.addEventListener('load', init);

  function init() {
    document.getElementById('C4').addEventListener('click', moveToC4);
    document.getElementById('TTT').addEventListener('click', moveToTTT);
    document.getElementById('Log').addEventListener('click', moveToLogs);
    document.getElementById('Riot').addEventListener('click', moveToRiot);
    document.getElementById('click').addEventListener('click', moveToClick);
    document.getElementById('Music').addEventListener('click', moveToMusic);
  }

  function moveToC4() {
    location.href = 'docs/C4/C4.html';
  }

  function moveToTTT() {
    location.href = 'docs/TTT/TTT.html';
  }

  function moveToLogs() {
    location.href = 'docs/log/log.html';
  }

  function moveToRiot() {
    location.href = 'docs/Riot/Riot.html';
  }

  function moveToClick() {
    location.href = 'docs/Click/Click.html';
  }

  function moveToMusic() {
    location.href = '/Music/Music.html';
  }

})();