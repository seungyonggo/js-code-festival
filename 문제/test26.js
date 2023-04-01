// # 문제26 : 행성 문제2

// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// **행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램**을 만들어 주세요.

function solar(koName) {
  const name = koName;
  switch (name) {
    case "수성":
      return "Mercury";
    case "금성":
      return "Venus";
    case "지구":
      return "Earth";
    case "화성":
      return "Mars";
    case "목성":
      return "Jupiter";
    case "토성":
      return "Saturn";
    case "천왕성":
      return "Uranus";
    case "해왕성":
      return "Neptune";
    default:
      return "없는 행성 입니다.";
  }
}

console.log(solar("수성"));
console.log(solar("해왕성"));
console.log(solar("은하수"));

// const planets = {
// 	'수성' : 'Mercury',
// 	'금성' : 'Venus',
// 	'지구' : 'Earth',
// 	'화성' : 'Mars',
// 	'목성' : 'Jupiter',
// 	'토성' : 'Saturn',
// 	'천왕성' : 'Uranus',
// 	'해왕성' : 'Neptune',
// };

// const name = prompt("행성의 이름을 입력하세요.");

// console.log(planets[name]);
