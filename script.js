(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  const savedTheme = localStorage.getItem('ai-site-theme');
  if (savedTheme === 'light') root.classList.add('light');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      root.classList.toggle('light');
      const isLight = root.classList.contains('light');
      localStorage.setItem('ai-site-theme', isLight ? 'light' : 'dark');
      themeToggle.textContent = isLight ? '🌙 Темна тема' : '☀️ Світла тема';
    });
    if (root.classList.contains('light')) themeToggle.textContent = '🌙 Темна тема';
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();
