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

function factorial() {
  let A = new Array(10000).fill(0);
  A[0] = 1;
  let cA = 1;

  for (let i = 1; i <= 10000; i++) {
    let q = 0;
    for (let x = 0; x < cA; x++) {
      let t = A[x] * i + q;
      A[x] = t % 10;
      q = Math.floor(t / 10);
    }
    while (q > 0) {
      A[cA++] = q % 10;
      q = Math.floor(q / 10);
    }
  }
  let result = "";
  for (let i = cA - 1; i >= 0; i--) {
    result += A[i];
  }
  console.log(result);
}

factorial();
