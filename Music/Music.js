'use strict';
(function() {

  window.addEventListener('load', init);
  let isDrawing = false;
  let startX, startY, endX, endY;

  function init() {
    document.getElementById('back').addEventListener('click', backHome);
    document.getElementById('play').addEventListener('click', playNote);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  function backHome() {
    location.href = "/index.html";
  }

  function playNote() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
  }

  function handleMouseDown(event) {
    isDrawing = true;
    startX = event.clientX;
    startY = event.clientY;
  }

  function handleMouseMove(event) {
    if (!isDrawing) return;

    endX = event.clientX;
    endY = event.clientY;

    const width = Math.abs(endX - startX);
    const height = Math.abs(endY - startY);

    blackBox.style.width = `${width}px`;
    blackBox.style.height = `${height}px`;
    blackBox.style.left = `${Math.min(startX, endX)}px`;
    blackBox.style.top = `${Math.min(startY, endY)}px`;
  }

  function handleMouseUp() {
    isDrawing = false;
  }

})();