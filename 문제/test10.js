// let n = 5;
// let tree = "";

// for (i = 1; i < 2 * n - 1; i++) {
//   star += "*";
// }

// let base = 5;
// let pyramid = "";

// for (let i = 1; i <= base; i++) {
//   let spaces = " ".repeat(base - i);
//   let stars = "*".repeat(2 * i - 1);
//   pyramid += spaces + stars + "\n";
// }

// console.log(pyramid);

const n = prompt("숫자를 입력하세요.");
let tree = "";

for (let i = 1; i <= n; i++) {
  let star = "";
  for (let j = 1; j <= n - i; j++) {
    star += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    star += "*";
  }
  tree += star + "\n";
}

console.log(tree);
