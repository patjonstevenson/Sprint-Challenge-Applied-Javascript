/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.appendChild(newCarousel());

function newCarousel() {
  // Create elements
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  const rightButton = document.createElement("div");

  // Add classes
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  // Add content
  img1.src = "../../assets/carousel/computer.jpeg";
  img2.src = "../../assets/carousel/mountains.jpeg";
  img3.src = "../../assets/carousel/trees.jpeg";
  img4.src = "../../assets/carousel/turntable.jpeg";

  let current = 0;
  const images = [img1, img2, img3, img4];
  images[current].style.display = "block";

  // Add event listeners to buttons
  rightButton.addEventListener("click", event => {
    // Make current image disappear
    images[current].style.display = "none";
    // Increment counter
    current++;
    // Check to see if current has exceeded bounds
    // If so, set it to the corresponding index
    if (current > images.length - 1) {
      current = current % images.length;
    }
    // Make next image appear
    images[current].style.display = "block";
  });

  leftButton.addEventListener("click", event => {
    // Make current image disappear
    images[current].style.display = "none";
    // Increment counter
    current--;
    // Check to see if current has gone below zero
    // If so, set it to the corresponding index
    if (current < 0) {
      current = images.length + current;
    }
    // Make next image appear
    images[current].style.display = "block";
  });

  // Append children
  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  return carousel;
}
