console.log("Factorial");

function bigNumber(n) {
  let A = [
    1, 1, 1, 1, 1, 2, 2, 2, 6, 6, 8, 9, 7, 3, 1, 2, 2, 2, 6, 6, 8, 9, 7, 4, 1,
    2, 2, 2, 6, 6, 8, 9, 7,
  ];
  let cA = A.length;
  q = 0;
  for (let i = 0; i <= cA - 1; i++) {
    let t = A[i] * n + q;
    A[i] = t % 10;
    q = ~~(t / 10);
  }
  console.log(q, "q");
  while (q > 0) {
    A[cA++] = q % 10;
    q = ~~(q / 10);
  }
  //   if (n % 100 === 0) {
  //     console.log(n);
  //   }
  console.log(A);
  //   for (let i = A.length - 1; i >= 0; i--) {
  //   }
}
// bigNumber(125478854);
let A = [3, 1, 1, 1, 1, 1, 1, 1, 1];
let B = [9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9];
let C = [];
function AddTwoNumbers(A, B) {
  let cA = A.length;
  let cB = B.length;
  let max = A.length;
  if (cA > cB) {
    for (let i = cB; i < cA; i++) {
      B[i] = 0;
      max = cA;
    }
  }
  if (cB > cA) {
    for (let i = cA; i < cB; i++) {
      A[i] = 0;
      max = cB;
    }
  }
  let q = 0;
  for (let i = 0; i < max; i++) {
    C[i] = (A[i] + B[i] + q) % 10;
    q = ~~((A[i] + B[i] + q) / 10);
  }
  if (q > 0) {
    C[max] = q;
  }
  console.log(C);
}
AddTwoNumbers(A, B);
