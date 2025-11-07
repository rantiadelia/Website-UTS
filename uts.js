/*navbar*/
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navtop");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const navLinks = document.querySelectorAll(".navlink");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

/* scroll jadi smooth*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

/*music play*/
document.addEventListener("DOMContentLoaded", () => {
  const musicToggle = document.getElementById("musicToggle");
  const bgMusic = document.getElementById("bgMusic");
  const icon = musicToggle.querySelector("i");

  let isPlaying = false;

  bgMusic.volume = 0.3;

  musicToggle.addEventListener("click", async () => {
    try {
      if (!isPlaying) {
        await bgMusic.play();
        isPlaying = true;
        icon.classList.replace("fa-music", "fa-pause");
        musicToggle.classList.add("playing");
      } else {
        bgMusic.pause();
        isPlaying = false;
        icon.classList.replace("fa-pause", "fa-music");
        musicToggle.classList.remove("playing");
      }
    } catch (err) {
      console.error("⚠️ Tidak bisa memutar audio:", err);
      alert("⚠️ Browser kamu mungkin memblokir autoplay. Klik tombol lagi setelah interaksi pertama.");
    }
  });
});
/* gambar berganti about*/
const aboutImage = document.querySelector(".about-image");
if (aboutImage) {
  const images = [
    "https://i.postimg.cc/nLqZVxnF/about1.jpg",
    "https://i.postimg.cc/9XL2QJHf/about2.jpg",
    "https://i.postimg.cc/J4gWb0hd/about4.jpg"
  ];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % images.length;
    aboutImage.style.backgroundImage = 'url(${images[i]})';
  }, 8000);
}

/* char swiper*/
const charSwiper = new Swiper(".character-swiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  navigation: {
    nextEl: ".character-wrapper .swiper-button-next",
    prevEl: ".character-wrapper .swiper-button-prev",
  },
  pagination: {
    el: ".character-wrapper .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  }
});

/* char klik effect*/
document.querySelectorAll(".char-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("active");
    card.style.boxShadow = "0 0 15px var(--accent)";
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("active");
    card.style.boxShadow = "none";
    card.style.transform = "scale(1)";
  });
});
/*tombol naik keatas lagi*/
const backToTop = document.createElement("button");
backToTop.id = "backToTop";
backToTop.innerHTML = "⬆";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/*series swiper*/
const seriesSwiper = new Swiper(".series-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".series-next", 
    prevEl: ".series-prev",
  },
  pagination: {
    el: ".series-controls .swiper-pagination", 
    clickable: true,
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
});

/*tombol see detail & hide info*/
document.querySelectorAll(".see-detail").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".movie-card");
    card.classList.toggle("show-info");
    button.textContent = card.classList.contains("show-info")
      ? "Hide Info"
      : "See Detail";
  });
});

/*dropdown*/
const dropdown = document.querySelector(".dropdown");
const dropbtn = document.querySelector(".dropbtn");

dropbtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("open");
});

document.addEventListener("click", () => {
  dropdown.classList.remove("open");
});