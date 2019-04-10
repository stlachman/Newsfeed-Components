// // Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
	constructor(domElement) {
		// assign this.domElement to the passed in domElement
		this.domElement = domElement;
		// create a reference to the ".expandButton" class.
		this.expandButton = this.domElement.querySelector('.expandButton');
		// Using your expandButton reference, update the text on your expandButton to say "expand"
		this.expandButton.textContent = 'Click to Expand';
		// Set a click handler on the expandButton reference, calling the expandArticle method.
		this.expandButton.addEventListener('click', () => {
			this.expandArticle();
    });
    
    this.readButton = this.domElement.querySelector('.close');

    this.readButton.addEventListener('click', () => {
      this.readArticle();
    });

    

		// An alternate way of binding this to the function
		// this.expandArticle = this.expandArticle.bind(this)
		// this.expandButton.addEventListener('click', this.expandArticle)
	}

	expandArticle(event) {
		// Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    // Update text content of button when clicked
    this.expandButton.textContent = 'Click to Close';
  }
  
  readArticle(event) {
    this.domElement.style.display = "none";
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
// Iterate through each article node and pass value into class constructor
articles.forEach(function(article) {
  const objArticle = new Article(article);
});