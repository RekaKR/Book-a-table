window.addEventListener('load', () => {
  let nav = document.querySelector('nav');
  let navUl = nav.querySelector('ul');

  nav.addEventListener('click', () => {
    navUl.classList.toggle('opened');
  });
});
