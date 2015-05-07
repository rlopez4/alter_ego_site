/* jshint devel:true */

var menuIsOpen = false;

var Constants = (function(undefined) {

	var _items = [];

	_items[_items.length] = document.getElementsByTagName('nav');
	_items[_items.length] = document.getElementsByTagName('body');
	_items[_items.length] = document.getElementsByClassName('nav--button');

	for (var i = 0; i < _items.length; i++) {
		var curr = _items[i];
		if (curr !== undefined || curr !== null) {
			_items[i] = curr[0];
		}
	}

	return {
		Nav: _items[0],
		Body: _items[1],
		NavBtn: _items[2]
	}
})();

function bindNav() {

	$(Constants.NavBtn).on('click', function() {
		$(Constants.Nav).toggleClass('active');
		$(Constants.Body).toggleClass('no-scroll');
		menuIsOpen = !menuIsOpen;
	});

	$('.nav--links').on('click', function() {
		$(Constants.NavBtn).click();
	});
};

function startParticles() {
	particlesJS('main--particles', {
		particles: {
			color: '#FF3C3C',
			color_random: false,
	    shape: 'circle', // "circle", "edge" or "triangle"
	    opacity: {
	    	opacity: 1,
	    	anim: {
	    		enable: true,
	    		speed: 1.5,
	    		opacity_min: 0,
	    		sync: false
	    	}
	    },
	    size: 4,
	    size_random: true,
	    nb: 30,
	    line_linked: {
	    	enable_auto: true,
	    	distance: 200,
	    	color: '#fff',
	    	opacity: 1,
	    	width: 1,
	    	condensed_mode: {
	    		enable: false,
	    		rotateX: 600,
	    		rotateY: 600
	    	}
	    },
	    anim: {
	    	enable: true,
	    	speed: 1
	    }
	  },
	  retina_detect: true
	});
};

function bindKeyPresses() {

	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			if (menuIsOpen) {
				$('.nav--button').click();
			}
		}
	});
};

$(document).ready(function() {
	console.log('\'Allo \'Allo!');

	// set up foundatoin?
	$(document).foundation();

	// bind stuff
	bindKeyPresses();
	bindNav();
	startParticles();
});