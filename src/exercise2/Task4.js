document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('my-link');
    link.addEventListener('mouseover', function() {
      var boldWords = document.querySelectorAll('strong');
      boldWords.forEach(function(word) {
        word.style.backgroundColor = 'yellow'; // Highlight bold words
      });
    });
    link.addEventListener('mouseout', function() {
      var boldWords = document.querySelectorAll('strong');
      boldWords.forEach(function(word) {
        word.style.backgroundColor = ''; // Remove highlight from bold words
      });
    });
  });
  