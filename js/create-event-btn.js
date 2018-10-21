"use strict";
(function() {

  window.onload = function() {
    let buttons = document.querySelectorAll(".popup");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function() {
        let name2 = buttons[i].innerText
        console.log(name2);
          popup(name2);
      };
    }
    document.getElementById("create-event-btn").onclick = function() {
      userInformation()
    };
  };

  function userInformation() {
    let name = prompt("Please enter your name");
    let place = prompt("Please enter your title");
    let clas = prompt("Please enter your class");
    let location = prompt("Please enter your location");
    let btn = document.createElement("button");
    let popupHolder = document.createElement("div");
    popupHolder.id = place;
    popupHolder.classList.add("hidden");
    popupHolder.classList.add("simple-pop");
    let pname = document.createElement("p");
    pname.innerText = name;
    popupHolder.appendChild(pname);
    let ptitle = document.createElement("p");
    ptitle.innerText = place;
    popupHolder.appendChild(ptitle);
    let pclass = document.createElement("p");
    pclass.innerText = clas;
    popupHolder.appendChild(pclass);
    let plocation = document.createElement("p");
    plocation.innerText = location;
    popupHolder.appendChild(plocation);
    document.getElementById("all-popups").appendChild(popupHolder);
    btn.innerText = place;
    document.getElementById("event-feed").appendChild(btn);
  }

  function popup(name) {
    let popup = document.getElementById(name);
    popup.classList.toggle("hidden");
  }

})();
