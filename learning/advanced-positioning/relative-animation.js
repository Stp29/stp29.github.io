(function() {
  var left = 0;
  
  function frame() {
    var ele = document.querySelector('.item-relative');
    left += 2;
    ele.style.left = left + 'px';
    if (left >= 300) {
      clearInterval(id);
      left = 0;
      id = setInterval(frame, 12);
    }
  }
  
  var id = setInterval(frame, 12);
})();