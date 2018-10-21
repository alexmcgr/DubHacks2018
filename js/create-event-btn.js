"use strict";
(function() {

  window.onload = function() {
    document.getElementById("create-event-btn").onclick = function() {
      userInformation()
    };
  };

  function userInformation() {
    let name = prompt("Please enter your name");
    let place = prompt("Please enter your title");
    let clas = prompt("Please enter your class");
    let location = prompt("Please enter your location");
    let link = document.createElement("a");
    let btn = document.createElement("button");
    link.href = "hello";
    btn.innerText = place;
    link.appendChild(btn)
    document.getElementById("event-feed").appendChild(link);
  }

})();
