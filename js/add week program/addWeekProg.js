const AddWeekProg = () => {
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
        .then(response => response.json())
        .then(sendWeekProgReq => {
            console.log(sendWeekProgReq);
        })
        .catch(error => console.error(error));
}