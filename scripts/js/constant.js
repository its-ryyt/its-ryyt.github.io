'use strict';

$(document).ready(function () {

    var window_width = null;
    var window_height = null;
    var clickPage = clickPage = localStorage.getItem("clickPage");

    //Check if Page is Reloaded
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        deviceSize();
    }

    function deviceSize() {
        window_width = $(window).width();
        window_height = $(window).height();

        //375 560
        var sideNav_prog = document.getElementsByClassName('sideNavProg');
        var sideNav_dev = document.getElementsByClassName('sideNavDev');

        if (Number(window_width) >= 375 && Number(window_width) <= 575) {
            [].forEach.call(sideNav_prog, function(el) {
                el.classList.remove("d-none");
            });

            [].forEach.call(sideNav_dev, function(el) {
                el.classList.remove("d-none");
            });
        } else {
            [].forEach.call(sideNav_prog, function(el) {
                el.classList.add("d-none");
            });

            [].forEach.call(sideNav_dev, function(el) {
                el.classList.add("d-none");
            });
        }
    }

    window.addEventListener('resize', function(event) {
        deviceSize();
    });

    if(clickPage === "" || clickPage === null || clickPage === undefined){
        //Set Initial Page Load Value
        localStorage.setItem("clickPage", "About");
    }

    //OnClick - ABOUT
    $(document).on("click", "#page_about", function () {
        localStorage.setItem("clickPage", "About");
      });

    //OnClick - CONTACT
    $(document).on("click", "#page_contact", function () {
        localStorage.setItem("clickPage", "Contact");
      });

    //OnClick - Project
    $(document).on("click", "#page_project", function () {
        localStorage.setItem("clickPage", "Project");
      });

    //OnClick - Services
    $(document).on("click", "#page_services", function () {
        localStorage.setItem("clickPage", "Services");
      });

//Each About Projects -=======================================

    //OnClick - Project Image
    $(document).on("click", "#projectImage", function () {
        $('#projectModal').modal('show');
      });
      
    //OnClick - Developer Gallery Image
    $(document).on("click", "#devGallery", function () {
      $('#galleryPopupModal').modal('show');
    });

//END Each About Projects -=======================================

    //OnClick - DOwnload CV
    $(document).on("click", "#dl-CV", function () {
      console.log("Download CV");
    });
    
    //Initialize AOS Animation
    AOS.init({
        duration: 1200,
    });

    var pdIsRTL = window.config.config.pdIsRTL;
    if (pdIsRTL) {
      var linkDefault = document.getElementById('style-default');
      var userLinkDefault = document.getElementById('user-style-default');
      linkDefault.setAttribute('disabled', true);
      userLinkDefault.setAttribute('disabled', true);
      document.querySelector('html').setAttribute('dir', 'rtl');
    } else {
      var linkRTL = document.getElementById('style-rtl');
      var userLinkRTL = document.getElementById('user-style-rtl');
      linkRTL.setAttribute('disabled', true);
      userLinkRTL.setAttribute('disabled', true);
    }

    //Whirly Loader Page
    setTimeout(function() {
        $('#global-loader');
        setTimeout(function() {
          $("#global-loader").fadeOut("slow");
        }, 100);
        deviceSize();
      }, 400);
    //END Whirly Loader Page

      var navbarStyle = window.config.config.phoenixNavbarStyle;
      if (navbarStyle && navbarStyle !== 'transparent') {
        document.querySelector('body').classList.add(`navbar-${navbarStyle}`);
      }

      var navbarDefault = document.querySelector('#navbarDefault');
      var documentElement = document.documentElement;
      var navbarVertical = document.querySelector('.navbar-vertical');
      var navbarTop = document.querySelector('#navbarTop');
      navbarDefault.removeAttribute('style');
      navbarVertical.removeAttribute('style');

      var navbarTopStyle = window.config.config.pdNavbarTopStyle;
      var navbarTop = document.querySelector('.navbar-top');
      if (navbarTopStyle === 'darker') {
        navbarTop.setAttribute('data-navbar-appearance', 'darker');
      }

      var navbarVerticalStyle = window.config.config.pdNavbarVerticalStyle;
      var navbarVertical = document.querySelector('.navbar-vertical');
      if (navbarVerticalStyle === 'darker') {
        navbarVertical.setAttribute('data-navbar-appearance', 'darker');
      }

    //Scroll To TOP
    $('#back-to-top').hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
            $('#back-to-top').show();
        } else {
            $('#back-to-top').fadeOut();
            $('#back-to-top').hide();
        }
    });
    //Scroll body to 0px on click
    $('#back-to-top').click(function () {
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $("html").css("scrollBehavior", "auto");
    });

    $('#footerback-to-top').click(function() {
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $("html").css("scrollBehavior", "auto");
    });
    //END Scroll To TOP

    document.addEventListener('contextmenu',(e)=>{
      e.preventDefault();
    });
    
    document.onkeydown = function(e) {
      if(event.keyCode == 123) {
        return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
      }
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
      }
    }

    //SET About Page
    if(clickPage === "About"){

    }
}); 
//END TAG