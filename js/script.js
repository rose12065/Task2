// harmburger display

const hamburgerIcon = document.getElementById('hamburger-icon');
const navContents = document.querySelector('.nav-contents');

hamburgerIcon.addEventListener('click', () => {
  if (navContents.style.display === 'none' || navContents.style.display === '') {
    navContents.style.display = 'block';
  } else {
    navContents.style.display = 'none';
  }
});
