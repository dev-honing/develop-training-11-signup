// UTF-8로 변환 연습

// TextEncoder() 사용해보기
const encoder = new TextEncoder();
const UTF_8_Arr = encoder.encode("안녕");
console.log(UTF_8_Arr); // Uint8Array(6) [236, 149, 136, 235, 133, 149]

// TextDecoder()로 다시 변환
const decoder = new TextDecoder();
const toSTR = decoder.decode(UTF_8_Arr);
console.log(toSTR);