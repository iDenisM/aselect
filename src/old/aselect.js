import './ASelectListbox';
import './ASelectListboxButton';

(function () {
	var api = {
    version: '1.0.0',
    
    create: function(selector) {

    },

		// Used to reset a select if it was already set
		// Used to create a custom select if no one was created yet
		reset: function(selector) {
      
      for (let elem of document.querySelectorAll(selector)) {
        // Check if select was created and recreate it with new options
        if (selector.dataset.aselect) {

        }

        // If no select was created create new
        elem.classList.add('hidden');

        // Create new lisboxButton
        // Create new lisbox
        // Append all to lisbox wrapper
			}
		}
	}

	window.aselect = api;
})()