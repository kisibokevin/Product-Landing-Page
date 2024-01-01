const hamburger = document.querySelector('.toggle-btn');
const menu = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})

document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});