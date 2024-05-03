console.log("Factorial");

function bigNumber(n) {
  let A = [1, 1, 1, 1];
  let cA = A.length;
  q = 0;
  for (let i = 0; i <= cA - 1; i++) {
    let t = A[i] * n + q;
    A[i] = t % 10;
    q = ~~(t / 10);
  }
  while (q > 0) {
    A[cA++] = q % 10;
    q = ~~(q / 10);
  }
  console.log(A);
  //   for (let i = A.length - 1; i >= 0; i--) {
  //   }
}
bigNumber(22);
