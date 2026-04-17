document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = body.classList.toggle("mobile-open");
      navLinks.style.display = isOpen ? "grid" : "";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        body.classList.remove("mobile-open");
        navLinks.style.display = "";
      });
    });
  }

  // Scroll indicator for feature cards
  const cards = document.querySelector(".feature-cards");
  const thumb = document.querySelector(".scroll-thumb");
  if (cards && thumb) {
    cards.addEventListener("scroll", () => {
      const maxScroll = cards.scrollWidth - cards.clientWidth;
      if (maxScroll > 0) {
        const pct = cards.scrollLeft / maxScroll;
        const track = thumb.parentElement.clientWidth - thumb.clientWidth;
        thumb.style.transform = `translateX(${pct * track}px)`;
      }
    });
  }

  // Road progress — circles/lines trail behind swipe + scroll indicator
  const roadCardsEl = document.querySelector(".road-cards");
  if (roadCardsEl) {
    const roadNums = roadCardsEl.querySelectorAll(".road-number");
    const roadFills = roadCardsEl.querySelectorAll(".road-line-fill");
    const roadThumb = document.querySelector(".road-scroll-thumb");

    if (roadNums.length) roadNums[0].classList.add("reached");

    roadCardsEl.addEventListener("scroll", () => {
      const cardEls = roadCardsEl.querySelectorAll(".road-card");
      if (!cardEls.length) return;

      const maxScroll = roadCardsEl.scrollWidth - roadCardsEl.clientWidth;
      const scrollPos = roadCardsEl.scrollLeft;
      const cardWidth = cardEls[0].offsetWidth + 12;
      const snappedIndex = Math.round(scrollPos / cardWidth);

      // Circles — light up ones you've passed (trail behind)
      roadNums.forEach((num, i) => {
        num.classList.toggle("reached", i <= snappedIndex);
      });

      // Lines — fill ones behind current position
      roadFills.forEach((fill, i) => {
        if (i < snappedIndex) {
          fill.style.width = "100%";
        } else {
          fill.style.width = "0%";
        }
      });

      // Scroll indicator thumb
      if (roadThumb && maxScroll > 0) {
        const pct = scrollPos / maxScroll;
        const track = roadThumb.parentElement.clientWidth - roadThumb.clientWidth;
        roadThumb.style.transform = "translateX(" + (pct * track) + "px)";
      }
    });
  }

  // PW Way scroll indicator
  const pwWayGrid = document.querySelector(".pw-way-grid");
  const pwWayThumb = document.querySelector(".pw-way-scroll-thumb");
  if (pwWayGrid && pwWayThumb) {
    pwWayGrid.addEventListener("scroll", () => {
      const maxScroll = pwWayGrid.scrollWidth - pwWayGrid.clientWidth;
      if (maxScroll > 0) {
        const pct = pwWayGrid.scrollLeft / maxScroll;
        const track = pwWayThumb.parentElement.clientWidth - pwWayThumb.clientWidth;
        pwWayThumb.style.transform = "translateX(" + (pct * track) + "px)";
      }
    });
  }

  // Review scroll indicators
  document.querySelectorAll(".review-cards").forEach((reviewEl) => {
    const thumb = reviewEl.parentElement.querySelector(".review-scroll-thumb");
    if (!thumb) return;
    reviewEl.addEventListener("scroll", () => {
      const maxScroll = reviewEl.scrollWidth - reviewEl.clientWidth;
      if (maxScroll > 0) {
        const pct = reviewEl.scrollLeft / maxScroll;
        const track = thumb.parentElement.clientWidth - thumb.clientWidth;
        thumb.style.transform = "translateX(" + (pct * track) + "px)";
      }
    });
  });

  // Contact form — let FormSubmit handle the actual submission
});

