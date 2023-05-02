import mockPost from "./mock.json" assert { type: "json" };
console.log(mockPost);

// id가져오기
const postDetailEl = document.getElementById("post-detail");
const repliesListEl = document.getElementById("replies-list");
// 게시물에 mockpost의 post부분 가져오기
const postHtml = `
<h2>${mockPost.post.title}</h2>
<p>${mockPost.post.content}</p>
<p>작성자: ${mockPost.post.User.nickName}</p>
`;

// 댓글에 Replies을 가져오기
const repliesHtml = mockPost.post.Replies.map(
  (reply) => `
  <li>
  <p>${reply.content}</p>
  <p>작성자: ${reply.User.nickName}</p>
  </li>
  `
).join("");

// innerHTML로 콘텐츠 넣기
postDetailEl.innerHTML = postHtml;
repliesListEl.innerHTML = repliesHtml;

const $repliesList = document.querySelector("#replies-list");
const $input = document.querySelector("input");
const $plusBtn = document.querySelector("#plusBtn");

$plusBtn.addEventListener("click", () => {
  const comment = $input.value;
  const $li = document.createElement("li");
  $li.textContent = comment;
  const $deleteBtn = document.createElement("button");
  $deleteBtn.textContent = "삭제";
  $deleteBtn.addEventListener("click", () => {
    $li.remove();
  });
  const $editBtn = document.createElement("button");
  $editBtn.textContent = "수정";
  $editBtn.addEventListener("click", (e) => {
    //수정
    //li의 html을 전부다 지워줌 수정 삭제 안남게
    e.target.parentNode.innerHTML = "";
    const $input = document.createElement("input");
    //기존 input내용 comment를 불러오기
    $input.value = comment;
    const $saveBtn = document.createElement("button");
    $saveBtn.textContent = "저장";
    $saveBtn.addEventListener("click", () => {
      $li.textContent = $input.value;
      $li.appendChild($editBtn);
      $li.appendChild($deleteBtn);
    });
    $li.innerHTML = "";
    $li.appendChild($input);
    $li.appendChild($saveBtn);
  });
  $li.appendChild($editBtn);
  $li.appendChild($deleteBtn);
  $repliesList.appendChild($li);
  $input.value = "";
});

/* 
    import(참조)한 json data를
    게시글 상세와 댓글창에 나타내고 게시글 객체의 상세 내용은 console.log로 출력해두었습니다

    댓글 추가 버튼을 누르면 댓글이 추가되도록 해보세요 :)

    삭제 및 수정기능은 본인의 자유로 구현하시면 됩니다 :)
*/

/*
import한 mock데이터에
post부분을 post-detail 밑에 innerHTML로
title은 h2로
content와 User의nickName은 p태그로
나오게하기
mock데이터의 Replies는
ul태그 id replies-list안에
li컨텐츠로 나오게 만들기
innerHTML로 만든다.

input태그에서 추가버튼을 누르면 li를 추가하는 이벤트를 생성한다.
또 새로 작성된 li에 수정,삭제 버튼을 만든다.
수정버튼을 누르면 li안에 text내용을 수정할수있게 만든다.
삭제버튼을 누르면 li를 삭제하게 만든다.

*/
