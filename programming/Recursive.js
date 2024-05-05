console.log("Received");

// the below code fragment can be found in:

function Max2(a, b) {
  if (a < b) return b;
  else return a;
}

function Max(A, cA) {
  //   console.log(cA);
  if (A.length == 1) return A[0];
  else if (cA == 2) return Max2(A[0], A[1]);
  else if (cA > 2) return Max2(A[cA - 1], Max(A, cA - 1));
}
let A = [1, 2, 30, 1, 1, 1 - 100, 10000000];
let cA = A.length;
console.log(Max(A, cA));
console.log("End Received");

/////////////////////////Base two with recursively

function BaseTwo(n) {
  if (n === 0) return "";
  else if (n > 0) return BaseTwo(~~(n / 2)) + (n % 2);
}
// console.log(BaseTwo(7));

function deleteRepeatedNumbers() {
  let A = [1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 9, 10];
  let cA = A.length;
  let B = [];
  let cB = 0;
  for (let i = 0; i < cA; i++) {
    let flag = 0;
    for (let j = 0; j < cB; j++) {
      if (A[i] == B[j]) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      B[cB] = A[i];
      cB++;
    }
  }
  console.log(B);
}
deleteRepeatedNumbers();
