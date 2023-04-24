/*
정답 O

전역변수는 지역변수를 포함하는 범위이다 때문에
지역변수에서는 전역변수를 사용할 수 있다.
*/
// 전역변수
let x = 1;
let y = 2;

function outer() {
  // 지역변수
  let z = 3;

  console.log(x);
  console.log(y);
  console.log(z);

  // 지역변수안의 지역변수
  function inner() {
    let x = 3;

    console.log(x);
    console.log(y);
    console.log(z);

    // 지역변수안의 지역변수
  }
  inner();
  // 지역변수
}
// 전역변수
outer();

console.log(x);
console.log(y);
