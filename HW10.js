function readNumber() {
  let num;
  do {
    num = +prompt('Please enter a number!', '');
  } while (isFinite(num) === false || num === null || num === '');
  return num;
}

function randomInterger(min, max) {
  return Math.trunc(min + Math.random() * (max + 1 - min));
}
