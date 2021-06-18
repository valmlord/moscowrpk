// STAGGER ITEMS
gsap.fromTo(
    ".accordion-item",
    {
      autoAlpha: 0,
      scale: 0.9,
    },
    {
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: Power1.easeInOut,
      stagger: ".05",
    }
  );
  
  // ACCORDION
  
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((itemAccordion) => {
    // accordion content
    const accordionTitle = itemAccordion.querySelector(".faq__title");
    const accordionContent = itemAccordion.querySelector(".content");
    const accordionArrow = itemAccordion.querySelector(".arrow");
  
    // on click title
    accordionTitle.addEventListener("click", (event) => {
      // prevent click
      event.preventDefault();
  
      // check if accordion item is open
      if (!itemAccordion.classList.contains("-active")) {
        // close others accordions
        const accordionItemsActive = document.querySelectorAll(
          ".accordion-item.-active"
        );
        accordionItemsActive.forEach((itemAccordionActive) => {
          const accordionContent = itemAccordionActive.querySelector(".content");
          const accordionArrow = itemAccordionActive.querySelector(".arrow");
  
          // remove active class accordion item
          itemAccordionActive.classList.remove("-active");
  
          // close content
          gsap.to(accordionContent, {
            duration: ".5",
            height: 0,
            display: "none",
            autoAlpha: 0,
            ease: "expo.inOut",
          });
  
          // rotate arrow
          gsap.to(accordionArrow, {
            duration: ".5",
            autoAlpha: 0,
            y: -10,
            ease: "back.in",
            onComplete: function () {
              gsap.set(accordionArrow, {
                rotation: 0,
              });
            },
          });
          gsap.to(accordionArrow, {
            duration: ".5",
            autoAlpha: 1,
            y: 0,
            ease: "back.out",
            delay: ".5",
          });
        });
  
        // add active class accordion item
        itemAccordion.classList.add("-active");
  
        // open content
        gsap.set(accordionContent, {
          height: "auto",
          display: "block",
          autoAlpha: 1,
        });
        gsap.from(accordionContent, {
          duration: ".5",
          height: 0,
          display: "none",
          autoAlpha: 0,
          ease: "expo.inOut",
        });
  
        // rotate arrow
        gsap.to(accordionArrow, {
          duration: ".5",
          autoAlpha: 0,
          y: 10,
          ease: "back.in",
          onComplete: function () {
            gsap.set(accordionArrow, {
              rotation: 180,
            });
          },
        });
        gsap.to(accordionArrow, {
          duration: ".5",
          autoAlpha: 1,
          y: 0,
          ease: "back.out",
          delay: ".5",
        });
      } else {
        // remove active class accordion item
        itemAccordion.classList.remove("-active");
  
        // close content
        gsap.to(accordionContent, {
          duration: ".5",
          height: 0,
          display: "none",
          autoAlpha: 0,
          ease: "expo.inOut",
        });
  
        // rotate arrow
        gsap.to(accordionArrow, {
          duration: ".5",
          autoAlpha: 0,
          y: -10,
          ease: "back.in",
          onComplete: function () {
            gsap.set(accordionArrow, {
              rotation: 0,
            });
          },
        });
        gsap.to(accordionArrow, {
          duration: ".5",
          autoAlpha: 1,
          y: 0,
          ease: "back.out",
          delay: ".5",
        });
      }
    });
  });
  