var form = document.createElement('form');
form.id = 'my-form';
document.body.appendChild(form);
form.appendChild(submitButton);

// Function to get the value of the submit button
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  var value = document.getElementById('submit-button').textContent;
  console.log('Value of submit button:', value);
});
