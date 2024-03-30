import { useRef, useState } from "react";
import "./LoginBox.css";

function LoginBox() {
    
    const userName = useRef(null);
    const Tman = useRef(null);

    const [text, setText] = useState('Initial value');


    async function getUser() {
        const httpRequest = "http://localhost:1111/api/" + userName.current.value;
        const account = await fetch(httpRequest);
        const userData = await account.json();
        setText(userData.password);
    }

    async function fetchData() {

        const requestedUserName = userName.current.value;

        try {
            const response = fetch("http://localhost:1111/api/login" ,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: requestedUserName
            });

            if(!response.ok) {
                console.error("Error: user not found");
                statusElement.style.color = "red";
                statusElement.textContent = "user not found"
                return;
            }

            console.log('Account Id:', response);
        } catch {
            console.error("Error:", error);
        }
    }

    return(
        <>
            <input type="text" ref={userName} placeholder="User Name"/>
            <button onClick={getUser}>Submit</button>
            <p ref={Tman}>{text}</p>
        </>
    );
}

export default LoginBox