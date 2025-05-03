// Chain-Fox 白皮书网站 JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

  // 语言切换功能
  const languageBtns = document.querySelectorAll('.language-btn');
  languageBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      languageBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      // 这里可以添加实际的语言切换逻辑
    });
  });

  // 添加简单的滚动动画效果
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

  // 添加可见性类
  const cards = document.querySelectorAll('.card, .whitepaper-sidebar, .chapter-toc');
  cards.forEach(card => {
    card.classList.add('animate-on-scroll');
  });

  // 初始检查和滚动监听
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});

// 添加简单的动画样式
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
