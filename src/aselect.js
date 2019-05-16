import './aselect.listbox';
import './aselect.listboxButton';

(function () {
	var api = {
		version: '1.0.0',

		// Used to reset a select if it was already set
		// Used to create a custom select if no one was created yet
		reset: function(selector) {
			// Check if select was created and recreate it with new options

			// If no select was created create new
			for (let elem of document.querySelectorAll(selector)) {
        elem.classList.add('hidden');
        
			}
		}
	}

	window.aselect = api;
})()