document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");

  if (form) {
    form.addEventListener("submit", function () {
      alert("Thanks for your feedback! We'll get back to you soon.");
    });
  }
});
