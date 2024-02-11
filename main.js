document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector(".video-content");
  const video = document.querySelector(".video-content video");
  const playButton = document.querySelector(".play-video ");
  const playIcon = document.querySelector(".video-play");
  const pauseIcon = document.querySelector(".video-pause");
  const svg = document.querySelector("svg.trail");
  const path = svg.querySelector("path");
  const number = document.querySelector(".number");
  const nextBtn = document.querySelector(".next");
  const videoWrapper = document.querySelector(".video-wrapper");
  const videos = document.querySelectorAll(".video-content video");
  const totalVideos = videos.length;
  let currentVideoIndex = 0;

  function playVideo() {
    video.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    video.muted = false;
  }

  function pauseVideo() {
    video.pause();
    pauseIcon.style.display = "none";
    playIcon.style.display = "block";
    video.muted = true;
  }

  playButton.addEventListener("click", () => {
    video.paused ? playVideo() : pauseVideo();
  });

  videoContainer.addEventListener("mousemove", (event) => {
    const offset = 20;
    const { clientX, clientY } = event;
    const rect = videoContainer.getBoundingClientRect();
    if (
      clientX >= rect.left &&
      clientX <= rect.right &&
      clientY >= rect.top &&
      clientY <= rect.bottom
    ) {
      gsap.to(playButton, {
        left: clientX - offset,
        top: clientY - offset,
        duration: 1.5,
        ease: "slow(0.3, 0.4, false)",
      });
    }
  });

  videoContainer.addEventListener("mouseenter", () => {
    playButton.style.cursor = "none";
    playIcon.style.display = video.paused ? "block" : "none";
    pauseIcon.style.display = video.paused ? "none" : "block";
    gsap.to(playButton, {
      opacity: 1,
      duration: 1.5,
      ease: "slow(0.3, 0.4, false)",
    });
  });

  videoContainer.addEventListener("mouseleave", () => {
    playButton.style.cursor = "auto";
    playIcon.style.display = "none";
    pauseIcon.style.display = "none";
    gsap.to(playButton, {
      opacity: 0,
      duration: 1.5,
      ease: "slow(0.3, 0.4, false)",
    });
  });

  video.addEventListener("click", () => {
    video.paused ? playVideo() : pauseVideo();
  });

  video.addEventListener("play", () => {
    pauseIcon.style.display = "block";
    playIcon.style.display = "none";
  });

  video.addEventListener("pause", () => {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  });

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

  function changeStrokeColor(color) {
    document.documentElement.style.setProperty("--trail-stroke-color", color);
  }

  changeStrokeColor("blue");

  function showNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % totalVideos;
    const targetX = -currentVideoIndex * 100;
    gsap.to(videoWrapper, {
      x: targetX + "%",
      duration: 1,
      ease: "power3.inOut",
    });
    const formattedIndex = ("0" + (currentVideoIndex + 1)).slice(-2);
    number.textContent = formattedIndex;
    animateBorder();
  }

  function animateBorder() {
    const borderWidth = { value: 1 };
    gsap.to(borderWidth, {
      value: 2,
      duration: 1,
      onUpdate: () => {
        number.style.border = `${borderWidth.value}px solid transparent`;
        number.style.borderImage = `linear-gradient(to right,
            #FF0000, #FFA500, #FFFF00, #00FF00, #00FFFF, #0000FF, #800080, #FF00FF, #C0C0C0, #FFFFFF) 1`;
        number.style.borderRadius = `"50%"`;
      },
    });
  }

  function startVideoSlider() {
    setInterval(showNextVideo, 5000);
  }

  startVideoSlider();

  nextBtn.addEventListener("click", showNextVideo);
});
