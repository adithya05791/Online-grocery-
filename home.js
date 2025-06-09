const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");

// Sample list of suggestions
const suggestions = [
  "Fruits",
  "Frozen items",
  "Bakery Items",
  "spices",
  "Snacks",
  "Beverages",
];

// Function to display suggestions
function showSuggestions() {
  const userInput = searchInput.value.toLowerCase();
  searchSuggestions.innerHTML = "";

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(userInput)
  );

  if (filteredSuggestions.length === 0 && userInput !== "") {
    // If no suggestions match the user input, display "Search results not found"
    const noResultsMessage = document.createElement("div");
    noResultsMessage.textContent = "Search results not found";
    searchSuggestions.appendChild(noResultsMessage);
  } else {
    // Display filtered suggestions
    filteredSuggestions.forEach((suggestion) => {
      const suggestionItem = document.createElement("div");
      suggestionItem.classList.add("suggestion-item");
      suggestionItem.textContent = suggestion;
      suggestionItem.addEventListener("click", () => {
        searchInput.value = suggestion;
        searchSuggestions.innerHTML = "";
        // Navigate to the determined page URL
        handleSuggestionSelection(suggestion);
      });
      searchSuggestions.appendChild(suggestionItem);
    });
  }

  if (userInput === "") {
    searchSuggestions.innerHTML = "";
  }
}

// Event listener for input changes
searchInput.addEventListener("input", showSuggestions);

// Function to handle suggestion selection and page navigation
function handleSuggestionSelection(suggestion) {
  // Determine the page URL based on the selected suggestion
  let pageURL = "";

  // Logic to determine the URL based on the selected suggestion
  switch (suggestion.toLowerCase()) {
    case "fruits":
      pageURL = "fruits.html";
      break;
    case "Frozen items":
      pageURL = "frozen.html";
      break;
    case "bakery items":
      pageURL = "bakery.html";
      break;
    case "spices":
      pageURL = "spices.html";
      break;
    case "snacks":
      pageURL = "bakery.html";
      break;
    case "beverages":
      pageURL = "beverage.html";
      break;
    // Add more cases for other suggestions as needed
    default:
      // Default case if no specific page matches the suggestion
      pageURL = "#"; // Or any other fallback URL
  }

  // Navigate to the determined page URL
  window.location.href = pageURL;
}

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".produc-image");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
const maxIndex = slides.length - 1;

function updateSlideVisibility() {
  slides.forEach((slide, index) => {
    if (index >= currentIndex && index < currentIndex + 3) {
      slide.classList.remove("hidden");
    } else {
      slide.classList.add("hidden");
    }
  });
}

function showNextSlide() {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlideVisibility();
  }
}

function showPreviousSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlideVisibility();
  }
}

nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPreviousSlide);

updateSlideVisibility(); // Show initial slides
document.addEventListener("DOMContentLoaded", function () {
  const chatContainer = document.getElementById("chat-container");
  const chatIcon = document.getElementById("chat-icon");
  const chatBox = document.getElementById("chat-box");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");

  chatIcon.addEventListener("click", function () {
    chatContainer.classList.toggle("active");
  });

  function addMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function simulateReply(message) {
    setTimeout(function () {
      addMessage(
        "I'm just a demo bot! Thank you for reaching us we will get back shortly",
        "Bot"
      );
    }, 500);
  }

  sendButton.addEventListener("click", function () {
    const message = messageInput.value.trim();
    if (message !== "") {
      addMessage(message, "You");
      simulateReply(message);
      messageInput.value = "";
    }
  });

  messageInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendButton.click();
    }
  });
});
