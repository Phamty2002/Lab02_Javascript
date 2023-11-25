document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    submitButton.id = 'submit-button';
    document.body.appendChild(submitButton);
  
    // Change text on submit button after it's created
    submitButton.textContent = 'Click me';
  });
  