"use strict";

//slick
$(function () {
  $('#slick_slider').slick({
    slidesToShow: 4,
    lazyLoad: 'ondemand',
    arrows: true,
    responsive: [{
      breakpoint: 950,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 620,
      settings: {
        slidesToShow: 2,
        arrows: false,
        centerMode: true,
        centerPadding: '40px'
      }
    }, {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '40px'
      }
    }]
  }); //light

  var lSlider = $("#light_slider").lightSlider({
    item: 4,
    loop: true,
    pager: false,
    controls: false,
    slideMargin: 20,
    responsive: [{
      breakpoint: 950,
      settings: {
        item: 3
      }
    }, {
      breakpoint: 620,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 450,
      settings: {
        item: 1
      }
    }],
    onSliderLoad: function onSliderLoad(el) {
      var showActiveSlides = function showActiveSlides(entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      };

      var imageWidth = el.find("li").outerWidth() + "px";
      var observer = new window.IntersectionObserver(showActiveSlides, {
        root: el.parent()[0],
        rootMargin: "0px " + imageWidth + " 0px " + imageWidth
      });
      el.find("li img").each(function () {
        observer.observe(this);
      });
    }
  });
  $('.prev').on('click', function () {
    lSlider.goToPrevSlide();
  });
  $('.next').on('click', function () {
    lSlider.goToNextSlide();
  }); //owl

  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    margin: 20,
    nav: true,
    navText: [$('.owlnext'), $('.owlprev')],
    lazyLoad: true,
    items: 4,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        center: true
      },
      450: {
        items: 2,
        center: true
      },
      620: {
        items: 3
      },
      950: {
        items: 4
      }
    }
  });
});