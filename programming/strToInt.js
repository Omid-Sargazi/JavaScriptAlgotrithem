function StrToInt() {
  let S = "7458632";
  let p = 0;
  for (let i = 0; i < S.length; i++) {
    p = p * 10 + (S.charCodeAt(i) - "0".charCodeAt(0));
  }
  console.log(p);
}

StrToInt();
