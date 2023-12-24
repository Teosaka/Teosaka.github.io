'use strict';

(function() {

  window.addEventListener('load', init);

  function init() {
    document.getElementById('back').addEventListener('click', backHome);
    document.getElementById('play').addEventListener('click', playNote);
  }

  function backHome() {
    location.href = "/index.html";
  }

  function playNote() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
  }

})();