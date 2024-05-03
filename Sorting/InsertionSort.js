console.log("Insertion sort");

function insertionSort() {
  A = [1, -1, 2, 3, 4, 5, 6, -100, -200, 77, 88, 99, 10, -1000];
  console.log(A.length);
  for (let i = 1; i < A.length; i++) {
    j = i - 1;
    temp = A[i];
    while (j >= 0 && temp <= A[j]) {
      A[j + 1] = A[j];
      j--;
    }
    A[j + 1] = temp;
  }
  console.log(A);
}
// insertionSort();
////////////////////////////////////Insertion Sort

function InsertionSort(array) {
  let n = array.length;
  let j = 0;
  console.log(n);
  for (let i = 1; i <= array.length - 1; i++) {
    j = i - 1;
    let temp = array[i];
    while (j >= 0 && temp <= array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  console.log(array);
}

let A = [
  74, 87, 77, 88, 77, 99, 99, 100, 10, -10, -20, -30, -40, -99, -99, 0, 0, 0, 0,
  120, -120, 120000,
];
// InsertionSort(A);

function StringToPermutation(str) {
  let n = str.length;
  let p = 1;
  let s = 0;
  res = Math.pow(2, n);

  while (res > 0) {
    s = s + (res % 2) * p;
    res = ~~(res / 2);
    p = p * 10;
  }
  //   for (let i of s) {
  //     console.log(i);
  //   }
  console.log(s);
}
StringToPermutation("Omid");
