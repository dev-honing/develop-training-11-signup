// 내장 모듈 import
const http = require("http");
const fs = require("fs");
// 외장 모듈 import
const data = require("../develop-training-11-signup/basic-data/basic-sign-up-asset");

// 1. 서버 만들기 - createServer() 메서드
http.createServer((req, res) => {
  // 최초 진입: index.html 열기
  if (req.method === "GET" && req.url === "/") {
    fs.readFile("./index.html; charset=utf-8")
  }
  // 로그인
  else if (req.method === "GET" && req.url === "/login"){}
  // 회원가입
  else if (req.method === "GET" && req.url === "/signup"){}
})