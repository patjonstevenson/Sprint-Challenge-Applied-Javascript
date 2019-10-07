// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Entry point in DOM for cards
const cardsContainer = document.querySelector(".cards-container");

// Get request to lambda times backend for articles
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // Get topic keys
    const topics = Object.keys(response.data.articles);
    // Iterate over each topic
    topics.forEach(topic => {
      // Iterate over articles in each topic
      response.data.articles[topic].forEach(art => {
        // Create new card component and add to cards container
        cardsContainer.appendChild(newCard(art, topic));
      });
    });
  })
  .catch(error => console.log(error));

// Card component function
// Takes art: object
function newCard(art, topic) {
  // Create elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const byline = document.createElement("span");

  // Add classes
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  // Add content
  headline.textContent = art.headline;
  image.src = art.authorPhoto;
  byline.textContent = `By ${art.authorName}`;

  // Set topic
  card.setAttribute("topic", topic);

  // Append children
  imgContainer.appendChild(image);
  author.appendChild(imgContainer);
  author.appendChild(byline);
  card.appendChild(headline);
  card.append(author);

  return card;
}
