// Loader Animation
function loaderAnimation() {
  const loaderPercentage = document.querySelector(".loader-percentage");
  gsap.to(".loader-blob", {
    y: 100,
    x: 20,
    rotation: 360,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 1,
  });

  const loaderTl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  loaderTl.to(".loader-logo span", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.08,
  });

  loaderTl.to(
    ".loader-tagline",
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
    },
    "-=.35",
  );

  loaderTl.to(
    ".loader-progress",
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
    },
    "-=.2",
  );

  loaderTl.to(
    ".loader-percentage",
    {
      opacity: 1,
      duration: 0.3,
    },
    "-=.2",
  );

  loaderTl.to(".loader-progress-fill", {
    width: "100%",
    duration: 2,
    ease: "power2.inOut",
  });

  let progress = {
    value: 0,
  };

  loaderTl.to(
    progress,
    {
      value: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate() {
        loaderPercentage.textContent = Math.floor(progress.value) + "%";
      },
    },
    "<",
  );

  loaderTl.to(
    {},
    {
      duration: 0.3,
    },
  );

  loaderTl.to(".loader-logo", {
    scale: 1.06,
    duration: 0.25,
    ease: "power2.out",
  });

  loaderTl.to([".loader-tagline", ".loader-progress", ".loader-percentage"], {
    opacity: 0,
    duration: 0.35,
    y: -20,
    stagger: 0.5,
  });

  loaderTl.to(".loader", {
    yPercent: "-100",
    duration: 1.2,
    ease: "power4.inOut",
  });

  loaderTl.set(".loader", {
    display: "none",
  });

  loaderTl.to(
    "main",
    {
      opacity: 1,
      duration: 0.5,
    },
    "-=0.5",
  );
}

loaderAnimation();

function cursorAnimation() {
  let crsrDot = document.querySelector(".dot");
  let crsrRing = document.querySelector(".ring");
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let ringX = mouseX;
  let ringY = mouseY;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  ringX = mouseX;
  ringY = mouseY;

  const setDotX = gsap.quickSetter(crsrDot, "x", "px");
  const setDotY = gsap.quickSetter(crsrDot, "y", "px");

  const setRingX = gsap.quickSetter(crsrRing, "x", "px");
  const setRingY = gsap.quickSetter(crsrRing, "y", "px");
  gsap.ticker.add(() => {
    // Dot follows instantly
    setDotX(mouseX);
    setDotY(mouseY);

    // Ring smoothly catches up
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    setRingX(ringX);
    setRingY(ringY);
  });

  // particles effect
  document.addEventListener("click", (e) => {
    const colors = ["#00E58B", "#6FFFC5", "#FFFFFF"];

    for (let i = 0; i < 8; i++) {
      // Create Particle
      const particle = document.createElement("span");
      particle.classList.add("cursor-particle");

      document.body.appendChild(particle);

      // Random Values
      const angle = Math.random() * Math.PI * 2;
      const distance = gsap.utils.random(30, 80);
      const size = gsap.utils.random(2, 8);

      const color = colors[Math.floor(Math.random() * colors.length)];

      // Convert angle into x/y movement
      const moveX = Math.cos(angle) * distance;
      const moveY = Math.sin(angle) * distance;

      // Initial State
      gsap.set(particle, {
        x: e.clientX,
        y: e.clientY,
        width: size,
        height: size,
        backgroundColor: color,
      });

      // Animation
      gsap.to(particle, {
        x: e.clientX + moveX,
        y: e.clientY + moveY,
        opacity: 0,
        scale: 0,
        duration: gsap.utils.random(0.35, 0.6),
        ease: "power2.out",
        onComplete() {
          particle.remove();
        },
      });
    }
  });
}

cursorAnimation();

