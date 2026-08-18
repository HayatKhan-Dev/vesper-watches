gsap.registerPlugin(ScrollTrigger);
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
      onComplete: () => {
        heroAnimation();
      },
    },
    "-=0.5",
  );
}

loaderAnimation();

function heroAnimation() {
  const heroTl = gsap.timeline({
    defaults: {
      ease: "power4.out",
    },
  });

  // --------------------------------------------------
  // Initial states
  // --------------------------------------------------

  gsap.set(".hero-outline", {
    opacity: 0,
    scale: 1.08,
    filter: "blur(8px)",
  });

  gsap.set(".hero-subtitle", {
    opacity: 0,
    y: 25,
  });

  gsap.set(".hero-content h1", {
    opacity: 0,
    y: 80,
    scale: 0.96,
  });

  gsap.set(".hero-description", {
    opacity: 0,
    y: 35,
  });

  gsap.set(".hero-buttons", {
    opacity: 0,
    y: 30,
  });

  gsap.set(".hero-watch", {
    opacity: 0,
    scale: 0.72,
    rotation: -8,
    y: 80,
  });

  gsap.set(".hero-watch img", {
    rotation: 5,
  });

  gsap.set(".hero-card-left", {
    opacity: 0,
    x: -70,
    y: 30,
    rotation: -6,
  });

  gsap.set(".hero-card-right", {
    opacity: 0,
    x: 70,
    y: 30,
    rotation: 6,
  });

  gsap.set(".hero-stats .stat", {
    opacity: 0,
    y: 30,
  });

  gsap.set(".scroll-indicator", {
    opacity: 0,
    x: 25,
  });

  // --------------------------------------------------
  // VESPER background reveal
  // --------------------------------------------------

  heroTl.to(".hero-outline", {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    duration: 1.8,
    ease: "power3.out",
  });

  // --------------------------------------------------
  // Subtitle
  // --------------------------------------------------

  heroTl.to(
    ".hero-subtitle",
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
    },
    "-=1.15"
  );

  // --------------------------------------------------
  // Main heading
  // --------------------------------------------------

  heroTl.to(
    ".hero-content h1",
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.15,
      ease: "power4.out",
    },
    "-=0.45"
  );

  // --------------------------------------------------
  // Watch reveal
  // --------------------------------------------------

  heroTl.to(
    ".hero-watch",
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      y: 0,
      duration: 1.5,
      ease: "power4.out",
    },
    "-=1"
  );

  heroTl.to(
    ".hero-watch img",
    {
      rotation: 0,
      duration: 1.5,
      ease: "power3.out",
    },
    "<"
  );

  // --------------------------------------------------
  // Description
  // --------------------------------------------------

  heroTl.to(
    ".hero-description",
    {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: "power3.out",
    },
    "-=0.7"
  );

  // --------------------------------------------------
  // Buttons
  // --------------------------------------------------

  heroTl.to(
    ".hero-buttons",
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
    },
    "-=0.4"
  );

  // --------------------------------------------------
  // Floating cards
  // --------------------------------------------------

  heroTl.to(
    ".hero-card-left",
    {
      opacity: 1,
      x: 0,
      y: 0,
      rotation: 0,
      duration: 1,
      ease: "back.out(1.4)",
    },
    "-=0.75"
  );

  heroTl.to(
    ".hero-card-right",
    {
      opacity: 1,
      x: 0,
      y: 0,
      rotation: 0,
      duration: 1,
      ease: "back.out(1.4)",
    },
    "<0.12"
  );

  // --------------------------------------------------
  // Stats
  // --------------------------------------------------

  heroTl.to(
    ".hero-stats .stat",
    {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.12,
      ease: "power3.out",
    },
    "-=0.5"
  );

  // --------------------------------------------------
  // Scroll indicator
  // --------------------------------------------------

  heroTl.to(
    ".scroll-indicator",
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.45"
  );

  // --------------------------------------------------
  // Hero atmosphere
  // --------------------------------------------------

  heroTl.to(
    ".glow-1",
    {
      opacity: 0.13,
      scale: 1.08,
      duration: 2,
      ease: "sine.out",
    },
    "-=1.2"
  );

  heroTl.to(
    ".glow-2",
    {
      opacity: 0.1,
      scale: 1.1,
      duration: 2,
      ease: "sine.out",
    },
    "<"
  );

  // --------------------------------------------------
  // After entrance: continuous Vesper movement
  // --------------------------------------------------

  heroAtmosphere();
}

