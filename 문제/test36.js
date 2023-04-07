const num = prompt("2~9 사이의 숫자를 입력하세요.");
let result = "";

for (let i = 1; i <= 9; i++) {
  result += i * num + " ";
}

console.log(result);
