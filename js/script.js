document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      alert("Thanks for your feedback! Our team will review it soon.");

      form.reset();
    });
  }
});