function heroAtmosphere() {
  // ---------------------------------------------
  // Watch breathing / floating
  // ---------------------------------------------

  gsap.to(".hero-watch", {
    y: -12,
    rotation: 1.2,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // ---------------------------------------------
  // Watch image micro rotation
  // ---------------------------------------------

  gsap.to(".hero-watch img", {
    rotation: -2,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // ---------------------------------------------
  // Background glow movement
  // ---------------------------------------------

  gsap.to(".glow-1", {
    x: 60,
    y: 30,
    scale: 1.08,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".glow-2", {
    x: -50,
    y: -40,
    scale: 1.12,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // ---------------------------------------------
  // VESPER outline breathing
  // ---------------------------------------------

  gsap.to(".hero-outline", {
    scale: 1.025,
    opacity: 0.85,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // ---------------------------------------------
  // Floating information cards
  // ---------------------------------------------

  gsap.to(".hero-card-left", {
    y: -8,
    rotation: -1,
    duration: 4.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".hero-card-right", {
    y: 8,
    rotation: 1,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

function collectionsAnimation() {
  const section = document.querySelector(".collections");

  if (!section) return;

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: "power3.out",
    },
  });

  // --------------------------------
  // Initial states
  // --------------------------------

  gsap.set(
    [
      ".collections-header .section-label",
      ".collections-header h2",
      ".collections-link",
      ".collection-number",
      ".collection-title span",
      ".collection-title h3",
      ".collection-info > p",
      ".collection-meta div",
      ".collection-action",
      ".collection-watch img",
      ".watch-glow",
      ".watch-orbit",
      ".collection-preview",
    ],
    {
      opacity: 0,
    }
  );

  gsap.set(".collections-header .section-label", {
    y: 30,
  });

  gsap.set(".collections-header h2", {
    y: 60,
  });

  gsap.set(".collections-link", {
    y: 25,
  });

  gsap.set(".collection-number", {
    y: 25,
  });

  gsap.set(".collection-title span", {
    y: 20,
  });

  gsap.set(".collection-title h3", {
    y: 50,
  });

  gsap.set(".collection-info > p", {
    y: 30,
  });

  gsap.set(".collection-meta div", {
    y: 25,
  });

  gsap.set(".collection-action", {
    y: 30,
  });

  gsap.set(".collection-watch img", {
    scale: 0.72,
    y: 70,
    rotation: -8,
  });

  gsap.set(".watch-glow", {
    scale: 0.4,
  });

  gsap.set(".watch-orbit", {
    scale: 0.7,
    rotation: -55,
  });

  gsap.set(".collection-preview", {
    x: 40,
  });

  // --------------------------------
  // COLLECTION INTRO
  // --------------------------------

  tl.to(".collections-header .section-label", {
    opacity: 1,
    y: 0,
    duration: 0.5,
  })

    .to(
      ".collections-header h2",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "-=0.25"
    )

    .to(
      ".collections-link",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.5"
    );

  // --------------------------------
  // PRODUCT INFORMATION
  // --------------------------------

  tl.to(
    ".collection-number",
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
    },
    "-=0.15"
  )

    .to(
      ".collection-title span",
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
      },
      "-=0.25"
    )

    .to(
      ".collection-title h3",
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power4.out",
      },
      "-=0.25"
    )

    .to(
      ".collection-info > p",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.35"
    )

    .to(
      ".collection-meta div",
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=0.3"
    )

    .to(
      ".collection-action",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.25"
    );

  // --------------------------------
  // WATCH REVEAL
  // --------------------------------

  tl.to(
    ".watch-glow",
    {
      opacity: 0.12,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
    },
    "-=1"
  )

    .to(
      ".watch-orbit",
      {
        opacity: 1,
        scale: 1,
        rotation: -25,
        duration: 1.4,
        ease: "power3.out",
      },
      "<"
    )

    .to(
      ".collection-watch img",
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 1.3,
        ease: "power4.out",
      },
      "-=1"
    );

  // --------------------------------
  // PREVIEW STACK
  // --------------------------------

  tl.to(
    ".collection-preview",
    {
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: "power3.out",
    },
    "-=0.7"
  );

  // --------------------------------
  // SCROLLTRIGGER
  // --------------------------------

  ScrollTrigger.create({
    trigger: section,
    start: "top 75%",
    end: "bottom 25%",

    toggleActions: "play reverse play reverse",

    animation: tl,

    // Makes sure ScrollTrigger recalculates
    // correctly if the page layout changes.
    invalidateOnRefresh: true,
  });
}
collectionsAnimation()

function collectionsInteraction() {
  const section = document.querySelector(".collections");

  if (!section) return;

  const previewItems = section.querySelectorAll(".preview-item");

  const watchImage = section.querySelector(".collection-watch img");
  const collectionNumber = section.querySelector(".collection-number");

  const collectionBrand = section.querySelector(".collection-title span");
  const collectionTitle = section.querySelector(".collection-title h3");

  const description = section.querySelector(".collection-info > p");

  const metaValues = section.querySelectorAll(".collection-meta strong");

  const price = section.querySelector(".collection-price");
  const discoverButton = section.querySelector(".collection-action .btn");

  const collections = [
    {
      number: "01 / 04",
      brand: "Vesper",
      title: "Nocturne",
      image: "images/watch-nocturne.png",

      description:
        "A study in darkness and precision. Nocturne combines sculpted architecture with Swiss-inspired mechanical craftsmanship.",

      movement: "Automatic",
      case: "316L Steel",
      edition: "Limited 250",

      price: "$2,450",
      button: "Discover Nocturne",
    },

    {
      number: "02 / 04",
      brand: "Vesper",
      title: "Aurora",
      image: "images/watch-aurora.png",

      description:
        "Inspired by the first light of dawn, Aurora balances refined proportions with a luminous character designed to command attention.",

      movement: "Automatic",
      case: "Titanium",
      edition: "Limited 150",

      price: "$2,850",
      button: "Discover Aurora",
    },

    {
      number: "03 / 04",
      brand: "Vesper",
      title: "Onyx",
      image: "images/watch-onyx.png",

      description:
        "Bold, architectural and uncompromising. Onyx is crafted for those who appreciate precision hidden beneath a darker expression.",

      movement: "Automatic",
      case: "Black Steel",
      edition: "Limited 200",

      price: "$2,650",
      button: "Discover Onyx",
    },

    {
      number: "04 / 04",
      brand: "Vesper",
      title: "Emerald",
      image: "images/watch-emerald.png",

      description:
        "A celebration of Vesper's signature character. Emerald pairs deep tones with meticulous finishing for a timeless statement.",

      movement: "Automatic",
      case: "316L Steel",
      edition: "Limited 100",

      price: "$3,150",
      button: "Discover Emerald",
    },
  ];

  let currentIndex = 0;
  let isChanging = false;

  function updateCollection(index) {
    if (index === currentIndex || isChanging) return;

    const item = collections[index];

    isChanging = true;

    // --------------------------------
    // OUT ANIMATION
    // --------------------------------

    const outTl = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },

      onComplete() {
        // --------------------------------
        // UPDATE CONTENT
        // --------------------------------

        watchImage.src = item.image;
        watchImage.alt = `Vesper ${item.title} luxury watch`;

        collectionNumber.textContent = item.number;
        collectionBrand.textContent = item.brand;
        collectionTitle.textContent = item.title;

        description.textContent = item.description;

        metaValues[0].textContent = item.movement;
        metaValues[1].textContent = item.case;
        metaValues[2].textContent = item.edition;

        price.textContent = item.price;
        discoverButton.innerHTML = `
          ${item.button}
          <i class="fa-solid fa-arrow-right"></i>
        `;

        // --------------------------------
        // ACTIVE PREVIEW
        // --------------------------------

        previewItems.forEach((preview) => {
          preview.classList.remove("active");
        });

        previewItems[index].classList.add("active");

        currentIndex = index;

        // --------------------------------
        // IN ANIMATION
        // --------------------------------

        gsap.fromTo(
          [
            ".collection-number",
            ".collection-title span",
            ".collection-title h3",
            ".collection-info > p",
            ".collection-meta div",
            ".collection-action",
          ],
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.05,
            ease: "power3.out",
          }
        );

        gsap.fromTo(
          watchImage,
          {
            opacity: 0,
            scale: 0.82,
            rotation: -8,
            x: 35,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            x: 0,
            duration: 0.9,
            ease: "power4.out",

            onComplete() {
              isChanging = false;
            },
          }
        );

        // Little orbit reaction
        gsap.fromTo(
          ".watch-orbit",
          {
            rotation: -45,
            scale: 0.9,
          },
          {
            rotation: -25,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
      },
    });

    // Text exits
    outTl.to(
      [
        ".collection-number",
        ".collection-title span",
        ".collection-title h3",
        ".collection-info > p",
        ".collection-meta div",
        ".collection-action",
      ],
      {
        opacity: 0,
        y: -15,
        duration: 0.3,
        stagger: 0.025,
      }
    );

    // Watch exits
    outTl.to(
      watchImage,
      {
        opacity: 0,
        scale: 0.82,
        x: -35,
        rotation: 8,
        duration: 0.45,
        ease: "power3.in",
      },
      "<"
    );
  }

  // --------------------------------
  // PREVIEW CLICK
  // --------------------------------

  previewItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      updateCollection(index);
    });
  });
}
collectionsInteraction();

