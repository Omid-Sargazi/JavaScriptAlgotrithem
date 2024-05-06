console.log("excercise");

function rotateRight() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let n = A.length;
  let temp = A[n - 1];
  for (let i = n - 2; i > 0; i--) {
    A[i] = A[i - 1];
  }
  A[0] = temp;
  console.log(A);
}
// rotateRight();

function rotateLeft() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  let n = A.length;
  for (let x = 0; x < n; x++) {
    let temp = A[0];
    for (let i = 1; i < n; i++) {
      A[i - 1] = A[i];
    }
    A[n - 1] = temp;
  }
  console.log(A);
}
// rotateLeft();

function deletePrimeNumber() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  let n = A.length;
  let cA = n;
  let prime = [];
  let cPrime = 0;
  let iA = 0;
  while (iA < cA) {
    let flag = 0;
    for (let i = 1; i <= A[iA]; i++) {
      if (A[iA] % i == 0) {
        flag++;
      }
    }
    if (flag != 2) {
      iA++;
    } else {
      prime[cPrime++] = A[iA];
      for (let x = iA + 1; x < cA; x++) {
        A[x - 1] = A[x];
      }
      cA--;
    }
  }
  console.log(A, "A after");
}
deletePrimeNumber();
