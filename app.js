function openCrops(evt, crops) {
    var i, x, tablinks;
    x = document.getElementsByClassName("crops");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(crops).style.display = "block";
    evt.currentTarget.className += " w3-red";
  }

  var myCarousel = document.querySelector('#progress')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 15000,
    wrap: false
  })
