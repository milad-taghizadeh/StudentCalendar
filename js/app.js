// LOGIN page
function toggleForm() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");

    loginForm.classList.toggle("hidden");
    signupForm.classList.toggle("hidden");
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
