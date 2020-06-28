(function() {
  var ele = document.querySelector('.item-relative');

  var left = 0;
  var xSpeed = parseInt(Math.random() * 9 + 1, 10);
  var xDisplacement = xSpeed;
  
  function MoveFrameSideways() {
    left += xDisplacement;
    ele.style.left = left + 'px';
    if (left >= 300) {
      xSpeed = parseInt(Math.random() * 9 + 1, 10);
      xDisplacement = -1 * xSpeed;
    } else if (left <= -300) {
      xSpeed = parseInt(Math.random() * 9 + 1, 10);
      xDisplacement = xSpeed;
    }
  }

  var down = 0;
  var ySpeed = parseInt(Math.random() * 4 + 1, 10);
  var yDisplacement = ySpeed;

  function MoveFrameUpAndDown() {
    down += yDisplacement;
    ele.style.top = down + 'px';
    if (down >= 300) {
      ySpeed = parseInt(Math.random() * 4 + 1, 10);
      yDisplacement = -1 * ySpeed;
    } else if (down <= -100) {
      ySpeed = parseInt(Math.random() * 4 + 1, 10);
      yDisplacement = ySpeed;
    }
  }

  var Id1 = setInterval(MoveFrameSideways, 12);
  var Id2 = setInterval(MoveFrameUpAndDown, 12);
})();