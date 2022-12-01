// "use strict";

// alert("Javascript!");

// //

// let admin, name;
// name = "John";
// admin = name;
// alert(admin);

//
// let yourName = prompt("What's your name?");
// alert(`Your name is ${yourName}!`);

//
// let number = prompt("숫자를 입력해주세요");
// if (number > 0) {
//   alert(1);
// } else if (number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

//
// let message =
//   login == "직원"
//     ? "안녕하세요"
//     : login == "임원"
//     ? "환영합니다"
//     : login == ""
//     ? "로그인이 필요합니다"
//     : "";

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "동의하십니까?",
//   function () {
//     alert("동의하셨습니다.");
//   },
//   function () {
//     alert("취소 버튼을 누르셨습니다.");
//   }
// );

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "동의하십니까?",
  () => alert("동의하셨습니다."),
  () => alert("취소 버튼을 누르셨습니다.")
);
