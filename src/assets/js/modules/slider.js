import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){
    $('.portfolio-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
  });