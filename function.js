// 수업에서 배운 함수 선언 방식 4가지 복습 - 231011
// todo 선언식과 표현식 정리하기
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
// * 정의
const outerThree = () => "wow";
// * 호출
console.log(outerThree); // [Function: outerThree]
console.log(outerThree()); // wow
// ! 화살표 함수도 익명함수 호출 형식과 같음

// 3-1. 매개변수가 하나인 화살표 함수
// * 정의
const outerFour = a => a;
// * 호출
console.log(outerFour); // [Function: outerFour]
console.log(outerFour()); // undefined

// 4. 콜백함수
// * 정의
// 4-1. 매개변수가 하나
function run(callback){
  console.log("콜백하기")
  return callback; // ! 옳은 작성 방식 - VS Code가 주황색으로 가이드 해주는 모습
  return callback(); // ! 틀린 작성 방식 - TypeError: callback is not a function
}
// 4-2. 매개변수가 둘
function add (a, b){
  return a + b;
}
// * 호출
// 4-1. 매개변수가 하나
run();
// 4-2. 매개변수가 둘
console.log(add(2,3));

// * 심화학습
// 5. 즉시 실행 표현(Immediately-invoked expression)
const hello = (function () {
  console.clear();
  console.log("hello")
})()