// navbar functionality
function navbarFuncAndAnimation() {
  // theme toggle functionality
  const themeToggle = document.querySelector(".theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });

  // Navbar burger functionality
  const burger = document.querySelector(".burger");
  burger.addEventListener('click', () => {
    burger.classList.toggle('clicked');
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("is-open");
  })
}

navbarFuncAndAnimation();


// =========================================
// Magnetic Elements
// =========================================

function magneticButtons() {

    // Find every element that should have
    // the magnetic effect.
    const magneticElements = document.querySelectorAll(".magnetic");
    magneticElements.forEach((element) => {

        // Create a quick animation setter for X.
        const moveX = gsap.quickTo(element, "x", {
            duration: 0.45,
            ease: "power3.out"
        });

        // Create a quick animation setter for Y.
        const moveY = gsap.quickTo(element, "y", {
            duration: 0.45,
            ease: "power3.out"
        });


        // When the cursor enters the element.
        element.addEventListener("mouseenter", () => {
            gsap.to(element, {
                scale: 1.02,
                duration: 0.35,
                ease: "power3.out"
            });
        });

        // Track the cursor while it is inside.
        element.addEventListener("mousemove", (e) => {
            // Get the element's position and dimensions.
            const rect = element.getBoundingClientRect();
            // Find the center of the element.
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            // Calculate cursor distance from the center.
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            // Reduce the movement so the button
            // only follows the cursor slightly.
            const strength = 0.25;
            // Move the element toward the cursor.
            moveX(distanceX * strength);
            moveY(distanceY * strength);
        });

        // When the cursor leaves the element.
        element.addEventListener("mouseleave", () => {
            // Return the element smoothly to its
            // original position.
            moveX(0);
            moveY(0);
            // Return the scale to normal.
            gsap.to(element, {
                scale: 1,
                duration: 0.45,
                ease: "elastic.out(1, 0.5)"
            });
        });
    });
}


magneticButtons();



document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector("#craftsmanship");

    if (!section) return;


    /* -------------------------------------------------
       ELEMENTS
    ------------------------------------------------- */

    const images = section.querySelectorAll(".craft-image");
    const points = section.querySelectorAll(".craft-point");
    const currentNumber = section.querySelector(".current-number");
    const progressFill = section.querySelector(".progress-fill");


    /* -------------------------------------------------
       SAFETY CHECK
    ------------------------------------------------- */

    if (
        images.length === 0 ||
        points.length === 0
    ) {
        return;
    }


    /* -------------------------------------------------
       UPDATE CRAFTSMANSHIP
    ------------------------------------------------- */

    function updateCraftsmanship() {

        const rect = section.getBoundingClientRect();

        /*
         * How far have we travelled through
         * the Craftsmanship section?
         *
         * 0 = section just entered
         * 1 = section completely finished
         */

        const scrollableDistance =
            section.offsetHeight - window.innerHeight;

        let progress =
            -rect.top / scrollableDistance;


        /* Keep progress between 0 and 1 */

        progress = Math.max(0, Math.min(1, progress));


        /* -------------------------------------------------
           CALCULATE CURRENT STEP
        ------------------------------------------------- */

        const totalSteps = images.length;

        let index = Math.floor(progress * totalSteps);

        /*
         * Prevent index from becoming 3
         * when progress reaches exactly 1.
         */

        index = Math.min(index, totalSteps - 1);


        /* -------------------------------------------------
           CHANGE IMAGES
        ------------------------------------------------- */

        images.forEach((image, i) => {

            image.classList.toggle(
                "active",
                i === index
            );

        });


        /* -------------------------------------------------
           CHANGE STORY POINT
        ------------------------------------------------- */

        points.forEach((point, i) => {

            point.classList.toggle(
                "active",
                i === index
            );

        });


        /* -------------------------------------------------
           UPDATE NUMBER
        ------------------------------------------------- */

        if (currentNumber) {

            currentNumber.textContent =
                String(index + 1).padStart(2, "0");

        }


        /* -------------------------------------------------
           UPDATE PROGRESS BAR
        ------------------------------------------------- */

        if (progressFill) {

            /*
             * 0% → 100%
             */

            progressFill.style.height =
                `${Math.max(33.333, (index + 1) * 33.333)}%`;

        }

    }


    /* -------------------------------------------------
       LISTEN TO SCROLL
    ------------------------------------------------- */

    window.addEventListener(
        "scroll",
        updateCraftsmanship,
        { passive: true }
    );


    /* -------------------------------------------------
       INITIAL STATE
    ------------------------------------------------- */

    updateCraftsmanship();

});
