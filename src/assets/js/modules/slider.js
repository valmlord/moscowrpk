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

    $('.mockup-reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        appendArrows: ('.mockup-reviews__slider-nav'),
        prevArrow: '<button id="prev" type="button" class="btn btn-prev"><span class="icon-prev"></span></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-next"><span class="icon-next"></span></button>',
        fade: true
    });
  });