class MyStory extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="stories-container">
      <div class="content">
        <div class="previous-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
  
        <div class="stories"></div>
  
        <div class="next-btn active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  
    <div class="stories-full-view">
      <div class="close-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
  
      <div class="content">

        <div class="previous-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
  
        <div class="story">
        <video src=""  autoplay controls></video>
        <div class="author">
        <img src="camera.png" alt="">
        <p class="title-name"></p>
        </div>
        </div>
  
        <div class="next-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        
      </div>
    </div>
   `;
  }
}

customElements.define("my-story", MyStory);

const allStories = [
  {
    id: 0,
    imageUrl:
      "https://i.pinimg.com/564x/fa/8d/43/fa8d430424f33db6cbd51ea6895354fc.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707613207/story/story1.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png ",
    title: "Louis Voitton",
  },
  {
    id: 1,
    imageUrl:
      "https://i.pinimg.com/564x/1f/6d/22/1f6d221ba7013f4cb206514837184a44.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707620445/story/gucci.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png",
    title: "Gucci",
  },
  {
    id: 2,
    imageUrl:
      "https://i.pinimg.com/564x/cc/a0/1d/cca01dacfad241286a96122ce3a5cef0.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707620733/story/fendi.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png",
    title: "Fendi",
  },
  {
    id: 3,
    imageUrl:
      "https://i.pinimg.com/564x/41/30/d4/4130d4b75d90d8ca754391d6eb73dd8c.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707620974/story/balenciaga.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png",
    title: "Balenciaga",
  },
  {
    id: 4,
    imageUrl:
      "https://i.pinimg.com/564x/a0/7d/de/a07dde3c21396108f1b2018f11f88f26.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707621497/story/zara.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png",
    title: "Zara",
  },
  {
    id: 5,
    imageUrl:
      "https://i.pinimg.com/736x/4e/bd/3f/4ebd3f0c61ec02a03ba23d7ee550abcc.jpg ",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707621451/story/new-balance.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png",
    title: "New Balance",
  },
  {
    id: 6,
    imageUrl:
      "https://i.pinimg.com/564x/7e/63/37/7e6337a5c4222775a561e0d448c96904.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707622208/story/dior.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png",
    title: "Dior",
  },
  {
    id: 7,
    imageUrl:
      "https://i.pinimg.com/736x/55/80/97/558097bf430af078a10fde2b3caf0806.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707622379/story/prada.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png",
    title: "Prada",
  },
  {
    id: 8,
    imageUrl:
      "https://i.pinimg.com/564x/13/23/a4/1323a44e223dec39af4a0726de0de54b.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707622516/story/vans.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png ",
    title: "Vans",
  },
  {
    id: 9,
    imageUrl:
      "https://i.pinimg.com/564x/2b/5b/cc/2b5bcc79f5d9984ae7adeaf09a2c193f.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707622880/story/nike.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png ",
    title: "Nike",
  },
  {
    id: 10,
    imageUrl:
      "https://i.pinimg.com/564x/a1/91/09/a19109deecf2b7406057fbac531eeb55.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707625541/story/uspa.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png ",
    title: "Us polo",
  },
  {
    id: 11,
    imageUrl:
      "https://i.pinimg.com/564x/90/92/28/90922839071c2938bae78173ac93e422.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707624354/story/mango.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png ",
    title: "Varsace",
  },
  {
    id: 12,
    imageUrl:
      "https://i.pinimg.com/564x/b5/d3/da/b5d3da96add75eee249b99b468867018.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707623689/story/converse.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png ",
    title: "Converse",
  },
  {
    id: 13,
    imageUrl:
      "https://i.pinimg.com/564x/6e/e0/9d/6ee09d238e76bcf205a728ced012ed2b.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707624808/story/puma.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png ",
    title: "Puma",
  },
  {
    id: 14,
    imageUrl:
      "https://i.pinimg.com/564x/98/3d/f3/983df379f49bcbb9d87688d018024e29.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707623044/story/armani.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png ",
    title: "Armani Ex",
  },
  {
    id: 15,
    imageUrl:
      "https://i.pinimg.com/564x/91/41/ae/9141ae5ccfa0ea4ff7b9e9f6afd4305e.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707622733/story/adidas.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png ",
    title: "Adidas",
  },
  {
    id: 16,
    imageUrl:
      "https://i.pinimg.com/564x/b0/f2/38/b0f2389d603d73bd98aa7fd4ae6eb927.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707624089/story/Snapinsta.app_video_10000000_7218831634826941_7981166953614883310_n_dda4xe.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png ",
    title: "Balmain",
  },
  {
    id: 17,
    imageUrl:
      "https://i.pinimg.com/564x/0d/f2/5b/0df25b3e21325b06bb5e1962272176b9.jpg",
    videoUrl:
      "https://res.cloudinary.com/durcylpvn/video/upload/v1707622938/story/off-white.mp4",
    author:
      "https://res.cloudinary.com/durcylpvn/image/upload/v1707618784/story/camera_xqmikk.png ",
    title: "Off white",
  },
];

const stories = document.querySelector(".stories");
const storiesFullView = document.querySelector(".stories-full-view");
const closeBtn = document.querySelector(".close-btn");
const storyvideoFull = document.querySelector(
  ".stories-full-view .story video"
);
const storyAuthorFull = document.querySelector(
  ".stories-full-view .story .author"
);
const nextBtn = document.querySelector(".stories-container .next-btn");
const previousBtn = document.querySelector(".stories-container .previous-btn");
const storiesContent = document.querySelector(".stories-container .content");
const nextBtnFull = document.querySelector(".stories-full-view .next-btn");
const previousBtnFull = document.querySelector(
  ".stories-full-view .previous-btn"
);

let currentActive = 0;

const createStories = () => {
  allStories.forEach((s, i) => {
    const story = document.createElement("div");
    story.classList.add("story");
    const img = document.createElement("img");
    img.src = s.imageUrl;
    const author = document.createElement("div");
    author.classList.add("author");
    const authorImg = document.createElement("img");
    authorImg.src = s.author;
    author.appendChild(authorImg);

    story.appendChild(img);
    story.appendChild(author);

    stories.appendChild(story);

    story.addEventListener("click", () => {
      showFullView(i);
    });
  });
};

createStories();

const showFullView = (index) => {
  currentActive = index;
  updateFullView();
  storiesFullView.classList.add("active");
};

closeBtn.addEventListener("click", () => {
  storiesFullView.classList.remove("active");
  storyvideoFull.pause();
});

const updateFullView = () => {
  storyvideoFull.src = allStories[currentActive].videoUrl;
  const authorImg = document.createElement("img");
  authorImg.src = allStories[currentActive].author;
  storyAuthorFull.innerHTML = ""; // Clear any existing content
  storyAuthorFull.appendChild(authorImg);
};

nextBtn.addEventListener("click", () => {
  storiesContent.scrollLeft += 300;
});

previousBtn.addEventListener("click", () => {
  storiesContent.scrollLeft -= 300;
});

storiesContent.addEventListener("scroll", () => {
  if (storiesContent.scrollLeft <= 24) {
    previousBtn.classList.remove("active");
  } else {
    previousBtn.classList.add("active");
  }

  let maxScrollValue =
    storiesContent.scrollWidth - storiesContent.clientWidth - 24;

  if (storiesContent.scrollLeft >= maxScrollValue) {
    nextBtn.classList.remove("active");
  } else {
    nextBtn.classList.add("active");
  }
});

nextBtnFull.addEventListener("click", () => {
  if (currentActive >= allStories.length - 1) {
    return;
  }
  currentActive++;
  updateFullView();
});

previousBtnFull.addEventListener("click", () => {
  if (currentActive <= 0) {
    return;
  }
  currentActive--;
  updateFullView();
});
storyvideoFull.addEventListener("ended", () => {
  if (currentActive >= allStories.length - 1) {
    storiesFullView.classList.remove("active");
    storyvideoFull.pause();
    return;
  }
  currentActive++;
  updateFullView();
});
