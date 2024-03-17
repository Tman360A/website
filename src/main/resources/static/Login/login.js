function validate() {
  let status = document.getElementById("status");
  if (!document.getElementById("email").checkValidity()) {
    status.style.color = "red";
    status.textContent = "Not valid email";
  } else {
    status.style.color = "green";
    status.textContent = "Valid email";
    sendEmailAndPasswordToServer();
  }
}

function sendEmailAndPasswordToServer() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  const account = JSON.stringify({email, password});
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: account
  })
  .then(response => response.text())
  .then(data => {
    console.log('Received response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }




