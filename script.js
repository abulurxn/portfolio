document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('responseMsg').textContent = "Thanks for your message!";
  this.reset();
});
