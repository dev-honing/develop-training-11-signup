// UTF-8로 변환 연습

// 함수화 해보기
// function STRtoUTF8(){
//   const encoder = new TextEncoder();
//   const UTF8 = encoder.encode("");
//   console.log(`UTF-8로 변환을 완료했습니다.`);
//   console.log(`UTF-8: ${UTF8}`);

// }
// function UTF8toSTR(){
//   const decoder = new TextDecoder();
//   const STR = decoder.decode("");
//   console.log(`문자열로 변환을 완료했습니다.`)
//   console.log(`STR: ${STR}`);
// }

// 함수화
// 문자열 a를 넣으면 UTF-8의 형태로 변환
// const  STR = "";
// const STRtoUTF8 = STR => {
//   console.log(`문자열 "${STR}"를 'UTF-8'로 변환했습니다.`);
// }

// // 호출
// STRtoUTF8();

const convert = (format) => {
  if ( typeof(format) === "string"){
    const encoder = new TextEncoder();
    const UTF8 = encoder.encode(format);
    console.log(`${format}를 'UTF-8'로 변환했습니다.`);
    // const uint8Array = new Uint8Array(format);
    // console.log(( new TextEncoder().encode(uint8Array) ))
    console.log(`바꾼 형태: [${UTF8}]`);
  }
  else if (typeof(format) === "object"){
    let uint8Array = new Uint8Array(format);
    console.log(( new TextDecoder().decode(uint8Array) ));

  }
}

convert("hello") // [104,101,108,108,111]
convert([104,101,108,108,111]); // hello