function craftsmanshipAnimation() {
  const section = document.querySelector(".craftsmanship");

  if (!section) return;

  const images = gsap.utils.toArray(".craft-image");
  const points = gsap.utils.toArray(".craft-point");

  const currentNumber = document.querySelector(".current-number");
  const progressFill = document.querySelector(".progress-fill");

  // ----------------------------------------
  // INITIAL STATE
  // ----------------------------------------

  gsap.set(".craftsmanship-heading > span", {
    opacity: 0,
    y: 25,
  });

  gsap.set(".craftsmanship-heading h2", {
    opacity: 0,
    y: 60,
  });

  gsap.set(".craftsmanship-visual", {
    opacity: 0,
    scale: 0.92,
    y: 40,
  });

  gsap.set(".craftsmanship-meta", {
    opacity: 0,
    x: 30,
  });

  gsap.set(".craftsmanship-progress", {
    opacity: 0,
    x: 20,
  });

  gsap.set(".craft-point", {
    opacity: 0,
    y: 25,
  });

  // ----------------------------------------
  // MAIN TIMELINE
  // ----------------------------------------

  const tl = gsap.timeline({
    paused: true,
  });

  // ----------------------------------------
  // SECTION ENTRANCE
  // ----------------------------------------

  tl.to(".craftsmanship-heading > span", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power3.out",
  })

    .to(
      ".craftsmanship-heading h2",
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power4.out",
      },
      "-=0.25"
    )

    .to(
      ".craftsmanship-visual",
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.1,
        ease: "power4.out",
      },
      "-=0.65"
    )

    .to(
      ".craftsmanship-meta",
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.7"
    )

    .to(
      ".craftsmanship-progress",
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.6"
    );

  // ----------------------------------------
  // POINT 01
  // ----------------------------------------

  tl.to(
    ".craft-point:nth-child(1)",
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.45"
  );

  // ----------------------------------------
  // IMAGE 01
  // ----------------------------------------

  tl.to(
    images[0],
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    },
    "<"
  );

  // ----------------------------------------
  // HOLD 01
  // ----------------------------------------

  tl.to({}, {
    duration: 0.8,
  });

  // ----------------------------------------
  // TRANSITION → 02
  // ----------------------------------------

  tl.to(".craft-point:nth-child(1)", {
    opacity: 0,
    y: -25,
    duration: 0.45,
    ease: "power2.inOut",
  })

    .to(
      ".craft-point:nth-child(2)",
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
      },
      "-=0.15"
    )

    .to(
      images[0],
      {
        opacity: 0,
        scale: 1.05,
        duration: 0.65,
        ease: "power2.inOut",
      },
      "<"
    )

    .to(
      images[1],
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4"
    )

    .call(() => {
      currentNumber.textContent = "02";
    });

  // ----------------------------------------
  // HOLD 02
  // ----------------------------------------

  tl.to({}, {
    duration: 0.8,
  });

  // ----------------------------------------
  // TRANSITION → 03
  // ----------------------------------------

  tl.to(".craft-point:nth-child(2)", {
    opacity: 0,
    y: -25,
    duration: 0.45,
    ease: "power2.inOut",
  })

    .to(
      ".craft-point:nth-child(3)",
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
      },
      "-=0.15"
    )

    .to(
      images[1],
      {
        opacity: 0,
        scale: 1.05,
        duration: 0.65,
        ease: "power2.inOut",
      },
      "<"
    )

    .to(
      images[2],
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4"
    )

    .call(() => {
      currentNumber.textContent = "03";
    });

  // ----------------------------------------
  // HOLD 03
  // ----------------------------------------

  tl.to({}, {
    duration: 0.8,
  });

  // ----------------------------------------
  // SCROLL PROGRESS
  // ----------------------------------------

  gsap.to(progressFill, {
    scaleY: 3,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });

  // ----------------------------------------
  // SCROLLTRIGGER
  // ----------------------------------------

  ScrollTrigger.create({
    trigger: section,

    start: "top top",
    end: "bottom bottom",

    animation: tl,

    scrub: 1,

    invalidateOnRefresh: true,

    onEnter() {
      section.classList.add("is-active");
    },

    onLeave() {
      section.classList.remove("is-active");
    },

    onEnterBack() {
      section.classList.add("is-active");
    },

    onLeaveBack() {
      section.classList.remove("is-active");
    },
  });

  // ----------------------------------------
  // RESET WHEN LEAVING
  // ----------------------------------------

  ScrollTrigger.create({
    trigger: section,

    start: "bottom bottom",
    end: "bottom bottom",

    onLeave() {
      images.forEach((image, index) => {
        image.classList.toggle("active", index === 0);
      });

      points.forEach((point, index) => {
        point.classList.toggle("active", index === 0);
      });

      currentNumber.textContent = "01";

      gsap.set(".craftsmanship-heading > span", {
        opacity: 0,
        y: 25,
      });

      gsap.set(".craftsmanship-heading h2", {
        opacity: 0,
        y: 60,
      });

      gsap.set(".craftsmanship-visual", {
        opacity: 0,
        scale: 0.92,
        y: 40,
      });

      gsap.set(".craftsmanship-meta", {
        opacity: 0,
        x: 30,
      });

      gsap.set(".craftsmanship-progress", {
        opacity: 0,
        x: 20,
      });
    },
  });
}
craftsmanshipAnimation();

