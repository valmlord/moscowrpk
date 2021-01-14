import "./modules/jquery.js";
import "./modules/test.js";
import "./modules/sweetalert.js";
import "./modules/maskedinput.js";
import tabs from "./modules/tabs";
import gsap from "gsap";

window.addEventListener("DOMContentLoaded", () => {
	"use strict";

	tabs(
		".portfolio__tabs",
		".portfolio__tab",
		".portfolio__content",
		"portfolio__tab_active"
	);
});

//MODALS

$('[data-modal=quiz]').on('click', function () {
	$('.test__overlay, #test').fadeIn('slow');
});

$('.btn-center').on('click', function () {
	$('.test__overlay, #test').fadeOut('slow');
});

// HAMBURGER

window.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".menu__list"),
		submenu = document.querySelector(".submenu__list"),
		menuItem = document.querySelectorAll(".menu__link"),
		hamburger = document.querySelector(".hamburger");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("hamburger_active");
		menu.classList.toggle("menu__list_active");
		submenu.classList.toggle("submenu__list_active");
	});

	menuItem.forEach((item) => {
		item.addEventListener("click", () => {
			hamburger.classList.toggle("hamburger_active");
			menu.classList.toggle("menu__list_active");
			submenu.classList.toggle("submenu__list_active");
		});
	});
});

//AJAX	  

$('form').submit(function (e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "assets/sender/quiz_sendform.php",
		data: $(this).serialize()
	});
	success: swal({
			title: "Спасибо за заявку!",
			type: "success",
			showConfirmButton: false,
			timer: 1000,
		})
		.done(function () {
			$(this).find("input").val("");
			$('form').trigger('reset');
		});
	return false;
});

// MASKED INPUT

jQuery(function ($) {
	$('input[name=phone]').mask('8 (999) 999-99-99');
});

// FAQ

/* const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
	this.classList.toggle('active');
	this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion)); */

// NUMBERS

var currentNumber = $('#dynamic-number').text();
var currentNumber2 = $('#dynamic-number2').text();
var currentNumber3 = $('#dynamic-number3').text();
var currentNumber4 = $('#dynamic-number4').text();

$({
	numberValue: currentNumber,
	numberValue2: currentNumber2,
	numberValue3: currentNumber3,
	numberValue4: currentNumber4
}).animate({
	numberValue: 10,
	numberValue2: 150,
	numberValue3: 12,
	numberValue4: 36
}, {
	duration: 1000,
	easing: 'linear',
	step: function () {
		$('#dynamic-number').text(Math.ceil(this.numberValue));
		$('#dynamic-number2').text(Math.ceil(this.numberValue2));
		$('#dynamic-number3').text(Math.ceil(this.numberValue3));
		$('#dynamic-number4').text(Math.ceil(this.numberValue4));
	}
});

// ACCORDION

// stagger items
gsap.fromTo('.accordion-item', {
	autoAlpha: 0,
	scale: 0.9
}, {
	duration: 1,
	autoAlpha: 1,
	scale: 1,
	ease: Power1.easeInOut,
	stagger: '.05'
});

// function open and close accordion itens
const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach(itemAccordion => {
	// accordion content
	const accordionTitle = itemAccordion.querySelector(".faq__title");
	const accordionContent = itemAccordion.querySelector(".content");
	const accordionArrow = itemAccordion.querySelector(".arrow");

	// on click title
	accordionTitle.addEventListener("click", event => {
		// prevent click
		event.preventDefault();

		// check if accordion item is open
		if (!itemAccordion.classList.contains("-active")) {
			// close others accordions
			const accordionItemsActive = document.querySelectorAll(".accordion-item.-active");
			accordionItemsActive.forEach(itemAccordionActive => {
				const accordionContent = itemAccordionActive.querySelector(".content");
				const accordionArrow = itemAccordionActive.querySelector(".arrow");

				// remove active class accordion item
				itemAccordionActive.classList.remove("-active");

				// close content
				gsap.to(accordionContent, {
					duration: '.5',
					height: 0,
					display: "none",
					autoAlpha: 0,
					ease: "expo.inOut"
				});

				// rotate arrow
				gsap.to(accordionArrow, {
					duration: '.5',
					autoAlpha: 0,
					y: -10,
					ease: "back.in",
					onComplete: function () {
						gsap.set(accordionArrow, {
							rotation: 0
						});
					}
				});
				gsap.to(accordionArrow, {
					duration: '.5',
					autoAlpha: 1,
					y: 0,
					ease: "back.out",
					delay: '.5'
				});
			});

			// add active class accordion item
			itemAccordion.classList.add("-active");

			// open content 
			gsap.set(accordionContent, {
				height: "auto",
				display: "block",
				autoAlpha: 1
			});
			gsap.from(accordionContent, {
				duration: '.5',
				height: 0,
				display: "none",
				autoAlpha: 0,
				ease: "expo.inOut"
			});

			// rotate arrow
			gsap.to(accordionArrow, {
				duration: '.5',
				autoAlpha: 0,
				y: 10,
				ease: "back.in",
				onComplete: function () {
					gsap.set(accordionArrow, {
						rotation: 180
					});
				}
			});
			gsap.to(accordionArrow, {
				duration: '.5',
				autoAlpha: 1,
				y: 0,
				ease: "back.out",
				delay: '.5'
			});

		} else {
			// remove active class accordion item
			itemAccordion.classList.remove("-active");

			// close content
			gsap.to(accordionContent, {
				duration: '.5',
				height: 0,
				display: "none",
				autoAlpha: 0,
				ease: "expo.inOut"
			});

			// rotate arrow
			gsap.to(accordionArrow, {
				duration: '.5',
				autoAlpha: 0,
				y: -10,
				ease: "back.in",
				onComplete: function () {
					gsap.set(accordionArrow, {
						rotation: 0
					});
				}
			});
			gsap.to(accordionArrow, {
				duration: '.5',
				autoAlpha: 1,
				y: 0,
				ease: "back.out",
				delay: '.5'
			});
		}
	});
});