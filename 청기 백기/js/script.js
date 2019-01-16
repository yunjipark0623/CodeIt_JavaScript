function blueDown() {
  console.log("청기 내려");
  $('.blue').css('transform', 'rotate(30deg)');
  setTimeout(original, 1000);
}

function whiteDown() {
  console.log("백기 내려");
  $('.white').css('transform', 'rotate(30deg)');
  setTimeout(original, 1000);
}

function dotblueDown() {
  console.log("점선 청기 내려");
  $('.blue.dot').css('transform', 'rotate(30deg)');
  setTimeout(original, 1000);
}

function original() {
  $('.flag').css('transform', 'rotate(0deg)');
}
