(function() {
  var ele = document.querySelector('.menu > .date');
  var today = new Date();
  ele.innerHTML = today.toDateString();
})();