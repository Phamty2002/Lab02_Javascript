document.addEventListener('DOMContentLoaded', function() {
    var ageForm = document.createElement('form');
    ageForm.id = 'age-form';
    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter birth year';
    var calculateButton = document.createElement('button');
    calculateButton.textContent = 'Calculate Age';
    ageForm.appendChild(input);
    ageForm.appendChild(calculateButton);
    document.body.appendChild(ageForm);
  
    // Calculate age and display it
    ageForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
      var birthYear = parseInt(input.value, 10);
      var age = new Date().getFullYear() - birthYear;
      console.log('Age is:', age);
    });
  });
  