import refs from './refs.js';

const { numberInput, numberOutput } = refs;

numberInput.addEventListener('input', handleFormatting);

function handleFormatting(e) {
  e.target.value = e.target.value
    .replace(/\B(?=(\d{2})+(?!\d))/g, '.')
    .replace(/[^0-9.]|\.(?=.*\.)/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