function storyAnimation() {
  const story = document.querySelector(".story");

  if (!story) return;

  const time = story.querySelector(".story-title-top");
  const is = story.querySelector(".story-title-left");
  const not = story.querySelector(".story-title-right");
  const measured = story.querySelector(".story-title-bottom");

  const watch = story.querySelector(".story-watch");
  const watchObject = story.querySelector(".story-watch-object");
  const watchImage = story.querySelector(".story-watch-object img");

  const orbit1 = story.querySelector(".story-orbit-1");
  const orbit2 = story.querySelector(".story-orbit-2");

  const glow = story.querySelector(".story-watch-glow");

  const markers = story.querySelectorAll(".story-marker");

  const philosophy = story.querySelector(".story-philosophy");
  const philosophyLabel = story.querySelector(".story-philosophy-label");
  const philosophyTitle = philosophy?.querySelector("h2");
  const philosophyText = philosophy?.querySelector("p");

  const data = story.querySelector(".story-data");
  const dataItems = story.querySelectorAll(".story-data-item");

  const cta = story.querySelector(".story-cta");
  const footer = story.querySelector(".story-footer");

  const header = story.querySelector(".story-header");

  const bgWord = story.querySelector(".story-bg-word");
  const grid = story.querySelector(".story-grid");


  /*
  =====================================================
  INITIAL STATES
  =====================================================
  */

  gsap.set(header, {
    opacity: 0,
    y: -30
  });

  gsap.set(bgWord, {
    opacity: 0,
    scale: 0.8,
    rotation: -100
  });

  gsap.set(grid, {
    opacity: 0
  });

  gsap.set(time, {
    opacity: 0,
    y: 160,
    scale: 0.8
  });

  gsap.set(is, {
    opacity: 0,
    x: -220,
    rotation: -12
  });

  gsap.set(not, {
    opacity: 0,
    x: 220,
    rotation: 12
  });

  gsap.set(measured, {
    opacity: 0,
    y: 180,
    scale: 0.8
  });

  gsap.set(watch, {
    opacity: 0,
    scale: 0.65,
    rotation: -12
  });

  gsap.set(watchObject, {
    y: 40,
    rotation: 0
  });

  gsap.set(watchImage, {
    scale: 0.85
  });

  gsap.set([orbit1, orbit2], {
    opacity: 0,
    scale: 0.5
  });

  gsap.set(glow, {
    opacity: 0,
    scale: 0.4
  });

  gsap.set(markers, {
    opacity: 0,
    scale: 0
  });

  gsap.set(philosophyLabel, {
    opacity: 0,
    y: 25
  });

  gsap.set(philosophyTitle, {
    opacity: 0,
    y: 50
  });

  gsap.set(philosophyText, {
    opacity: 0,
    y: 30
  });

  gsap.set(data, {
    opacity: 0,
    x: 50
  });

  gsap.set(cta, {
    opacity: 0,
    y: -30
  });

  gsap.set(footer, {
    opacity: 0
  });


  /*
  =====================================================
  MASTER STORY TIMELINE
  =====================================================
  */

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: story,

      start: "top top",
      end: "bottom bottom",

      scrub: 1.4,

      invalidateOnRefresh: true
    }
  });


  /*
  =====================================================
  INTRO
  =====================================================
  */

  tl.to(header, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "power3.out"
  });

  tl.to(grid, {
    opacity: 0.25,
    duration: 0.5
  }, "<");

  tl.to(bgWord, {
    opacity: 0.18,
    scale: 1,
    rotation: -90,
    duration: 0.8,
    ease: "power3.out"
  }, "<");


  /*
  =====================================================
  TIME
  =====================================================
  */

  tl.to(watch, {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 1,
    ease: "power4.out"
  });

  tl.to(glow, {
    opacity: 0.13,
    scale: 1,
    duration: 1,
    ease: "power3.out"
  }, "<");

  tl.to([orbit1, orbit2], {
    opacity: 1,
    scale: 1,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
  }, "<");

  tl.to(time, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: "power4.out"
  }, "-=0.4");


  /*
  =====================================================
  TIME → IS
  =====================================================
  */

  tl.to(time, {
    y: -100,
    scale: 0.85,
    opacity: 0.25,
    duration: 0.7,
    ease: "power3.inOut"
  });

  tl.to(is, {
    opacity: 1,
    x: 0,
    rotation: 0,
    duration: 0.8,
    ease: "power4.out"
  }, "-=0.4");

  tl.to(watchObject, {
    y: -15,
    rotation: 7,
    duration: 0.8,
    ease: "power3.inOut"
  }, "<");


  /*
  =====================================================
  IS → NOT
  =====================================================
  */

  tl.to(is, {
    x: -100,
    opacity: 0.2,
    duration: 0.7,
    ease: "power3.inOut"
  });

  tl.to(not, {
    opacity: 1,
    x: 0,
    rotation: 0,
    duration: 0.8,
    ease: "power4.out"
  }, "-=0.4");

  tl.to(watchObject, {
    rotation: -8,
    y: 0,
    duration: 0.8,
    ease: "power3.inOut"
  }, "<");


  /*
  =====================================================
  NOT → MEASURED
  =====================================================
  */

  tl.to(not, {
    x: 100,
    opacity: 0.2,
    duration: 0.7,
    ease: "power3.inOut"
  });

  tl.to(measured, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: "power4.out"
  }, "-=0.4");

  tl.to(watchImage, {
    scale: 1.08,
    duration: 1,
    ease: "power3.out"
  }, "<");


  /*
  =====================================================
  THE MOMENT
  =====================================================
  */

  tl.to([time, is, measured], {
    opacity: 0,
    y: -30,
    duration: 0.7,
    ease: "power3.inOut"
  });

  tl.to(watch, {
    scale: 1.12,
    duration: 1,
    ease: "power3.inOut"
  }, "<");

  tl.to(watchObject, {
    rotation: 360,
    duration: 1.4,
    ease: "power2.inOut"
  }, "<");

  tl.to(glow, {
    scale: 1.4,
    opacity: 0.2,
    duration: 1,
    ease: "power3.out"
  }, "<");

  tl.to([orbit1, orbit2], {
    scale: 1.15,
    duration: 1,
    ease: "power3.out"
  }, "<");


  /*
  =====================================================
  PRECISION MARKERS
  =====================================================
  */

  tl.to(markers, {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    stagger: 0.15,
    ease: "back.out(1.7)"
  });


  /*
  =====================================================
  BUT EXPERIENCED
  =====================================================
  */

  tl.to(philosophyLabel, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power3.out"
  });

  tl.to(philosophyTitle, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power4.out"
  }, "-=0.25");

  tl.to(philosophyText, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.4");


  /*
  =====================================================
  DATA
  =====================================================
  */

  tl.to(data, {
    opacity: 1,
    x: 0,
    duration: 0.7,
    ease: "power3.out"
  });

  tl.to(dataItems, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    stagger: 0.12,
    ease: "power2.out"
  }, "<");


  /*
  =====================================================
  CTA
  =====================================================
  */

  tl.to(cta, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "back.out(1.5)"
  });

  tl.to(footer, {
    opacity: 1,
    duration: 0.5
  }, "-=0.2");
}


