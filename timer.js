// ==UserScript==
// @name        YouTube Pin Guide Sidebar v2
// @namespace   ytPinGuide
// @include     https://www.youtube.com/*
// @version     2
// @grant       none
// ==/UserScript==

(function(){

	// Retrieve toggle value, otherwise set it as disabled by default 
	var guideToggle = localStorage.getItem('yt-guide-toggle');
	console.log("1: " + guideToggle);
	// Note: Strings are used instead of boolean because Firefox is storing strings
	if (guideToggle != "off" && guideToggle != "on") {
		guideToggle = "off";
		localStorage.setItem('yt-guide-toggle', guideToggle);
		console.log('setting default');
	}

	console.log("2: " + guideToggle);

	var toggleBurger = document.getElementsByClassName("appbar-guide-toggle");
				
	toggleBurger[0].onclick = function() {
		if (guideToggle == "off"){
			guideToggle = "on";
			localStorage.setItem('yt-guide-toggle', "on");
			startTimer();
		}
		else {
			guideToggle = "off";
			localStorage.setItem('yt-guide-toggle', "off");
		}
		console.log("click");
		console.log(localStorage.getItem('yt-guide-toggle'));
	};

	if (guideToggle == "on") {
		startTimer();
	}

})();

function startTimer(){
	console.log("timer started");
	var ytHTML = document.documentElement;

		var ytBODY = document.getElementsByTagName("body")[0];

		var timer = setInterval(function() {
			try {
				if (ytHTML.className.indexOf('show-guide') < 0) {
					ytHTML.classList += " show-guide";
				}
				if (ytHTML.className.indexOf('guide-pinned') < 0) {
					ytHTML.classList += " guide-pinned";
				}
				if (ytBODY.className.indexOf('guide-pinning-enabled') < 0) {
					ytBODY.classList += " guide-pinning-enabled";
				}
				
				// test
				//console.log("is this running 1?");
				// test
				//clearInterval(timer);

			} catch(err) {
				clearInterval(timer);
			}
		}, 50);
}