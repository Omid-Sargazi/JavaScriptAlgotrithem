console.log("Sorting...");

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
selectionSort(A);
