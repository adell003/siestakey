$(document).ready(function() {

	var controller = new ScrollMagic.Controller(); // this is needed for all scrollmagic effects: think of controller as the vehicle that will deliver all scrollmagic effects to the user

	var scene = new ScrollMagic.Scene({ // ditto
					triggerElement: "#trigger_1", // designates #trigger div as the trigger for our scrollmagic effects
					triggerHook: "onLeave", // setting this to "onLeave" means that the trigger needs to reach the top of the browser window for scrollmagic effects to start
					duration: "10000px" // duration of the scrollmagic effects
				})
				.setPin(".map") // fixes the video to the screen
		.addTo(controller); // adds all effects mentioned above to the scrollmagic controller

	var controller = new ScrollMagic.Controller(); // this is needed for all scrollmagic effects: think of controller as the vehicle that will deliver all scrollmagic effects to the user

	var scene = new ScrollMagic.Scene({ // ditto
		triggerElement: "#trigger_1", // designates #trigger div as the trigger for our scrollmagic effects
		triggerHook: "onLeave", // setting this to "onLeave" means that the trigger needs to reach the top of the browser window for scrollmagic effects to start
		duration: "10000px" // duration of the scrollmagic effects
	})
		.setPin(".arrowtop") // fixes the video to the screen
		.addTo(controller); // adds all effects mentioned above to the scrollmagic controller
});