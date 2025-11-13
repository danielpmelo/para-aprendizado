// Mensagem de boas-vindas no console
console.log('🚀 Projeto Web Básico carregado com sucesso!');

// Sistema de Tema Escuro
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const html = document.documentElement;

function setTheme(theme) {
  if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

// Botão principal
const mainButton = document.getElementById('mainButton');
if (mainButton) {
  mainButton.addEventListener('click', () => {
    alert('Bem-vindo! Este é um projeto web estruturado profissionalmente.');
  });
}

// Formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    console.log('Formulário enviado:', data);
    alert('Mensagem enviada com sucesso! (Simulação)');
    contactForm.reset();
  });
}

// Smooth scroll para links da navegação
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animação ao scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Adiciona animação aos cards
document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s, transform 0.5s';
  observer.observe(card);
});

// Adiciona timestamp ao footer
const footer = document.querySelector('footer p');
if (footer) {
  const currentYear = new Date().getFullYear();
  footer.textContent = footer.textContent.replace('2025', currentYear);
}
