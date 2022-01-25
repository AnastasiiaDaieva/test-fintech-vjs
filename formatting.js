import refs from './refs.js';

const { numberInput, numberOutput } = refs;

numberInput.addEventListener('input', handleFormatting);

function handleFormatting(e) {
  format(e.target.value);
}

function format(value) {
  numberOutput.textContent = value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
