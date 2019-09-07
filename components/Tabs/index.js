// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector(".topics");
const cardsCont = document.querySelector(".cards-container");
const cards = cardsCont.childNodes;

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    response.data.topics.forEach(topic => {
      topics.appendChild(newTab(topic, cards));
    });
  })
  .catch(err => console.log(err));

function newTab(topic, cards) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = `${topic}`;

  tab.addEventListener("click", event => {
    cards.forEach(card => {
      // Had to add the substring as a hack
      //  because the API is giving node and node.js as topic names...
      //  but it works...
      card.getAttribute("topic").substring(0, 4) !== topic.substring(0, 4)
        ? (card.style.display = "none")
        : (card.style.display = "flex");
    });
  });

  return tab;
}
