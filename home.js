import { quotes } from './qoutesData.js';

export function Home() {
  setTimeout(() => {
    const categoryInput = document.getElementById("categoryInput");
    const generateBtn = document.querySelector(".generate");
    
    generateBtn.addEventListener("click", () => {
      categoryInput.style.border = "none";
      const userCategory = categoryInput.value.trim().toLowerCase();
      const categoryQuotes = quotes.find((category) => category.category === userCategory);
      if (categoryQuotes) {
        const quote = categoryQuotes.items[Math.round(Math.random() * categoryQuotes.items.length)].quote;
        const author = categoryQuotes.items[Math.round(Math.random() * categoryQuotes.items.length)].author;
        localStorage.setItem("category", categoryQuotes.category)
        localStorage.setItem("quote", quote);
        localStorage.setItem("author", author);
      } else {
        categoryInput.style.border = "2px solid darkred";
        return;
      }
      categoryInput.value = "";
    });
    
  }, 0)
  
  return `
  <div class="home-container">
  <h1>Quote Gallery</h1>
  <p>A Gallery of random quotes related time, science, space and reality..</p>
  <div>
    <input type="text" id="categoryInput" placeholder=""/> 
    <button class="generate">Show Me</button>
  </div>
  </div>
  `;
}