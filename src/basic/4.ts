function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// console.log("%c--4.ts--", "color: green; font-size: 20px;");
// showMessage('Message');
// console.log(calc(1, 2));
// console.log(customError());


// export { showMessage }
