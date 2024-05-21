document
  .getElementById("bookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const book = {
      title: document.getElementById("bookTitle").value,
      author: document.getElementById("bookAuthor").value,
      isbn: document.getElementById("bookISBN").value,
    };
    saveData("book", book);
  });

document
  .getElementById("memberForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const member = {
      name: document.getElementById("memberName").value,
      memberID: document.getElementById("memberID").value,
    };
    saveData("member", member);
  });

document
  .getElementById("loanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const loan = {
      memberID: document.getElementById("loanMemberID").value,
      bookISBN: document.getElementById("loanBookISBN").value,
    };
    saveData("loan", loan);
  });

document
  .getElementById("returnForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const returnData = {
      memberID: document.getElementById("returnMemberID").value,
      bookISBN: document.getElementById("returnBookISBN").value,
    };
    saveData("return", returnData);
  });

function saveData(type, data) {
  fetch("/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type, data }),
  })
    .then((response) => response.text())
    .then((result) => alert(result));
}
