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
