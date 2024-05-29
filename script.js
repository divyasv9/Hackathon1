const showAnswerButtons = document.querySelectorAll('.show-answer');

showAnswerButtons.forEach(button => {
  button.addEventListener('click', function() {
    const answer = this.nextElementSibling; // Get the answer element next to the button
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none'; // Toggle display
  });
});
