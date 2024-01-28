const AddWeekProg = () => {
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
    const weekType = document.getElementById('weektype').value;
    const day = document.getElementById('day').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const time = document.getElementById('time').value;

    const sendWeekProgReq = {
        isOddWeek: weekType,
        week: {

        }
    }
    sendWeekProgReq.week[day] = {
        title: title,
        description: description,
        time: time
    };
    fetch(`http://localhost:3000/api/weekProgram?${"isOddWeek=" + weekType}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(sendWeekProgReq)
    })
        .then(response => {
            if (response.status == 200) {
                location.href ='/index.html'
                showSection(4);
                return response.json()
            }
            else (window.alert('لطفا اطلاعات را به درستی وارد کنید .'))
        })
        .then(sendWeekProgReq => {
            console.log(sendWeekProgReq);
        })
        .catch(error => console.error(error));
}