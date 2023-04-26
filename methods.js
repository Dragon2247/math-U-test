class methods {}
methods.num1 = 0;
methods.num2 = 0;
methods.main = (args) => {
  let sc = new Scanner(System.in);
  System.out.print("select two numbers:\n");
  this.num1 = prompt("");
  this.num2 = prompt("");
  sc.close();
  System.out.print(
    "adding: " +
      this.addition(this.num1, this.num2) +
      "\nsubtraction: " +
      this.subtraction(this.num1, this.num2) +
      "\nmultiplication: " +
      this.multiplication(this.num1, this.num2) +
      "\ndevision: " +
      this.devision(this.num1, this.num2) +
      "\npower: " +
      this.power(this.num1, this.num2)
  );
};
methods.devision = (num1, num2) => {
  return this.num1 / this.num2;
};
methods.multiplication = (num1, num2) => {
  return this.num1 * this.num2;
};
methods.addition = (num1, num2) => {
  return this.num1 + this.num2;
};
methods.subtraction = (num1, num2) => {
  return this.num1 - this.num2;
};
methods.power = (num1, num2) => {
  if (this.num2 === 0) {
    return 1;
  }
  let answer = this.num1;
  for (let x = 0; x < this.num2 - 1; x++) {
    answer *= this.num1;
  }
  return answer;
};
methods.powerOf = (num1, num2) => {
  return this.logB(this.num1, this.num2);
};
methods.logB = (number, custom_base) => {
  let result = Math.log(number) / Math.log(custom_base);
  return result;
};
