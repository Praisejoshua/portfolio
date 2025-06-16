window.addEventListener('load', () => {
  document.getElementById('loader').style.opacity = 0;
  setTimeout(() => loader.remove(), 500);
});

const skillBars = document.querySelectorAll('.skill-bar-inner');
const revealSkills = () => {
  skillBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.8) {
      bar.style.width = bar.dataset.width;
    }
  });
};
window.addEventListener('scroll', revealSkills);
revealSkills();

const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
});
if (localStorage.theme === 'dark') document.body.classList.add('dark-mode');
