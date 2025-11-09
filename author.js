export function Author(){
  console.log();
  return `
  <div class="quote-author">
  <h1>Author..</h1>
  <img src="./author.jpg" alt="" id="authorImg"/>
  <p id="author-name">${localStorage.getItem("author") || "Anonymous"}</p>
  </div>
  `;
}