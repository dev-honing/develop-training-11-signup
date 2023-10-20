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

// 3-2. 매개변수가 둘인 화살표 함수
const name_Greet = (name, greet) => {console.log(`${name}, ${greet}`)};
// console.clear();
name_Greet("A", "hi");
name_Greet("B", "hello")
name_Greet("C", "안녕")
name_Greet("D", "안녕하세요")
// * 매개변수가 둘이면 어떨까 생각하면서 작성해봤는데
// * 나이별/국가별 대응이 가능하고 상당히 작성이 편리하겠다는 생각이 든다.

// 3-3. 매개변수가 셋인 화살표 함수
const Info = (country, name, age) => {console.log(`국적: ${country}, 이름: ${name}, 나이: ${age}`)};
Info("대한민국", "변호녕", "26");
// todo 아래와 같이 정보 관리가 가능한가?
// Info_1 = "대한민국", "A", "20"
// Info_2 = "미국", "B", "30"
// Info_3 = "영국", "C", "40"
// console.clear();
// ! 실패
// for (i=0; i<3; i++){
//   const Info_[i] = (country, name, age) => {console.log(`국적: ${country}, 이름: ${name}, 나이: ${age}`)};
//   console.log(Info_[i]);
// };

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
const startNow = (function () {
  console.log("즉시실행")
})
()
const startTwo = (function (){
  console.log("두번째 즉시실행");
})
()