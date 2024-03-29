function validate() {
  const status = document.getElementById("status");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailPattern.test(document.getElementById("email").value)) {
    status.style.color = "red";
    status.textContent = "Not valid email";
  } else {
    status.style.color = "green";
    status.textContent = "Valid email";
    sendEmailAndPasswordToServer();
  }
}

 async function sendEmailAndPasswordToServer() {
  const userName = document.getElementById("user-name-input").value;
  //const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const statusElement = document.getElementById("status-text");
  const account = JSON.stringify({userName});
  try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: account
      });

      if(!response.ok) {
          console.error("Error: user not found");
          statusElement.style.color = "red";
          statusElement.textContent = "user not found"
          return;
      }

      console.log('Account Id:', response);
  } catch (error) {
      console.error("Error:", error);
  }
}