/*
=========================================================
START STORY ANIMATION
=========================================================
*/

storyAnimation();

/* =========================================================
   VESPER — REVIEWS
   Marquee + Hover + 3D Tilt + GSAP ScrollTrigger
========================================================= */

function initReviews() {
  const section = document.querySelector(".reviews");

  if (!section) return;

  const track = section.querySelector(".reviews-track");
  const cards = section.querySelectorAll(".review-card");

  if (!track || !cards.length) return;

  /* =====================================================
     GSAP SAFETY
  ===================================================== */

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* =====================================================
     MARQUEE VARIABLES
  ===================================================== */

  let position = 0;
  let speed = 0.35;
  let animationId;

  let isHovering = false;

  /* =====================================================
     INFINITE MARQUEE
  ===================================================== */

  function animateReviews() {
    if (!isHovering) {
      position -= speed;
    }

    const firstCard = cards[0];

    if (firstCard) {
      const cardWidth =
        firstCard.offsetWidth +
        parseFloat(getComputedStyle(track).gap || 0);

      /*
       * We have duplicated cards in the HTML.
       *
       * Once the first set has completely moved away,
       * reset to the beginning.
       */

      const resetPoint = cardWidth * (cards.length / 2);

      if (Math.abs(position) >= resetPoint) {
        position = 0;
      }
    }

    /*
     * Use transform instead of left/margin.
     * This keeps the animation GPU friendly.
     */

    gsap.set(track, {
      x: position,
    });

    animationId = requestAnimationFrame(animateReviews);
  }

  animateReviews();

  /* =====================================================
     CARD HOVER
  ===================================================== */

  cards.forEach((card) => {
    /* ---------------------------------------------
       MOUSE ENTER
    --------------------------------------------- */

    card.addEventListener("mouseenter", () => {
      isHovering = true;

      card.classList.add("is-hovered");

      /*
       * Smoothly bring card forward.
       */

      gsap.to(card, {
        z: 80,
        y: -18,
        scale: 1.08,

        duration: 0.45,

        ease: "power3.out",

        overwrite: true,
      });
    });

    /* ---------------------------------------------
       MOUSE MOVE
    --------------------------------------------- */

    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();

      /*
       * Mouse position inside card.
       */

      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      /*
       * Convert position to -1 → 1.
       */

      const normalizedX = mouseX / rect.width - 0.5;
      const normalizedY = mouseY / rect.height - 0.5;

      /*
       * 3D rotation.
       */

      const rotateY = normalizedX * 18;
      const rotateX = normalizedY * -18;

      gsap.to(card, {
        rotateX,
        rotateY,

        duration: 0.25,

        ease: "power2.out",

        overwrite: true,
      });
    });

    /* ---------------------------------------------
       MOUSE LEAVE
    --------------------------------------------- */

    card.addEventListener("mouseleave", () => {
      isHovering = false;

      card.classList.remove("is-hovered");

      /*
       * Return card to original state.
       */

      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        z: 0,
        y: 0,
        scale: 1,

        duration: 0.5,

        ease: "power3.out",

        overwrite: true,
      });
    });
  });

  /* =====================================================
     GSAP SCROLLTRIGGER
  ===================================================== */

  const bgNumber = section.querySelector(
    ".reviews-bg span:first-child"
  );

  const bgWord = section.querySelector(
    ".reviews-bg span:last-child"
  );

  const header = section.querySelector(".reviews-header");

  const eyebrow = section.querySelector(".reviews-eyebrow");

  const heading = section.querySelector(".reviews-header h2");

  const intro = section.querySelector(".reviews-intro");

  const marquee = section.querySelector(".reviews-marquee");

  const footer = section.querySelector(".reviews-footer");

  /* =====================================================
     INITIAL STATES
  ===================================================== */

  gsap.set(bgNumber, {
    x: -120,
    opacity: 0,
  });

  gsap.set(bgWord, {
    x: 120,
    opacity: 0,
  });

  gsap.set(header, {
    y: 70,
    opacity: 0,
  });

  gsap.set(eyebrow, {
    y: 25,
    opacity: 0,
  });

  gsap.set(heading, {
    y: 70,
    opacity: 0,
  });

  gsap.set(intro, {
    y: 40,
    opacity: 0,
  });

  gsap.set(marquee, {
    y: 100,
    opacity: 0,
  });

  /*
   * Give each card a slightly different
   * starting rotation.
   */

  gsap.set(cards, {
    y: 120,
    opacity: 0,
    scale: 0.88,

    rotateZ: (index) => {
      return index % 2 === 0 ? -4 : 4;
    },

    rotateY: 12,
  });

  gsap.set(footer, {
    y: 40,
    opacity: 0,
  });

  /* =====================================================
     MAIN SCROLL TIMELINE
  ===================================================== */

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      /*
       * Animation starts when section
       * enters the viewport.
       */

      start: "top 80%",

      /*
       * Animation finishes around here.
       */

      end: "top 15%",

      /*
       * IMPORTANT:
       *
       * scrub means the animation follows
       * the user's scrolling.
       *
       * Scroll down → animation plays.
       * Scroll up   → animation reverses.
       */

      scrub: 1.2,

      /*
       * markers: true,
       */
    },
  });

  /* =====================================================
     BACKGROUND NUMBER
  ===================================================== */

  tl.to(
    bgNumber,
    {
      x: 0,
      opacity: 0.3,

      duration: 1,

      ease: "power3.out",
    },
    0
  );

  /* =====================================================
     BACKGROUND WORD
  ===================================================== */

  tl.to(
    bgWord,
    {
      x: 0,
      opacity: 0.18,

      duration: 1,

      ease: "power3.out",
    },
    0
  );

  /* =====================================================
     HEADER
  ===================================================== */

  tl.to(
    header,
    {
      y: 0,
      opacity: 1,

      duration: 0.8,

      ease: "power4.out",
    },
    0.05
  );

  /* =====================================================
     EYEBROW
  ===================================================== */

  tl.to(
    eyebrow,
    {
      y: 0,
      opacity: 1,

      duration: 0.5,

      ease: "power3.out",
    },
    0.15
  );

  /* =====================================================
     HEADING
  ===================================================== */

  tl.to(
    heading,
    {
      y: 0,
      opacity: 1,

      duration: 0.8,

      ease: "power4.out",
    },
    0.2
  );

  /* =====================================================
     INTRO
  ===================================================== */

  tl.to(
    intro,
    {
      y: 0,
      opacity: 1,

      duration: 0.6,

      ease: "power3.out",
    },
    0.35
  );

  /* =====================================================
     MARQUEE CONTAINER
  ===================================================== */

  tl.to(
    marquee,
    {
      y: 0,
      opacity: 1,

      duration: 0.8,

      ease: "power3.out",
    },
    0.35
  );

  /* =====================================================
     CARDS
  ===================================================== */

  tl.to(
    cards,
    {
      y: 0,
      opacity: 1,

      scale: 1,

      rotateZ: 0,
      rotateY: 0,

      duration: 1,

      stagger: {
        each: 0.06,
      },

      ease: "power4.out",
    },
    0.45
  );

  /* =====================================================
     FOOTER
  ===================================================== */

  tl.to(
    footer,
    {
      y: 0,
      opacity: 1,

      duration: 0.6,

      ease: "power3.out",
    },
    0.9
  );

  /* =====================================================
     BACKGROUND PARALLAX
  ===================================================== */

  gsap.to(bgNumber, {
    yPercent: 15,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",

      end: "bottom top",

      scrub: true,
    },
  });

  gsap.to(bgWord, {
    yPercent: -12,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",

      end: "bottom top",

      scrub: true,
    },
  });

  /* =====================================================
     REFRESH
  ===================================================== */

  /*
   * Useful because card widths depend on
   * CSS and viewport size.
   */

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });

  /* =====================================================
     CLEANUP
  ===================================================== */

  window.addEventListener("beforeunload", () => {
    cancelAnimationFrame(animationId);
  });
}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initReviews();
});

