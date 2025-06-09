document.addEventListener("DOMContentLoaded", function () {
  const starsContainer = document.getElementById("stars");
  const reviewList = document.getElementById("review-list");
  const averageRatingElement = document.getElementById("average-rating");
  const submitRatingButton = document.getElementById("submit-rating");
  const reviewInput = document.getElementById("review-input");
  const submitReviewButton = document.getElementById("submit-review");

  let ratings = [];
  let reviews = [];

  function renderStars(rating) {
    starsContainer.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      const star = document.createElement("span");
      if (i < rating) {
        star.textContent = "★"; // Full star
      } else {
        star.textContent = "☆"; // Empty star
      }
      starsContainer.appendChild(star);
    }
  }

  function calculateAverageRating() {
    if (ratings.length > 0) {
      const totalRating = ratings.reduce((acc, curr) => acc + curr);
      const averageRating = totalRating / ratings.length;
      return averageRating.toFixed(1);
    } else {
      return "--";
    }
  }

  submitRatingButton.addEventListener("click", function () {
    const rating = parseInt(prompt("Enter your rating (1-5):"));
    if (!isNaN(rating) && rating >= 1 && rating <= 5) {
      ratings.push(rating);
      const averageRating = calculateAverageRating();
      averageRatingElement.textContent = averageRating; // Update the average rating element
      renderStars(rating); // Render stars based on user's rating
    } else {
      alert("Please enter a valid rating (1-5).");
    }
  });

  submitReviewButton.addEventListener("click", function () {
    const review = reviewInput.value.trim();
    if (review !== "") {
      reviews.push(review);
      renderReviews();
      reviewInput.value = "";
    } else {
      alert("Please write your review.");
    }
  });

  function renderReviews() {
    reviewList.innerHTML = "";
    reviews.forEach(function (review) {
      const li = document.createElement("li");
      li.textContent = review;
      reviewList.appendChild(li);
    });
  }
});
