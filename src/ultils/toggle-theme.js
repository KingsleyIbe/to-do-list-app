const toggleTheme = () => {
  const toggleDark = document.querySelector('.fa-moon');
  toggleDark.addEventListener('click', () => {
    toggleDark.innerHTML = `<i class="fas fa-sun">Light mode</i>`
    const element = document.body;
    element.classList.toggle('dark-mode');
  });
}

export default toggleTheme;