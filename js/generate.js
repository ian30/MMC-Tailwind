// Assuming you have an HTML container element with id "content"
const contentContainer = document.getElementById("movie_details_modal");

// Fetch JSON data from a URL
fetch("../data/movies/avengers_endgame.json")
  .then((response) => response.json())
  .then((jsonData) => {
    // Process JSON data and generate HTML
    const htmlElement = document.createElement("div");
    htmlElement.className = "item";
    htmlElement.innerHTML = `
      <h2>${jsonData.title}</h2>
      <p>${jsonData.description}</p>
    `;

    // Append the HTML element to the container
    contentContainer.appendChild(htmlElement);
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
