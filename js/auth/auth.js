// LOGIN page
function toggleForm() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");

    loginForm.classList.toggle("hidden");
    signupForm.classList.toggle("hidden");
}
// login
function login() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    const loginReq = {
        email: username,
        password: password
    }
    fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(loginReq)
    })
        .then(response => {
            if (response.status === 200) {
                window.alert('خوش آمدید')
                window.location.href = '/index.html'; // Replace with your actual login page URL
                return response.json();
            } else {
                window.alert('نام کاربری یا رمز عبور اشتباه است .')
            }
        })
        .then(loginReq => {
            console.log("Login Success : ", loginReq);

        })
        .catch(error => console.error("Login Rejected", error));
    console.log("Login:", username, password);
}
// signup
function signup() {
    let username = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;
    let email = document.getElementById("signupEmail").value;
    let phone = document.getElementById("signupPhone").value;

    const signupReq = {
        email: email,
        phonenumber: phone,
        password: password,
        username: username
    }

    fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(signupReq)
    })
        .then(response => {
            if (response.status == 201) {
                window.alert('حساب کاربری ایجاد شد . لطفا وارد شوید');
                location.href = '/login.html'
                return response.json()
            }
            else (window.alert('لطفا اطلاعات خود را به درستی وارد کنید .'))
        })
        .then(signupReq => {
            console.log("sign up Success : ", signupReq);
        })
    console.log("Sign Up:", username, password, email, phone);
}
