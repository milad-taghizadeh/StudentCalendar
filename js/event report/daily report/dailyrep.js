const getDailyRep = () => {
    fetch('http://localhost:3000/api/event/byDay', {
        credentials: 'include',
        headers: {
            'Cookie': 'accessToken'
        }
    }
    )
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                document.getElementById('todayev').innerHTML += `<div class="flex w-full h-48 bg-blue-100 rounded-3xl">
                <div class="flex flex-row w-full justify-center items-center p-5">
                    <div class="flex w-1/2 h-full flex-col gap-y-4">
                        <h1 class="text-2xl font-bold">${item.title}</h1>
                        <p>${item.description}</p>
                    </div>
                    <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                        <p class="text-lg font-bold">${item.date}</p>
                        <p class="text-lg font-bold">${item.subject}</p>
                        <button type="submit" id="${item.title}" onclick="deleteEvent(this.id)"
                            class="w-32 h-10 bg-red-500 mr-96 rounded-lg text-white hover:bg-red-600 duration-150">حذف
                        </button>
                    </div>
                </div>
            </div>`
            });
            console.log(data);
        })
}
getDailyRep();
// DELETE EVENT
const deleteEvent = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/api/event/?title=${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(response => {
            if (response.status == 200) {
                location.href = "/index.html"
                return response.json()
            }
        })
        .then(deleteReq => {
            console.log(deleteReq);
        })
}