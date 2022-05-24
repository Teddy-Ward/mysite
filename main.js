/*welcome typing*/
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 1000) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

/*if main in url*/
$(document).ready(function () {
    if(window.location.href.indexOf("main") > -1) {
      document.querySelectorAll('.hello')[0].style.display = 'none';
      document.querySelectorAll('.container')[0].style.display = 'flex';
   }
   else {
    document.querySelectorAll('.container')[0].style.display = 'none';
   }
});


var url = window.location.href;

if(url.split('project').length > 1) {
   document.getElementById("home").style.display = "none";
   document.getElementById("contact").style.display = "none";
   document.getElementById("projects").style.display = "block";   
}

var url2 = url;
if(url2.split('contact').length > 1) {
    document.getElementById("home").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "block";   
    } else {
       /* alert('nope!');   */
}

/*click to show main container*/
$('.hello').click(function () {
    document.querySelectorAll('.hello')[0].style.display = 'none';
    document.querySelectorAll('.container')[0].style.display = 'flex';

});


function switchVisible() {
    if (document.getElementById("home")) {
        if (document.getElementById("home").style.display == "none") {
            document.getElementById("home").style.display = "block";
            document.getElementById("projects").style.display = "none";
            document.getElementById("contact").style.display = "none";
            document.getElementById("home").style.animationDelay = "0.2s";
            /*document.getElementsByClassName("bar")[0].style.backgroundColor = "var(--primary-brand-color)";*/
            const nodeList = document.querySelectorAll(".pie");
            for (let i = 0; i <nodeList.length; i++) {
               nodeList[i].style.animationDelay = "1s";
            }
        }
        /*else {
        document.getElementById("home").style.display = "none";
        document.getElementById("projects").style.display = "block";
        }*/
    }
};
function switchVisible2() {

    if (document.getElementById("projects").style.display = "none") {
        document.getElementById("projects").style.display = "block";
        document.getElementById("home").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("projects").style.animationDelay = "0.2s";
        /*document.getElementsByClassName("bar")[0].style.backgroundColor = "var(--secondary-brand-color)";
        document.getElementsByClassName('bar')[0].style.cssText = "animation: 3s background-fade ease-in;";
            alert('yes!');*/
    }
};

function switchContact() {

    if (document.getElementById("contact").style.display = "none") {
        document.getElementById("contact").style.display = "block";
        document.getElementById("home").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("contact").style.animationDelay = "0.2s";
        /*document.getElementsByClassName("bar")[0].style.backgroundColor = "var(--tertiary-brand-color)";*/
    }
};

/*slide show*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}