console.log("Merge");

function margeTwoArray() {
  let A = [1, 2, 3, 4, 5, 6, 77, 88, 99];
  let B = [-1, -2, -3, 4, 55, 66, 852, 963, 999];
  let C = [];
  let iA = 0;
  let iB = 0;
  let iC = 0;
  console.log(A.length);
  while (iA < A.length && iB < B.length) {
    if (A[iA] < B[iB]) {
      C[iC++] = A[iA++];
    } else {
      C[iC++] = B[iB++];
    }
  }
  if (iA == A.length) {
    for (let i = iB; i < B.length; i++) {
      C[iC++] = B[iB++];
    }
  } else if (iB === B.length) {
    for (let i = iA; i < A.length; i++) {
      C[iC++] = A[iA++];
    }
  }
  console.log(C, "Merged", "length C is:", C.length);
}
margeTwoArray();
