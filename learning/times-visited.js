(function() {
	let timesVisited = localStorage.getItem('times-visited');
	if (timesVisited === null) {
	    timesVisited = 1;
	    localStorage.setItem('times-visited', timesVisited);
	} else {
	    timesVisited++;
	    localStorage.setItem('times-visited', timesVisited);
	}
})();