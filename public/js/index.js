const contactForm = document.querySelector('#form-id');

if(contactForm !== null){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');

    let formData = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contacts');
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function(){
      console.log(xhr.responseText);
      // error 
      if(xhr.responseText == 'success'){
        alert('Email sent');
        name.value = '';
        phone.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
      }else{
        alert('Something went wrong')
      }
    }

    xhr.send(JSON.stringify(formData))
  })


}











function showMenu(menu) {

  var angle = '0deg',
    slide = '320px';

  if (menu) {
    angle = '180deg';
    slide = '0';
  }

  // Slide panel
  $("#mobile__menu__panel").css({
    transform: "translateX(" + slide + ")"
  });

  // Rotate icon
  setTimeout(function() {
    $("#mobile__menu__close").css({
      transform: "rotate(" + angle + ")"
    });
  }, 300);

  // Animate menu items
  $(".mobile__menu-item").each(function(i) {
    var row = $(this);
    setTimeout(function() {
      menu && row.addClass('fadeInDown');
      !menu && row.removeClass('fadeInDown');
    }, 100 * i);
  });

}





// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
      hasScrolled();
      didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  
  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
      return;
  
  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('header').removeClass('nav-down').addClass('nav-up');
  } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
          $('header').removeClass('nav-up').addClass('nav-down');
      }
  }
  
  lastScrollTop = st;
}


// Gallery Slider 
document.addEventListener( 'DOMContentLoaded', function() {

var splide = new Splide( '#main-slider', {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    cover      : true,
    type       : 'loop',
    autoplay   : true,
    inerval    : 1000
} );

var thumbnails = new Splide( '#thumbnail-slider', {
    arrows     : false,
    rewind          : true,
    fixedWidth      : 104,
    fixedHeight     : 58,
    isNavigation    : true,
    gap             : 10,
    // focus           : 'center',
    pagination      : false,
    cover           : true,
    type            : 'loop',
    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },
    breakpoints : {
        640: {
        fixedWidth  : 66,
        fixedHeight : 38,
        },
    },
} );

splide.sync( thumbnails );
splide.mount();
thumbnails.mount();

} );