/*
과제
로또 번호 뽑기

1~45까지 랜덤한 숫자 7자리의 배열

*/

let lottoNumbers = [];

while (lottoNumbers.length < 7) {
  let randomNumber = Math.floor(Math.random() * 45) + 1;
  if (lottoNumbers.indexOf(randomNumber) === -1) {
    lottoNumbers.push(randomNumber);
  }
}

console.log(lottoNumbers);
