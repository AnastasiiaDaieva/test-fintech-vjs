import refs from './refs.js';

const { maskInput } = refs;
maskInput.addEventListener('input', handleMask);

function handleMask(e) {
  const a = e.target.value.replace(/\B(?=(\d{2})+(?!\d))/g, '.');
  const validatedA = a.replace(/[^0-9.]|\.(?=.*\.)/g, '');
  e.target.value = validatedA;
}
