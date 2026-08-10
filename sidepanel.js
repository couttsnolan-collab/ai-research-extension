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
    <h2>Sources</h2>

    <div class="source-card">
      <h3>Library of Congress</h3>

      <p class="website">
        loc.gov
      </p>

      <p>
        <strong>Relevant quote:</strong>
      </p>

      <blockquote>
        "This is a sample quotation from the first source."
      </blockquote>

      <button>
        Copy Quote
      </button>

      <button>
        Open Source
      </button>

      <button>
        MLA Citation
      </button>
    </div>

    <hr>

    <div class="source-card">
      <h3>National Archives</h3>

      <p class="website">
        archives.gov
      </p>

      <p>
        <strong>Relevant quote:</strong>
      </p>

      <blockquote>
        "This is a separate sample quotation from the second source."
      </blockquote>

      <button>
        Copy Quote
      </button>

      <button>
        Open Source
      </button>

      <button>
        MLA Citation
      </button>
    </div>
  `;
});