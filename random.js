export function Quote() {
  console.log();
  return `
  <div class="quote-container">
  <h1>${localStorage.getItem("category") || "Category"}</h1>
  <p class="randomQuote">${localStorage.getItem("quote") || "qoute"}</p>
  </div>
  `;
}