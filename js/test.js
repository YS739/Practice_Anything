// 성인(19세 이상)인 경우에만 맥주 주문을 받아 맥주를 제공

// 혼자 풀어보기
// const persons = function (age) {
//   if (age >= 20) {
//     console.log("맥주 나왔습니다! [주문한 사람 이름]님");
//   } else {
//     console.log("나이 더 먹고 오세요! [주문한 사람 이름]님");
//   }
// };

// console.log(persons(32));

// 코드 스니펫
// function isAdult(person) {
//   // 왜 이런 코드가 가능한지 모르겠다면 비교 연산자를 복습하세요! 기초 튼튼!
//   return person.age >= 19;
// }

// function orderBeer(person) {}

// const persons = [
//   { name: "이용우", age: 19 },
//   { name: "김예지", age: 18 },
// ];

// // for...of문이 어떻게 동작하는지 모르겠다면 반복문을 복습하세요!
// for (const person of persons) {
// }

// Print: 맥주 나왔습니다! 이용우님
// 나이 더 먹고 오세요! 김예지님

// 코드스니펫 참고해서 다시 풀어보기
// const persons = [
//   { name: "이용우", age: 19 },
//   { name: "김예지", age: 18 },
// ];

// for(const person in persons){
//     if(person.age>=20){
//         console.log("맥주 나왔습니다! '${"person.name"}' 님")
//     }
//     else{
//         console.log("나이 더 먹고 오세요! [주문한 사람 이름]님")
//     }
// }

// 정답
function isAdult(person) {
  return person.age >= 19;
}

function orderBeer(person) {
  if (isAdult(person) == true) {
    console.log(`맥주 나왔습니다! ${person.name}님`);
    // 내가 이 부분은 백틱, 제이쿼리 써 봄!
  } else {
    console.log("나이 더 먹고 오세요!" + person.name + "님");
  }
}

const persons = [
  { name: "이용우", age: 19 },
  { name: "김예지", age: 18 },
];

for (const person of persons) {
  orderBeer(person);
}
