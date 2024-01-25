// date picking 
document.getElementById('evdate').addEventListener('click', () => {
    console.log(document.getElementById('evdate'));
    jalaliDatepicker.startWatch();

});
// ADD EVENT 
const AddEvent = () => {
    let eventName = document.getElementById('evname').value;
    let eventSub = document.getElementById('evsub').value;
    let eventDate = document.getElementById('evdate').value;
    let eventCaption = document.getElementById('evcaption').value;
    const sendEventReq = {
        title: eventName,
        subject: eventSub,
        date: eventDate,
        description: eventCaption
    }
    fetch('http://localhost:3000/api/event/', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(sendEventReq)
    })
        .then(response => response.json)
        .then(sendEventReq => {
            console.log('added event : ', sendEventReq);
        })
    console.log('details', eventName, eventSub, eventDate, eventCaption);
}
