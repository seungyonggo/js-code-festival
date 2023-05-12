import boardList from "../mock/boardList.json" assert { type: "json" };
console.log(boardList);

/*
순서
게시물을 리스트에 뿌리기
1. class boardlist를 가지고온다
2. mockdata를 순회해서 class boradlist innerhtml로 넣는다.

1. 코드를치지말고 설계(생각)부터하기 한글로 (배열을 html로 넣는방법 구글링) 배열을 한요소에 넣는법
2. input값부터 찾는다
3. 자바스크립트 기본이 너무 부족하다.
*/

const a = document.querySelector(".board-list");
a.innerHTML;
