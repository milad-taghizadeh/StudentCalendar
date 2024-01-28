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
// Show user info on index admin section
fetch('http://localhost:3000/api/user/', {
    credentials: "include",
    headers: {
        'Cookie': 'accessToken'
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('username').innerHTML = `<span>نام کاربری : </span><span>${data.username}</span>`
        document.getElementById('email').innerHTML = `<span>آدرس ایمیل : </span><span>${data.email}</span>`
        document.getElementById('phonenumber').innerHTML = `<span>شماره تماس : </span><span>${data.phonenumber}</span>`
    })
    .catch(error => console.error(error))

// loading time picker]
const timePicker = flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K",
});
