function Accumulator(startingValue) {
  this.read = function () {
    this.value = startingValue + prompt('Enter a value.', 6);
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
