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
		this.domElement.style.display = 'none';
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

// Article Constructor

// class ArticleComponent {

//   constructor(element) {
//     const articleContainer = document.querySelector('.articles');
//     const articleWrapper = document.createElement('div');

//     articleWrapper.classList = 'article';

//     articleContainer.appendChild(articleWrapper);
//     this.title = element.title;
//     this.date = element.date;
//     this.button = element.button;
//     this.content = element.content;
//   }

//   createArticleTitle() {
//     const articleTitle = document.createElement('h2');
//     articleTitle.textContent = this.title; 
//     articleWrapper.appendChild(articleTitle);
//   }
// }

// const articleData = {
//   articleTitle: 'Lambda School Students: "We\'re the best!"',
//   date: 'Nov 5th, 2017',
//   button: 'Read',
//   content: "Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul."
// }

// const article = new ArticleComponent(articleData);