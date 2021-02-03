let calculator = {
  read() {
    this.firstValue = Number(prompt('Enter the firstvalue', 6));
    this.secondValue = Number(prompt('Enter the secondvalue', 8));
    return this.firstValue,this.secondValue;
  },

  sum() {
    return this.firstValue + this.secondValue;
  },

  mul() {
    return this.firstValue * this.secondValue;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
