// # 문제35 : Factory 함수 사용하기

// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.

// <pass>에 코드를 작성하여 two함수를 완성하세요.

function powerFactory(n) {
  return function (x) {
    return Math.pow(x, n);
  };
}

const powerOfTwo = powerFactory(2);
const powerOfThree = powerFactory(3);
const powerOfFour = powerFactory(4);

console.log(powerOfTwo(2));
console.log(powerOfThree(2));
console.log(powerOfFour(2));
