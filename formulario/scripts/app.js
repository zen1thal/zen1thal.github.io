const sections = document.querySelectorAll("section");
const buttons = document.querySelectorAll(".btn");
let currentIndex = 0;


// Function to validate inputs and sections
const goToNextSection = () => {
  const currentSection = sections[currentIndex];
  const inputs = currentSection.querySelectorAll("input, select");
  const errorMessage = currentSection.querySelector(".error-message");

  let allValid = true;

  // Custom validation for checkbox group
  if (currentSection.classList.contains("days")) {
    const dayCheckboxes = currentSection.querySelectorAll(
      'input[data-group="days"]'
    );
    const isAnyDayChecked = Array.from(dayCheckboxes).some(
      (checkbox) => checkbox.checked
    );
    if (!isAnyDayChecked) {
      allValid = false;
    }
  } else {
    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        allValid = false;
      }
    });
  }

  if (allValid) {
    if (errorMessage) {
      errorMessage.classList.add("hidden");
    }
    if (currentIndex < sections.length - 1) {
      currentSection.classList.add("hidden");
      sections[currentIndex + 1].classList.remove("hidden");
      currentIndex++;
    }
  } else {
    if (errorMessage) {
      errorMessage.classList.remove("hidden");
    }
  }
};

// Button click to navigate
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.type !== "submit") {
      e.preventDefault();
      goToNextSection();
    }
  });
});

//Enter key to navigate

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); 
    const btn = sections[currentIndex].querySelector(".btn");
    if (btn) {
      btn.click();
    }
  }
});


// Form submission to Google Sheets
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzI07I2UJm-BAcdQNYE1X3QK4Ytc6ofnqFP29Hd4qZ9ysUkxzeKgEEORR8HZSi3iSm-/exec";
const form = document.getElementById("miFormulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();


  const lastInputSection = sections[currentIndex];
  const lastInput = lastInputSection.querySelector("input, select");
  if (!lastInput.checkValidity()) {
    const errorMessage = lastInputSection.querySelector(".error-message");
    if (errorMessage) errorMessage.classList.remove("hidden");
    return;
  }

  const selectedDays = Array.from(
    form.querySelectorAll('input[data-group="days"]:checked')
  )
    .map((checkbox) => checkbox.name)
    .join(", ");

  const data = {
    name: form.name.value,
    surname: form.surname.value,
    email: form.email.value,
    course: form.course.value,
    genres: form.genres.value,
    favorite: form.favorite.value,
    list: form.list.value,
    days: selectedDays,
    hours: form.hours.value,
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((response) => {
      console.log("Success! Your response was recorded.", response);
      sections[currentIndex].classList.add("hidden");
      sections[currentIndex + 1].classList.remove("hidden");
      form.reset();
      window.location.href = 'final.html';
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("Something went wrong. Please try again.");
    });
});
