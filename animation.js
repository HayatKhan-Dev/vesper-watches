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
}
