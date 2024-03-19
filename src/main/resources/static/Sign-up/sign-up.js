
function checkAccount(){
  const userNameElement = document.getElementById("user-name-input")
  const emailElement = document.getElementById("email-input");
  const passwordElement = document.getElementById("password-input");
  const statusElement = document.getElementById("status-text");
  const UserNamePattern = /^.{5,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^.{5,}$/;

  // Check if email or password is null
  if (!emailElement.value || !passwordElement.value || !userNameElement.value) {
    statusElement.style.color = "red";
    statusElement.textContent = "All field are required";
    return; // Stop execution if user name or email or password is null
  }

  // Check user name length
  if (!UserNamePattern.test(userNameElement.value)) {
    statusElement.style.color = "red";
    statusElement.textContent = "Need longer user name"
    return;
  }

  // Check email validity
  if (!emailPattern.test(emailElement.value)) {
    statusElement.style.color = "red";
    statusElement.textContent = "Not a valid email";
    return; // Stop execution if email is invalid
  }

  // Check password length
  if (!passwordPattern.test(passwordElement.value)) {
    statusElement.style.color = "red";
    statusElement.textContent = "Need longer password"
    return;
  }

  // If User name, email and password are valid, proceed
  statusElement.style.color = "green";
  statusElement.textContent = "Account submited";
  sendNewAccount();
  }
  
  async function sendNewAccount() {
    const userName = document.getElementById("user-name-input").value;
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const statusElement = document.getElementById("status-text");
    const account = JSON.stringify({userName, email, password});
    try {
        const response = await fetch('/api/sign-up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: account
        });

        if(!response.ok) {
            console.error("Error: email taken");
            statusElement.style.color = "red";
            statusElement.textContent = "Email taken"
            return;
        }

        console.log('Received response:');
    } catch (error) {
        console.error("Error:", error);
    }
  }