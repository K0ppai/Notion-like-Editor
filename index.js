const outputContainer = document.getElementById('outputContainer');
const options = document.getElementById('options');
const textInput = document.getElementById('textInput');
const popUp = document.getElementById('popUp');
const keyword = document.getElementById('keyword');
const createHeaderBtn = document.getElementById('createHeaderBtn');

const show = (element) => {
  element.classList.replace('hidden', 'block');
};

const hide = (element) => {
  element.classList.replace('block', 'hidden');
};

const handleInput = () => {
  const inputValue = textInput.value;

  switch (inputValue) {
    case '/':
      hide(options);
      show(popUp);
      break;
    case '/1':
      show(options);
      break;
    default:
      hide(popUp);
      hide(options);
      break;
  }
};

textInput.addEventListener('input', handleInput);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hidePopup();
  }
});


