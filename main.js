document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector("svg.trail");
  const path = svg.querySelector("path");
  const videos = document.querySelectorAll(".video-wrapper video");
  const customCursor = document.getElementById("custom");

  // Custom Cursor Animation
  gsap.set(customCursor, { opacity: 0 });

  document
    .querySelector(".video-content")
    .addEventListener("mouseenter", () => {
      gsap.to(customCursor, { opacity: 1, duration: 0.5 });
    });

  document
    .querySelector(".video-content")
    .addEventListener("mouseleave", () => {
      gsap.to(customCursor, { opacity: 0, duration: 0.5 });
    });

  document
    .querySelector(".video-content")
    .addEventListener("mousemove", (e) => {
      gsap.to(customCursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.inOut",
      });
    });

  // Video Play/Pause on Click
  videos.forEach((video) => {
    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        customCursor.textContent = "Pause";
      } else {
        video.pause();
        customCursor.textContent = "Play";
      }
    });
  });

  // Smooth Video Slider
  let currentVideoIndex = 0;
  const totalVideos = videos.length;

  function showNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % totalVideos;
    const targetX = -currentVideoIndex * 100;
    gsap.to(".video-wrapper", {
      x: targetX + "%",
      duration: 1,
      ease: "power2.inOut",
    });
  }

  setInterval(showNextVideo, 5000);
  let points = [];
  const segments = 100;
  let mouse = { x: 0, y: 0 };

  const move = (event) => {
    const { clientX, clientY } = event;
    mouse = { x: clientX, y: clientY };
    if (points.length === 0) {
      for (let i = 0; i < segments; i++) {
        points.push({ x: clientX, y: clientY });
      }
    }
  };

  const anim = () => {
    let [px, py] = [mouse.x, mouse.y];
    points.forEach((p, index) => {
      p.x = px;
      p.y = py;
      const n = points[index + 1];
      if (n) {
        [px, py] = [px - (p.x - n.x) * 0.1, py - (p.y - n.y) * 0.1];
      }
    });
    path.setAttribute(
      "d",
      `M ${points.map((p) => `${p.x} ${p.y}`).join(` L `)}`
    );
    requestAnimationFrame(anim);
  };

  const resize = () => {
    const { innerWidth: ww, innerHeight: wh } = window;
    svg.style.width = ww + "px";
    svg.style.height = wh + "px";
    svg.setAttribute("viewBox", `0 0 ${ww} ${wh}`);
  };

  document.addEventListener("mousemove", move);
  window.addEventListener("resize", resize);
  anim();
  resize();
});
