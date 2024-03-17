
const validate = () => {

    const statusElement = document.getElementById("status");

    if (!document.getElementById("email").checkValidity()) {
      statusElement.style.color = "red";
      statusElement.textContent = "not valid email";
    } else {
      statusElement.style.color = "green";
      statusElement.textContent = "valid email";
      sendNewAccount();
    }
  }
  
  async function sendNewAccount() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const statusElement = document.getElementById("status");
    const account = JSON.stringify({email, password});
    try {
        const response = await fetch('/api/sign-up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: account
        });

        if(!response.ok) {
            const errorMessage = await response.text();
            console.error("Error: email taken");
            statusElement.style.color = "red";
            statusElement.textContent = "email taken"
            return;
        }

        const data = await response.text();
        console.log('Received response:', data);
    } catch (error) {
        console.error("Error:", error);
    }
  }