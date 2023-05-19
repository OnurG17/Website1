document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get user input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // Display the user input
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<strong>Name:</strong> ' + name + '<br><strong>Email:</strong> ' + email;
    
    // You can send the input data to a server for processing using AJAX or other techniques
  });
  