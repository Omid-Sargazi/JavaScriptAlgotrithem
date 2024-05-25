function StrToInt() {
  let S = "7458632";
  let p = 0;
  for (let i = 0; i < S.length; i++) {
    p = p * 10 + (S.charCodeAt(i) - "0".charCodeAt(0));
  }
  console.log(p);
}

// StrToInt();

function trimString() {
  let S = "       omid          ";
  let i1 = 0;
  let i2 = S.length - 1;

  while (i1 < S.length && S[i1] === " ") i1++;
  while (i2 > i1 && S[i2] === " ") i2--;
  let R = "";

  for (let x = i1; x <= i2; x++) {
    R = R + S[x];
  }

  console.log(R, R.length);
}
trimString();
