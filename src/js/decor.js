function decor(colorSwitcher) {
  colorSwitcher.firstElementChild.checked =
    JSON.parse(localStorage.getItem('black')) ?? false;

  if (colorSwitcher.firstElementChild.checked) {
    switchColors();
  }

  colorSwitcher.addEventListener('click', e => {
    colorSwitcher.firstElementChild.checked =
      !colorSwitcher.firstElementChild.checked;
    localStorage.setItem(
      'black',
      JSON.stringify(colorSwitcher.firstElementChild.checked)
    );

    switchColors();
  });

  function switchColors() {
    document.body.classList.toggle('black');
    document.body.firstElementChild.classList.toggle('black');
    document.getElementById('searchrequest').classList.toggle('black');
  }

  setTimeout(() => {
    colorSwitcher.style.opacity = '0.1';
  }, 5000);
}
export default decor;
