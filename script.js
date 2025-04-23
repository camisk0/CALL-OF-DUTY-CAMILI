// Função para aumentar o tamanho da fonte
const increaseFontButton = document.getElementById('increase-font');
const decreaseFontButton = document.getElementById('decrease-font');
let fontSize = 16;

// Aumenta o tamanho da fonte
increaseFontButton.addEventListener('click', () => {
  fontSize += 2;
  document.documentElement.style.fontSize = `${fontSize}px`;
});

// Diminui o tamanho da fonte
decreaseFontButton.addEventListener('click', () => {
  if (fontSize > 10) {
    fontSize -= 2;
    document.documentElement.style.fontSize = `${fontSize}px`;
  }
});

// Função para alternar o modo escuro
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Alterna o modo escuro
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
