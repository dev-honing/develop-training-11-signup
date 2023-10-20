// UTF-8로 변환 연습

// 함수화 해보기
function STRtoUTF8(){
  const encoder = new TextEncoder();
  const UTF8 = encoder.encode("");
  console.log(`UTF-8로 변환을 완료했습니다.`);
  console.log(`UTF-8: ${UTF8}`);

}
function UTF8toSTR(){
  const decoder = new TextDecoder();
  const STR = decoder.decode("");
  console.log(`문자열로 변환을 완료했습니다.`)
  console.log(`STR: ${STR}`);
}
