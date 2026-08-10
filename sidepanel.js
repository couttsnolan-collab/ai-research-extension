const researchButton = document.getElementById("researchButton");
const researchQuestion = document.getElementById("researchQuestion");
const results = document.getElementById("results");

researchButton.addEventListener("click", function () {

  const question = researchQuestion.value.trim();

  if (question === "") {
    results.innerHTML = "<p>Please enter a research question.</p>";
    return;
  }

  results.innerHTML = `
    <h2>Your Question</h2>
    <p>${question}</p>
    <p>Research results will appear here.</p>
  `;
});