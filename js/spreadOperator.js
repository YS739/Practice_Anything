const box = { size: "big", color: "red" };

// const newBox = { ...box }; // {size: "big", color: "red"}
const newBlueBox = { ...box, color: "blue" }; // {size: "big", color: "blue"}
console.log(newBlueBox);

const newBox = { ...box, size: "small", color: "pink" };
console.log(newBox);

// 반복문 연습 문제
const example = ["apple", "banana", "mango", "kiwi", "melon"];

for (i = 0; i <= example.length; i++) {
  console.log(example[i]);
}
