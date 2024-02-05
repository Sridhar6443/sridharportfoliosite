//Code for hamburger
  const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
  const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
  const menuItems = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
  
  // Toggle the 'active' class for the hamburger and mobile menu
  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  };
  
  // Add click event listener to the hamburger
  hamburger.addEventListener('click', toggleMenu);
  
  // Add click event listener to each menu item to close the menu
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  });
//End of code for hanburger
  
//Code for about section
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
      reveal('#about img', 'img-active');
      reveal('#about .text', 'text-active');
  });

  function reveal(selector, activeClass) {
      var element = document.querySelector(selector);
      var windowheight = window.innerHeight;
      var revealtop = element.getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
          element.classList.add(activeClass);
      } else {
          element.classList.remove(activeClass);
      }
  }
});
//End of about section

//Code for timeline in education
  document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.timeline li');

    function elementInView(el) {
      var rect = el.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    function timelineCallBack() {
      for (var i = 0; i < items.length; i++) {
        if (elementInView(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    function reveal(selector, activeClass) {
      var elements = document.querySelectorAll(selector);

      elements.forEach(function (element) {
        if (elementInView(element)) {
          element.classList.add(activeClass);
        }
      });
    }

    window.onload = function () {
      timelineCallBack();
      reveal('#education h2.education', 'education-h2-active');
    };

    window.onresize = function () {
      timelineCallBack();
      reveal('#education h2.education', 'education-h2-active');
    };

    window.onscroll = function () {
      timelineCallBack();
      reveal('#education h2.education', 'education-h2-active');
    };
  });
//End of code for timeline in education

//Code for Skills
window.addEventListener('scroll', function () {
  reveal('.reveal');
  reveal('.reveal2');
  revealY('.skills-heading');
});

function reveal(className) {
  var reveals = document.querySelectorAll(className);

  for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add('active');
      } else {
          reveals[i].classList.remove('active');
      }
  }
}
//End of code for skills
   
// Code for certifications section
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  // Close all accordions initially on mobile screens
  if (window.innerWidth <= 900) {
    acc[i].classList.remove("active");
    acc[i].classList.remove("minus");
    acc[i].nextElementSibling.style.maxHeight = null;
  }

  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;

    // Close the clicked accordion if it's already open
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      this.classList.remove("minus");
      panel.style.maxHeight = null;
    } else {
      // Close other accordions
      for (var j = 0; j < acc.length; j++) {
        if (j !== i) {
          acc[j].classList.remove("active");
          acc[j].classList.remove("minus");
          acc[j].nextElementSibling.style.maxHeight = null;
        }
      }

      // Open the clicked accordion
      this.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.classList.add("minus"); // Add the class for minus icon
    }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    reveal('#certifications h2', 'h2-active');
    reveal('#certifications .accordion', 'accordion-active');
    reveal('#certifications .panel', 'panel-active');
  });

  function reveal(selector, activeClass) {
    var elements = document.querySelectorAll(selector);
    var windowheight = window.innerHeight;

    elements.forEach(function (element) {
      var revealtop = element.getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        element.classList.add(activeClass);
      } else {
        element.classList.remove(activeClass);
      }
    });
  }
});

//Code for Contact Section
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    reveal('#contact h2', 'h2-active');
    reveal('#contact p', 'p-active');
    reveal('#contact .contactForm', 'contactForm-active');
  });

  function reveal(selector, activeClass) {
    var elements = document.querySelectorAll(selector);
    var windowheight = window.innerHeight;

    elements.forEach(function (element) {
      var revealtop = element.getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        element.classList.add(activeClass);
      } else {
        element.classList.remove(activeClass);
      }
    });
  }
});
//End of Contact Section