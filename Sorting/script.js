console.log("Sorting......");

let A = [4, 1, 2, 4, 6, 5, -10];
console.log("A", A);

function selectionSort(array) {
  let n = array.length;
  let temp = 0;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
      temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
    }
  }
  console.log("After", A);
}
// selectionSort(A);

function bubbleSort(array) {
  let n = array.length;
  let temp = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log("Bubble Sort", array);
}
// bubbleSort(A);

function insertionSort(array) {
  let n = array.length;

  for (let i = 1; i < n; i++) {
    temp = array[i];
    let j = i - 1;
    while (j >= 0 && temp <= array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  console.log(array);
}
insertionSort(A);
