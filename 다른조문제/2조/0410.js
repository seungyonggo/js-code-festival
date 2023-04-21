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

// 모든 문제들은 스프레드 연산자를 사용하는 것을 권장합니다.

// 1. 2반의 학생들의 정보를 모두 보여주세요
// const classStudent = students.filter((student) => student.class == 2);
// console.log(classStudent);
// 2. grade가 2등급 이상인 학생들을 모두 보여주세요
// const gradeUpTwo = students.filter((student) => student.grade >= 2);
// console.log(gradeUpTwo);

// 3. 이영수의 이름을 국영수로 변경해주고 바뀐 학생의 정보만 보여주세요
// const changeStudents = students.map((student) => {
//   if (student.name === "이영수") {
//     return {
//       ...student,
//       name: "국영수",
//     };
//   }
//   return student;
// });

// const changeStudent = changeStudents.find(
//   (student) => student.name === "국영수"
// );
// console.log(changeStudent);

// 4. 홍길동의 이름을 장보고로 변경해주고 모두 보여주세요
// const changeStudents2 = students.map((student) => {
//   if (student.name === "홍길동") {
//     return { ...student, name: "장보고" };
//   }
//   return student;
// });

// const changeStudent2 = changeStudents2.find(
//   (student) => student.name === "장보고"
// );
// console.log(changeStudent2);
// 5. 영어 점수가 80점 이상인 학생들만 보여주세요
// const scoresEng = students.filter((student) => student.scores.english >= 80);
// console.log(scoresEng);
// 6. 나이가 17살 이하인 학생들만 보여주세요
// const youngAge = students.filter((student) => student.age <= 17);
// console.log(youngAge);
// 심화 문제

// 7. 각 학생의 아이디, 이름, 점수의 합만 보여주세요
/*
ex)
    {
        id: 10,
        name: 홍길동,
        sum_score: 267,
    }
*/
// const studentSumScores = students.map((student) => {
//   const sumScores = Object.values(student.scores).reduce(
//     (acc, score) => acc + score
//   );
//   return {
//     id: student.id,
//     name: student.name,
//     sum_score: sumScores,
//   };
// });

// console.log(studentSumScores);
// // 7. 점수들의 평균값이 가장 높은 학생의 정보만 보여주세요
// // 각 학생의 점수 평균값을 계산하여 배열로 만듭니다.
// const avgScores = students.map((student) => {
//   const sumScores = Object.values(student.scores).reduce(
//     (acc, score) => acc + score
//   );
//   const avgScore = sumScores / Object.values(student.scores).length;
//   return {
//     id: student.id,
//     name: student.name,
//     avgScore: avgScore,
//   };
// });

// // 점수 평균값이 가장 높은 학생의 정보를 찾습니다.
// const highAvg = avgScores.reduce((acc, student) => {
//   if (student.avgScore > acc.avgScore) {
//     return student;
//   } else {
//     return acc;
//   }
// });

// // 결과 출력
// console.log(highAvg);

// // 8. 과학을 제외한 점수의 평균이 가장 낮은 학생의 정보만 보여주세요
// // 과학 과목을 제외한 각 학생의 평균 점수를 계산합니다.
// const avgScoresWithoutScience = students.map((student) => {
//   const { id, name, scores } = student;
//   const sumWithoutScience = Object.keys(scores)
//     .filter((subject) => subject !== "science")
//     .reduce((acc, subject) => acc + scores[subject], 0);
//   const avgWithoutScience = sumWithoutScience / 2; // 나머지 두 과목의 평균을 계산합니다.
//   return { id, name, avgWithoutScience };
// });

// // 평균이 가장 낮은 학생을 찾습니다.
// const lowestAvgStudent = avgScoresWithoutScience.reduce(
//   (minStudent, currentStudent) => {
//     return currentStudent.avgWithoutScience < minStudent.avgWithoutScience
//       ? currentStudent
//       : minStudent;
//   }
// );

// // 평균이 가장 낮은 학생의 정보를 출력합니다.
// console.log(lowestAvgStudent);
