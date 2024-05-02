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
insertionSort();
