import refs from './refs.js';

const { maskInput } = refs;
console.log(maskInput);

maskInput.addEventListener('input', handleMask);

function handleMask(e) {
  console.log(e.target.value);
  // const replace = e.target.value.replace(/\D/g, '').match(/(\d*, \d{2} )/);
  // e.target.value = !replace[2]
  //   ? replace[1]
  //   : '(' +
  //     replace[1] +
  //     ') ' +
  //     replace[2] +
  //     (replace[3] ? '.' + replace[3] : '.');

  const withoutDecimals = e.target.value.slice(0, -2);
  const lastDigits = e.target.value.slice(-2);
  const newValue = withoutDecimals.concat('.', lastDigits);
  console.log('whole:', withoutDecimals);
  console.log('last:', lastDigits);
  e.target.value = newValue;
}
