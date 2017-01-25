// ==UserScript==
// @name        YouTube Pin Guide Sidebar
// @namespace   ytPinGuide
// @include     https://www.youtube.com*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
  document.getElementById("body-container").classList += " guide-pinned show-guide";
  document.getElementById("masthead-positioner").classList += " guide-pinning-enabled";
  document.getElementById("page-container").classList += " guide-pinning-enabled";
  document.getElementById("footer-container").style.minWidth = "713px";
  document.getElementById("footer-container").style.paddingLeft = "260px";
})();