/* =========================================================
   VESPER — CONTACT SCROLL ANIMATION
========================================================= */

function initContactScrollAnimation() {
  const section = document.querySelector(".contact");

  if (!section) return;

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* =====================================================
     ELEMENTS
  ===================================================== */

  const bgContact = section.querySelector(".contact-bg span:first-child");
  const bgVesper = section.querySelector(".contact-bg span:last-child");

  const glowOne = section.querySelector(".contact-glow-1");
  const glowTwo = section.querySelector(".contact-glow-2");

  const header = section.querySelector(".contact-header");
  const eyebrow = section.querySelector(".contact-eyebrow");
  const heading = section.querySelector(".contact-header h2");
  const description = section.querySelector(".contact-header p");

  const content = section.querySelector(".contact-content");

  const details = section.querySelectorAll(".contact-detail");
  const socials = section.querySelector(".contact-socials");

  const formWrapper = section.querySelector(".contact-form-wrapper");

  const formTop = section.querySelector(".contact-form-top");

  const fields = section.querySelectorAll(".contact-field");

  const submit = section.querySelector(".contact-submit");

  const bottom = section.querySelector(".contact-bottom");

  /* =====================================================
     INITIAL STATES
  ===================================================== */

  /*
   * Background typography
   */

  gsap.set(bgContact, {
    x: -180,
    opacity: 0,
  });

  gsap.set(bgVesper, {
    x: 180,
    opacity: 0,
  });

  /*
   * Ambient glows
   */

  gsap.set(glowOne, {
    scale: 0.6,
    opacity: 0,
  });

  gsap.set(glowTwo, {
    scale: 0.6,
    opacity: 0,
  });

  /*
   * Header
   */

  gsap.set(header, {
    opacity: 0,
    x: -80,
  });

  gsap.set(eyebrow, {
    opacity: 0,
    y: 25,
  });

  gsap.set(heading, {
    opacity: 0,
    y: 70,
  });

  gsap.set(description, {
    opacity: 0,
    y: 35,
  });

  /*
   * Left details
   */

  gsap.set(details, {
    opacity: 0,
    x: -60,
  });

  gsap.set(socials, {
    opacity: 0,
    x: -60,
  });

  /*
   * Form
   */

  gsap.set(formWrapper, {
    opacity: 0,
    y: 100,
    scale: 0.96,
  });

  gsap.set(formTop, {
    opacity: 0,
    y: 20,
  });

  gsap.set(fields, {
    opacity: 0,
    y: 35,
  });

  gsap.set(submit, {
    opacity: 0,
    y: 30,
  });

  /*
   * Bottom
   */

  gsap.set(bottom, {
    opacity: 0,
    y: 35,
  });

  /* =====================================================
     MAIN TIMELINE
  ===================================================== */

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      /*
       * Start when Contact enters
       * the lower portion of viewport.
       */

      start: "top 80%",

      /*
       * Finish while the section
       * reaches the upper portion.
       */

      end: "top 10%",

      /*
       * VERY IMPORTANT:
       *
       * This makes the animation
       * follow the scroll.
       *
       * Scroll down → plays.
       * Scroll up → reverses.
       */

      scrub: 1.2,

      /*
       * markers: true,
       */
    },
  });

  /* =====================================================
     BACKGROUND TYPOGRAPHY
  ===================================================== */

  tl.to(
    bgContact,
    {
      x: 0,
      opacity: 0.35,

      duration: 1.2,

      ease: "power3.out",
    },
    0
  );

  tl.to(
    bgVesper,
    {
      x: 0,
      opacity: 0.8,

      duration: 1.2,

      ease: "power3.out",
    },
    0
  );

  /* =====================================================
     AMBIENT GLOWS
  ===================================================== */

  tl.to(
    glowOne,
    {
      scale: 1,
      opacity: 0.08,

      duration: 1.2,

      ease: "power2.out",
    },
    0
  );

  tl.to(
    glowTwo,
    {
      scale: 1,
      opacity: 0.08,

      duration: 1.2,

      ease: "power2.out",
    },
    0.15
  );

  /* =====================================================
     HEADER
  ===================================================== */

  tl.to(
    header,
    {
      opacity: 1,
      x: 0,

      duration: 0.8,

      ease: "power4.out",
    },
    0.05
  );

  /* =====================================================
     EYEBROW
  ===================================================== */

  tl.to(
    eyebrow,
    {
      opacity: 1,
      y: 0,

      duration: 0.5,

      ease: "power3.out",
    },
    0.15
  );

  /* =====================================================
     MAIN HEADING
  ===================================================== */

  tl.to(
    heading,
    {
      opacity: 1,
      y: 0,

      duration: 0.8,

      ease: "power4.out",
    },
    0.2
  );

  /* =====================================================
     DESCRIPTION
  ===================================================== */

  tl.to(
    description,
    {
      opacity: 1,
      y: 0,

      duration: 0.6,

      ease: "power3.out",
    },
    0.35
  );

  /* =====================================================
     LEFT CONTACT DETAILS
  ===================================================== */

  tl.to(
    details,
    {
      opacity: 1,
      x: 0,

      duration: 0.7,

      stagger: {
        each: 0.12,
      },

      ease: "power3.out",
    },
    0.45
  );

  /* =====================================================
     SOCIAL LINKS
  ===================================================== */

  tl.to(
    socials,
    {
      opacity: 1,
      x: 0,

      duration: 0.6,

      ease: "power3.out",
    },
    0.8
  );

  /* =====================================================
     FORM PANEL
  ===================================================== */

  tl.to(
    formWrapper,
    {
      opacity: 1,
      y: 0,
      scale: 1,

      duration: 1,

      ease: "power4.out",
    },
    0.35
  );

  /* =====================================================
     FORM TOP
  ===================================================== */

  tl.to(
    formTop,
    {
      opacity: 1,
      y: 0,

      duration: 0.5,

      ease: "power3.out",
    },
    0.65
  );

  /* =====================================================
     FORM FIELDS
  ===================================================== */

  tl.to(
    fields,
    {
      opacity: 1,
      y: 0,

      duration: 0.6,

      stagger: {
        each: 0.12,
      },

      ease: "power3.out",
    },
    0.7
  );

  /* =====================================================
     SUBMIT BUTTON
  ===================================================== */

  tl.to(
    submit,
    {
      opacity: 1,
      y: 0,

      duration: 0.6,

      ease: "power3.out",
    },
    1.05
  );

  /* =====================================================
     BOTTOM STATEMENT
  ===================================================== */

  tl.to(
    bottom,
    {
      opacity: 1,
      y: 0,

      duration: 0.6,

      ease: "power3.out",
    },
    1.15
  );

  /* =====================================================
     BACKGROUND PARALLAX
  ===================================================== */

  gsap.to(bgContact, {
    yPercent: -12,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",
      end: "bottom top",

      scrub: true,
    },
  });

  gsap.to(bgVesper, {
    yPercent: 15,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",
      end: "bottom top",

      scrub: true,
    },
  });

  /* =====================================================
     GLOW PARALLAX
  ===================================================== */

  gsap.to(glowOne, {
    xPercent: 20,
    yPercent: -15,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",
      end: "bottom top",

      scrub: 1,
    },
  });

  gsap.to(glowTwo, {
    xPercent: -20,
    yPercent: 15,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",
      end: "bottom top",

      scrub: 1,
    },
  });
}

initContactScrollAnimation();

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
  burger.addEventListener("click", () => {
    burger.classList.toggle("clicked");
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("is-open");
  });
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
      ease: "power3.out",
    });

    // Create a quick animation setter for Y.
    const moveY = gsap.quickTo(element, "y", {
      duration: 0.45,
      ease: "power3.out",
    });

    // When the cursor enters the element.
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        scale: 1.02,
        duration: 0.35,
        ease: "power3.out",
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
        ease: "elastic.out(1, 0.5)",
      });
    });
  });
}

magneticButtons();
