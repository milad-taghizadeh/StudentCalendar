// get weekly report of events
const getWeeklyReport = () => {
    fetch('http://localhost:3000/api/event/byWeek', {
        credentials: 'include',
        headers: {
            'Cookie': 'accessToken'
        }
    })
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const date = item.date.split(' ');
                date.forEach(day => {
                    switch (day) {
                        case "Sat":
                            document.getElementById('satev').innerHTML += `<div class="flex w-full h-48 bg-blue-100 rounded-3xl">
                <div class="flex flex-row w-full justify-center items-center p-5">
                    <div class="flex w-1/2 h-full flex-col gap-y-4">
                        <h1 class="text-2xl font-bold">${item.title}</h1>
                        <p>${item.description}</p>
                    </div>
                    <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                        <p class="text-lg font-bold">${item.date}</p>
                        <p class="text-lg font-bold">${item.subject}</p>
                        <button type="submit"
                            class="w-32 h-10 bg-red-500 mr-96 rounded-lg text-white hover:bg-red-600 duration-150">DELETE
                        </button>
                    </div>
                </div>
            </div>`
                            break;
                        case "Sun":
                            document.getElementById('sunev').innerHTML += `<div class="flex w-full h-48 bg-blue-100 rounded-3xl">
                <div class="flex flex-row w-full justify-center items-center p-5">
                    <div class="flex w-1/2 h-full flex-col gap-y-4">
                        <h1 class="text-2xl font-bold">${item.title}</h1>
                        <p>${item.description}</p>
                    </div>
                    <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                        <p class="text-lg font-bold">${item.date}</p>
                        <p class="text-lg font-bold">${item.subject}</p>
                        <button type="submit"
                            class="w-32 h-10 bg-red-500 mr-96 rounded-lg text-white hover:bg-red-600 duration-150">DELETE
                        </button>
                    </div>
                </div>
            </div>`
                            break;

                        case "Mon":
                            document.getElementById('monev').innerHTML += `<div class="flex w-full h-48 bg-blue-100 rounded-3xl">
                <div class="flex flex-row w-full justify-center items-center p-5">
                    <div class="flex w-1/2 h-full flex-col gap-y-4">
                        <h1 class="text-2xl font-bold">${item.title}</h1>
                        <p>${item.description}</p>
                    </div>
                    <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                        <p class="text-lg font-bold">${item.date}</p>
                        <p class="text-lg font-bold">${item.subject}</p>
                        <button type="submit"
                            class="w-32 h-10 bg-red-500 mr-96 rounded-lg text-white hover:bg-red-600 duration-150">DELETE
                        </button>
                    </div>
                </div>
            </div>`
                            break;

                        case "Tue":
                            document.getElementById('tueev').innerHTML += `<div class="flex w-full h-48 bg-blue-100 rounded-3xl">
                <div class="flex flex-row w-full justify-center items-center p-5">
                    <div class="flex w-1/2 h-full flex-col gap-y-4">
                        <h1 class="text-2xl font-bold">${item.title}</h1>
                        <p>${item.description}</p>
                    </div>
                    <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                        <p class="text-lg font-bold">${item.date}</p>
                        <p class="text-lg font-bold">${item.subject}</p>
                        <button type="submit"
                            class="w-32 h-10 bg-red-500 mr-96 rounded-lg text-white hover:bg-red-600 duration-150">DELETE
                        </button>
                    </div>
                </div>
            </div>`
                            break;

                        case "Wed":
                            document.getElementById('wedev').innerHTML += `<div class="flex w-full h-48 bg-blue-100 rounded-3xl">
                <div class="flex flex-row w-full justify-center items-center p-5">
                    <div class="flex w-1/2 h-full flex-col gap-y-4">
                        <h1 class="text-2xl font-bold">${item.title}</h1>
                        <p>${item.description}</p>
                    </div>
                    <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                        <p class="text-lg font-bold">${item.date}</p>
                        <p class="text-lg font-bold">${item.subject}</p>
                        <button type="submit"
                            class="w-32 h-10 bg-red-500 mr-96 rounded-lg text-white hover:bg-red-600 duration-150">DELETE
                        </button>
                    </div>
                </div>
            </div>`
                            break;

                        case "Thu":
                            document.getElementById('thuev').innerHTML += `<div class="flex w-full h-48 bg-blue-100 rounded-3xl">
                <div class="flex flex-row w-full justify-center items-center p-5">
                    <div class="flex w-1/2 h-full flex-col gap-y-4">
                        <h1 class="text-2xl font-bold">${item.title}</h1>
                        <p>${item.description}</p>
                    </div>
                    <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                        <p class="text-lg font-bold">${item.date}</p>
                        <p class="text-lg font-bold">${item.subject}</p>
                        <button type="submit"
                            class="w-32 h-10 bg-red-500 mr-96 rounded-lg text-white hover:bg-red-600 duration-150">DELETE
                        </button>
                    </div>
                </div>
            </div>`
                            break;
                        case "Fri":
                            document.getElementById('friev').innerHTML += `<div class="flex w-full h-48 bg-blue-100 rounded-3xl">
                <div class="flex flex-row w-full justify-center items-center p-5">
                    <div class="flex w-1/2 h-full flex-col gap-y-4">
                        <h1 class="text-2xl font-bold">${item.title}</h1>
                        <p>${item.description}</p>
                    </div>
                    <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                        <p class="text-lg font-bold">${item.date}</p>
                        <p class="text-lg font-bold">${item.subject}</p>
                        <button type="submit"
                            class="w-32 h-10 bg-red-500 mr-96 rounded-lg text-white hover:bg-red-600 duration-150">DELETE
                        </button>
                    </div>
                </div>
            </div>`
                            break;

                        default:
                            break;
                    }

                })

            });
            console.log(data);
        })
        .catch(error => console.error(error));
}
getWeeklyReport();