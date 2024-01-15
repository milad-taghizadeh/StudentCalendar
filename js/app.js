// LOGIN page
function toggleForm() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");

    loginForm.classList.toggle("hidden");
    signupForm.classList.toggle("hidden");
}

function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Perform login logic here

    console.log("Login:", username, password);
}

function signup() {
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;
    var email = document.getElementById("signupEmail").value;
    var phone = document.getElementById("signupPhone").value;

    // Perform sign-up logic here

    console.log("Sign Up:", username, password, email, phone);
}
// index page
function showSection(sectionNumber) {
    // Hide all sections
    const sections = document.querySelectorAll('[id^="section"]');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const selectedSection = document.getElementById(`section${sectionNumber}`);
    selectedSection.classList.remove('hidden');
}