const students = [
  {
    id: 1,
    name: "김철수",
    age: 18,
    gender: "male",
    grade: 3,
    class: 1,
    scores: {
      math: 85,
      english: 92,
      science: 78,
    },
  },
  {
    id: 2,
    name: "이영희",
    age: 17,
    gender: "female",
    grade: 3,
    class: 2,
    scores: {
      math: 78,
      english: 95,
      science: 87,
    },
  },
  {
    id: 3,
    name: "박민수",
    age: 16,
    gender: "male",
    grade: 2,
    class: 1,
    scores: {
      math: 92,
      english: 88,
      science: 90,
    },
  },
  {
    id: 4,
    name: "정미영",
    age: 18,
    gender: "female",
    grade: 3,
    class: 3,
    scores: {
      math: 90,
      english: 82,
      science: 93,
    },
  },
  {
    id: 5,
    name: "이영수",
    age: 17,
    gender: "male",
    grade: 2,
    class: 2,
    scores: {
      math: 80,
      english: 85,
      science: 88,
    },
  },
  {
    id: 6,
    name: "한지민",
    age: 18,
    gender: "female",
    grade: 3,
    class: 1,
    scores: {
      math: 95,
      english: 92,
      science: 96,
    },
  },
  {
    id: 7,
    name: "신동엽",
    age: 16,
    gender: "male",
    grade: 2,
    class: 3,
    scores: {
      math: 87,
      english: 89,
      science: 91,
    },
  },
  {
    id: 8,
    name: "최지우",
    age: 17,
    gender: "female",
    grade: 2,
    class: 2,
    scores: {
      math: 92,
      english: 87,
      science: 85,
    },
  },
  {
    id: 9,
    name: "장우혁",
    age: 16,
    gender: "male",
    grade: 3,
    class: 3,
    scores: {
      math: 88,
      english: 84,
      science: 90,
    },
  },
  {
    id: 10,
    name: "홍길동",
    age: 18,
    gender: "male",
    grade: 3,
    class: 2,
    scores: {
      math: 85,
      english: 90,
      science: 92,
    },
  },
];

// 1. map, filter 사용 추천이유.

// map = 모든 배열내 데이터를 순회를 한다.

// filter = 해당하는 값만 끄집어내서 배열로 만들어서 돌려준다.

// 비교를 하기위해 원래 데이터를 안건들여야된다.

// map, filter => 새로운 배열을 만들어준다.

// CRUD 추가 수정 삭제 조회

// 2. 문제를 보고 어떻게 접근하면 좋을지.

// 모든 문제들은 배열 혹은 변수에 담아서 출력해주세요.
// 배열 없이 console.log()를 사용 할 경우 재사용을 할 수가 없습니다.

// 0. 학생들이 총 몇명이 있는지 출력해주세요.
// console.log(students.length);
// 1. 나이가 17살 미만인 학생만 출력해주세요.
// const countStudent = students.filter((students) => students.age < 17);
// console.log(countStudent);
// 2. 2반인 학생들만 출력해주세요
// const classStudent = students.filter((students) => students.class === 2);
// console.log(classStudent);
// 3. 성별이 "male"인 학생들만 출력해주세요
// const genderStudent = students.filter((students) => students.gender == "male");
// console.log(genderStudent);
// 4. 각 학생들을 "제 이름은 @@@ 이고 나이는 @@ 입니다." 형식에 맞게 출력해주세요
// const Allstudent = students.map((students) => {
//   const message = `제 이름은 ${students.name}이고 나이는 ${students.age}입니다.`;

//   return message;
// });
// console.log(Allstudent);
// 5. 각 학생들의 수학, 영어의 점수를 모두 더해주고 평균을 구해주세요 (수학 + 영어) / 학생 수
const plusStudent = students.map((value) => {
  const sum = value.scores.math + value.scores.english;
  return sum;
});
let temp = 0;
plusStudent.forEach((v) => (temp = temp + v));
const avg = temp / students.length;

console.log(avg);
// 6. 2반 학생들의 수학 점수의 평균을 구해주세요

const selectClass2 = students.filter((value) => value.class === 2);

const class2StudentCount = selectClass2.length;

let temp1 = 0;

selectClass2.forEach((item) => (temp1 += item.scores.math));

const avgMath = temp1 / class2StudentCount;

console.log(avgMath);
