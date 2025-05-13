import { LogMethod } from './logMethod';

class Calculator {
  @LogMethod()
  add(a: number, b: number) {
    return a + b;
  }

  @LogMethod()
  multiply(a: number, b: number) {
    return a * b;
  }
}

const calc = new Calculator();
calc.add(3, 5);
calc.multiply(4, 6);
