// Mobile Menu Toggle
// const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
// const nav = document.querySelector(".nav")

// if (mobileMenuToggle) {
//   mobileMenuToggle.addEventListener("click", () => {
//     nav.classList.toggle("active")
//     mobileMenuToggle.classList.toggle("active")
//   })
// }

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Header Scroll Effect
const header = document.querySelector(".header")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)"
  }

  lastScroll = currentScroll
})

// Intersection Observer for Fade-in Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -80px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Animate sections on scroll
const animateElements = document.querySelectorAll(
  ".reason-item, .recruit-card, .timeline-item, .press-item, .company-card",
)

animateElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(40px)"
  el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
  observer.observe(el)
})

// Gallery Item Click
const galleryItems = document.querySelectorAll(".gallery-item")
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("[v0] Gallery item clicked")
  })
})

// Lazy Loading Images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        if (img.dataset.src) {
          img.src = img.dataset.src
          img.removeAttribute("data-src")
        }
        imageObserver.unobserve(img)
      }
    })
  })

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    imageObserver.observe(img)
  })
}
// carousel functionality can be added here in the future
const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", () => {
  slider.style.animationPlayState = "paused";
});

slider.addEventListener("mouseleave", () => {
  slider.style.animationPlayState = "running";
});

//  GROWTH SECTION


  const sliderContainer = document.getElementById("slider");
  const originalCardsList = document.querySelectorAll(".growth-card");

  const visibleCardCount = 3;
  const cardGap = 24;
  const singleCardWidth = 400 + cardGap;

  let currentIndex = visibleCardCount;

  /* ===== CLONE LOGIC ===== */

  // Clone last 3 cards to the start
  for (let i = originalCardsList.length - visibleCardCount; i < originalCardsList.length; i++) {
    sliderContainer.prepend(originalCardsList[i].cloneNode(true));
  }

  // Clone first 3 cards to the end
  for (let i = 0; i < visibleCardCount; i++) {
    sliderContainer.append(originalCardsList[i].cloneNode(true));
  }

  const allSliderCards = document.querySelectorAll(".growth-card");

  // Initial position
  sliderContainer.style.transform = `translateX(-${currentIndex * singleCardWidth}px)`;

  function updateSliderPosition() {
    sliderContainer.style.transition = "transform 0.4s ease";
    sliderContainer.style.transform = `translateX(-${currentIndex * singleCardWidth}px)`;
  }

  document.getElementById("next").addEventListener("click", () => {
    currentIndex++;
    updateSliderPosition();

    if (currentIndex === allSliderCards.length - visibleCardCount) {
      setTimeout(() => {
        sliderContainer.style.transition = "none";
        currentIndex = visibleCardCount;
        sliderContainer.style.transform = `translateX(-${currentIndex * singleCardWidth}px)`;
      }, 400);
    }
  });

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex--;
    updateSliderPosition();

    if (currentIndex === 0) {
      setTimeout(() => {
        sliderContainer.style.transition = "none";
        currentIndex = allSliderCards.length - visibleCardCount * 2;
        sliderContainer.style.transform = `translateX(-${currentIndex * singleCardWidth}px)`;
      }, 400);
    }
  });

  // const heroNav = document.querySelector('.hero-nav');

  // heroNav.addEventListener('click', () => {
  //   heroNav.classList.toggle('active');
  // });

  document.querySelectorAll('.scroll-controls').forEach(controls => {
    const cards = controls.previousElementSibling;

    if (!cards || !cards.classList.contains('bottom-cards') &&
        !cards.classList.contains('bottom-cards-left')) return;

    const leftBtn = controls.querySelector('.left');
    const rightBtn = controls.querySelector('.right');

    const scrollAmount = cards.offsetWidth * 0.7;

    leftBtn.addEventListener('click', () => {
      cards.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      cards.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
//   
// Mobile Hamburger Toggle
(function() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!hamburger || !mobileMenu) return;

  // Toggle menu on click
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#hamburger") && !e.target.closest("#mobileMenu")) {
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  // Close menu when clicking any link
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
})();

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // smooth scroll
  });
}

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
