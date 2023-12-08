let search = document.querySelector('#search-bar');
let searchbox = document.querySelector('.search-box');
let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar');

search.onclick = () => {
    searchbox.classList.toggle('active');
}

menubar.onclick = () => {
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();