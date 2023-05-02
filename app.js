// SELECTING THE ELEMENTS
const ratingValues = document.querySelectorAll(".value");
const submitBtn = document.querySelector(".btn");
const container = document.querySelector(".container");
const feedbackCard = container.querySelector(".feedback");

// setting up the functionaliy for every rating button 1 to 5.
ratingValues.forEach((value) => {
  value.addEventListener("click", (e) => {
    const target = e.currentTarget;
    btnValue = e.currentTarget.textContent;
    // only highlights the last clicked button
    ratingValues.forEach((item) => {
      if (item !== value) {
        item.classList.remove("value-selected");
      } else {
        item.classList.add("value-selected");
      }
    });

    // shows thank you popup for 1 second and then reloads the page
    submitBtn.addEventListener("click", function () {
      feedbackCard.classList.add("thank-you");
      showThankYou(btnValue);
      setTimeout(() => {
        location.reload();
      }, 5000);
    });
  });
});

// creating the thank you popup dynamically
function showThankYou(btnValue) {
  feedbackCard.innerHTML = `<picture aria-hidden="true">
  <img class="img-thank-you" src="./images/illustration-thank-you.svg" alt="">
  </picture>

  <div class="rating">
  <span>You selected ${btnValue} out of 5</span>
  </div>

  <h2>Thank You!</h2>
  <p>We appreciate you taking the time to give a   rating if you ever need more support, don't   hesitate to get in
  touch!</p>`;
}
