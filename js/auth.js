
function login() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    const loginReq = {
        "email": username,
        "password": password
    }
    fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(loginReq)
    })
        .then(response => response.json)
        .then(loginReq => {
            console.log("Login Success : ", loginReq);
        })
        .catch(error => console.error("Login Rejected", error));
    console.log("Login:", username, password);
}

function signup() {
    let username = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;
    let email = document.getElementById("signupEmail").value;
    let phone = document.getElementById("signupPhone").value;

    // Perform sign-up logic here

    console.log("Sign Up:", username, password, email, phone);
}