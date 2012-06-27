document.addEventListener('keydown', function(e) {
	
//	, = 188, . = 190, / = 191,
//	left = 37, right = 39
//	console.log('[chromp3]', e, e.keyCode);
	
	if (e.ctrlKey && e.shiftKey) {
		var method = '';
		switch (e.keyCode) {
			case 190:
				method = 'pause';
				e.preventDefault();
				break;
			case 39:
				method = 'skip';
				e.preventDefault();
				break;
			case 191:
				method = 'toggleShuffle';
				e.preventDefault();
				break;
			case 72:
				window.open('https://www.marcqualie.com/projects/chromp3/');
				break;
			default:
		}
		if (method) chrome.extension.sendRequest({method: method, data: ''});
	}
});