"use strict";

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
  });
});