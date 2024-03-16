
function writeUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    sendEmailAndPasswordToServer(email, password);
}

function sendEmailAndPasswordToServer(email, password) {
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: email
  })
  .then(response => response.text())
  .then(data => {
    console.log('Received response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }
  


