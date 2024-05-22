function bigFactorial() {
  let A = [1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let cA = 6;
  let n = 62;
  let q = 0;
  for (let i = 0; i < cA; i++) {
    let t = A[i] * n + q;
    A[i] = t % 10;
    q = ~~(t / 10);
  }
  while (q > 0) {
    A[cA++] = q % 10;
    q = ~~(q / 10);
  }

  for (let i = cA - 1; i >= 0; i--) {
    console.log(A[i]);
  }
}
bigFactorial();
