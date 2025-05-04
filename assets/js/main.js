// Chain-Fox Whitepaper Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links (excluding navigation buttons)
  document.querySelectorAll('a[href^="#"]:not(.nav-prev):not(.nav-next)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Add scroll animation effect
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.card, .whitepaper-sidebar, .chapter-toc');

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  };

  // Add visibility classes
  const cards = document.querySelectorAll('.card, .whitepaper-sidebar, .chapter-toc');
  cards.forEach(card => {
    card.classList.add('animate-on-scroll');
  });

  // Initial check and scroll listener
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);

  // Ensure navigation buttons work correctly
  document.querySelectorAll('.nav-prev, .nav-next').forEach(navButton => {
    navButton.addEventListener('click', function() {
      // Allow default behavior for navigation buttons
      // This ensures they navigate to the linked page
      const href = this.getAttribute('href');
      if (href && !href.startsWith('#')) {
        // It's a page navigation link, not an anchor link
        // Let the default behavior handle it
        return true;
      }
    });
  });
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
