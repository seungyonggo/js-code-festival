const users = [
  {
    id: 1,
    name: "김사과",
    age: 20,
    height: 190,
  },
  {
    id: 2,
    name: "이수박",
    age: 32,
    height: 185,
  },
  {
    id: 3,
    name: "오렌지",
    age: 20,
    height: 180,
  },
  {
    id: 4,
    name: "이멜론",
    age: 28,
    height: 175,
  },
];

const $info = document.querySelector("#info");
let index = 0;

function showUserInfo(index) {
  const user = users[index];
  $info.innerHTML = `
    <div>${user.name}</div>
    <div>${user.age}</div>
    <div>${user.height}</div>
  `;
}

showUserInfo(index);

const $nextBtn = document.querySelector("#next");
$nextBtn.addEventListener("click", () => {
  index++;
  if (index >= users.length) {
    index = 0;
  }
  showUserInfo(index);
});

const $prevBtn = document.querySelector("#prev");
$prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = users.length - 1;
  }
  showUserInfo(index);
});
/* 
유저 목록 순서대로 보여주기
다음 버튼을 누르면 다음 유저가 보여져야합니다. 단, 마지막 유저일 시 다음은 다시 첫번째 유저가 되어야합니다.
이전 버튼을 누르면 이전 유저가 보여져야합니다. 단, 첫번째 유저일 시 이전은 마지막 유저가 되어야합니다.

또한 DOM API와 배열을 다뤄야할 때 인덱스가 필요한 시점이나 상황이 언제일지 고민해보세요 :)
*/

/*
id info에 접근한다.
innerHTML로 새로운 div를 생성해서 user의 index가 보이게만든다.
배열의 index 0번부터 보이게만든다.
next버튼에 이벤트를 추가한다.
next버튼을 누르면 index가 +1하게 만든다
index가 3일때 next버튼을 누르면 0번으로가게 만든다.

prev버튼에 이벤트를 추가한다.
index가 0일때 prev를 누르면 index3으로 가게만든다.
index가 0이 아닐때는 index에 -1을 하게만든다.

*/
