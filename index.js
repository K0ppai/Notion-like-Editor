const outputContainer = document.getElementById('outputContainer');
const options = document.getElementById('options');
const textInput = document.getElementById('textInput');
const popUp = document.getElementById('popUp');
const keyword = document.getElementById('keyword');
const createHeaderBtn = document.getElementById('createHeaderBtn');
const createExpandableBtn = document.getElementById('createExpandableBtn');

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

const handleEscape = (e) => {
  if (e.key === 'Escape') {
    hide(popUp);
  }
};

const deleteElement = (e) => {
  const parent = e.target.closest('.elementContainer');
  parent.remove();
};

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    textInput.focus();
  }
};

const createNewElement = (e) => {
  const type = e.dataset.heading;
  const element = document.createElement(type);

  element.contentEditable = true;
  element.dataset.placeholder = type === 'h1' ? 'Heading 1' : '';
  element.classList = `${
    type === 'h1'
      ? 'text-lg font-bold ml-2 outline-none cursor-pointer'
      : 'ml-2 outline-none cursor-pointer'
  }`;

  if (type === 'details') {
    const summary = document.createElement('summary');
    const p = document.createElement('p');
    summary.contentEditable = true;
    summary.dataset.placeholder = 'Expandable Header 1';
    p.contentEditable = true;
    p.dataset.placeholder = 'Paragraph';
    summary.classList = 'font-bold';
    element.append(summary, p);
  }

  return element;
};

const createNewDivElement = (e) => {
  const button = e.currentTarget;

  const div = document.createElement('div');
  div.className = 'flex elementContainer my-3';

  const template = document.getElementById('template');
  const container = template.content.cloneNode(true);
  const deleteBtn = container.querySelector('.deleteBtn');
  const element = createNewElement(button);

  element.addEventListener('keydown', handleKeyDown);
  deleteBtn.addEventListener('click', deleteElement);

  div.append(container, element);
  outputContainer.appendChild(div);
  hide(popUp);
  textInput.value = '';
  element.focus();
};

textInput.addEventListener('input', handleInput);
document.addEventListener('keydown', handleEscape);
createHeaderBtn.addEventListener('click', createNewDivElement);
createExpandableBtn.addEventListener('click', createNewDivElement);
