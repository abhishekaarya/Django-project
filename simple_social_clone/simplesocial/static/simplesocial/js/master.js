var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
  canvasWidth = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
  canvasHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),
  requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;
var persons = [],
  numberOfFirefly = 30,
  birthToGive = 25;