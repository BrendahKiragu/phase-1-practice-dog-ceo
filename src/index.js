
document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/2";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const dogImageContainer = document.getElementById("dog-image-container");
  const breedList = document.getElementById("dog-breeds");

  //challenge 1: Function to fetch dog images
  function fetchDogImages() {
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imgUrl => {
          const img = document.createElement("img");
          img.style ="height:50% width: 50%"
          img.src = imgUrl;
          img.alt = "Dog";
          dogImageContainer.appendChild(img);
        });
      })
      .catch(error => {
        console.log("Error fetching dog images:", error);
      });
  }

  //challenge 2: Function to fetch dog breeds
  function fetchDogBreeds() {
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        for (let breed in data.message) {
          const li = document.createElement("li");
          li.textContent = breed;
          breedList.appendChild(li);
        }
      })
      .catch(error => {
        console.log("Error fetching dog breeds:", error);
      });
  }

  // challenge 3: Event listener for breed dropdown change
  const breedDropdown = document.getElementById("breed-dropdown");
  breedDropdown.addEventListener("change", () => {
    const selectedLetter = breedDropdown.value.toLowerCase();
    filterBreeds(selectedLetter);
  });

  // challenge 4: Function to filter breeds by starting letter
  function filterBreeds(letter) {
    const breeds = breedList.getElementsByTagName("li");

    Array.from(breeds).forEach(li => {
      const breedName = li.textContent.toLowerCase();
      if (breedName.startsWith(letter)) {
        li.style.display = "block"; // Show matching breeds
      } else {
        li.style.display = "none"; // Hide non-matching breeds
      }
    });
  }

  // Initial fetches
  fetchDogImages();
  fetchDogBreeds();
});


