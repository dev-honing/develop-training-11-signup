// 수업에서 배운 함수 선언 방식 4가지 복습 - 231011

// 1. 기명함수
// * 정의
function outerOne(){
  return "hello";
}
// * 호출
console.log(outerOne); // [Function: outerOne]
console.log(outerOne()); // hello

// 2. 익명함수
// * 정의
const outerTwo = function(){
  return "bye";
}
// * 호출
console.log(outerTwo); // [Function: outerTwo]
console.log(outerTwo()); // bye
// ! 변수로 선언했기 때문에 변수 자체를 호출하면 될 것 같지만 사실상 함수 이름처럼 호출해야 함

// 3. 화살표 함수
const outerThree = () => "wow";
console.log(outerThree); // [Function: outerThree]
console.log(outerThree()); // wow
// ! 화살표 함수도 익명함수 호출 형식과 같음

// 4. 매개변수가 하나인 화살표 함수
const outerFour = a => a;
console.log(outerFour); // [Function: outerFour]
console.log(outerFour()); // undefined