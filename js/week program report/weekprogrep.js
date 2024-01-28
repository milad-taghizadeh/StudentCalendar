const getWeekProgRep = () => {
    fetch('http://localhost:3000/api/weekProgram', {
        credentials: 'include',
        headers: {
            'Cookie': 'accessToken'
        }
    }
    )
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                if (element.isOddWeek == true) {
                    const days = Object.keys(element.week)
                    days.forEach(day => {
                        switch (day) {
                            case "sat":
                                const lessonsSat = element.week.sat;
                                lessonsSat.forEach(lesson => {
                                    document.getElementById('satwp').innerHTML += `<div class="flex w-[350px] h-[190px] bg-blue-100 rounded-3xl">
                                    <div class="flex flex-row w-full justify-center items-center p-5">
                                        <div class="flex w-1/2 flex-col gap-y-4">
                                            <h1 class="text-2xl font-bold">${lesson.title}</h1>
                                            <p>${lesson.description}</p>
                                        </div>
                                        <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                                            <p class="text-lg font-bold">${lesson.time}</p>
                                            <button type="submit"
                                                class="w-32 h-10 bg-sky-500 rounded-lg text-white hover:bg-sky-600 duration-150">ویرایش
                                            </button>
                                        </div>
                                    </div>
                                </div>`;
                                })
                                break;

                            case "sun":
                                const lessonsSun = element.week.sun;
                                lessonsSun.forEach(lesson => {
                                    document.getElementById('sunwp').innerHTML += `<div class="flex w-[350px] h-[190px] bg-blue-100 rounded-3xl">
                                    <div class="flex flex-row w-full justify-center items-center p-5">
                                        <div class="flex w-1/2 flex-col gap-y-4">
                                            <h1 class="text-2xl font-bold">${lesson.title}</h1>
                                            <p>${lesson.description}</p>
                                        </div>
                                        <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                                            <p class="text-lg font-bold">${lesson.time}</p>
                                            <button type="submit"
                                                class="w-32 h-10 bg-sky-500 rounded-lg text-white hover:bg-sky-600 duration-150">ویرایش
                                            </button>
                                        </div>
                                    </div>
                                </div>`;
                                })
                                break;

                            case "mon":
                                const lessonsMon = element.week.mon;
                                lessonsMon.forEach(lesson => {
                                    document.getElementById('monwp').innerHTML += `<div class="flex w-[350px] h-[190px] bg-blue-100 rounded-3xl">
                                    <div class="flex flex-row w-full justify-center items-center p-5">
                                        <div class="flex w-1/2 flex-col gap-y-4">
                                            <h1 class="text-2xl font-bold">${lesson.title}</h1>
                                            <p>${lesson.description}</p>
                                        </div>
                                        <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                                            <p class="text-lg font-bold">${lesson.time}</p>
                                            <button type="submit"
                                                class="w-32 h-10 bg-sky-500 rounded-lg text-white hover:bg-sky-600 duration-150">ویرایش
                                            </button>
                                        </div>
                                    </div>
                                </div>`;
                                })
                                break;

                            case "tue":
                                const lessonsTue = element.week.tue;
                                lessonsTue.forEach(lesson => {
                                    document.getElementById('tuewp').innerHTML += `<div class="flex w-[350px] h-[190px] bg-blue-100 rounded-3xl">
                                    <div class="flex flex-row w-full justify-center items-center p-5">
                                        <div class="flex w-1/2 flex-col gap-y-4">
                                            <h1 class="text-2xl font-bold">${lesson.title}</h1>
                                            <p>${lesson.description}</p>
                                        </div>
                                        <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                                            <p class="text-lg font-bold">${lesson.time}</p>
                                            <button type="submit"
                                                class="w-32 h-10 bg-sky-500 rounded-lg text-white hover:bg-sky-600 duration-150">ویرایش
                                            </button>
                                        </div>
                                    </div>
                                </div>`;
                                })
                                break;

                            case "wed":
                                const lessonsWed = element.week.wed;
                                lessonsWed.forEach(lesson => {
                                    document.getElementById('wedwp').innerHTML += `<div class="flex w-[350px] h-[190px] bg-blue-100 rounded-3xl">
                                    <div class="flex flex-row w-full justify-center items-center p-5">
                                        <div class="flex w-1/2 flex-col gap-y-4">
                                            <h1 class="text-2xl font-bold">${lesson.title}</h1>
                                            <p>${lesson.description}</p>
                                        </div>
                                        <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                                            <p class="text-lg font-bold">${lesson.time}</p>
                                            <button type="submit"
                                                class="w-32 h-10 bg-sky-500 rounded-lg text-white hover:bg-sky-600 duration-150">ویرایش
                                            </button>
                                        </div>
                                    </div>
                                </div>`;
                                })
                                break;

                            case "thu":
                                const lessonsThu = element.week.thu;
                                lessonsThu.forEach(lesson => {
                                    document.getElementById('thuwp').innerHTML += `<div class="flex w-[350px] h-[190px] bg-blue-100 rounded-3xl">
                                    <div class="flex flex-row w-full justify-center items-center p-5">
                                        <div class="flex w-1/2 flex-col gap-y-4">
                                            <h1 class="text-2xl font-bold">${lesson.title}</h1>
                                            <p>${lesson.description}</p>
                                        </div>
                                        <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                                            <p class="text-lg font-bold">${lesson.time}</p>
                                            <button type="submit"
                                                class="w-32 h-10 bg-sky-500 rounded-lg text-white hover:bg-sky-600 duration-150">ویرایش
                                            </button>
                                        </div>
                                    </div>
                                </div>`;
                                })
                                break;

                            case "fri":
                                const lessonsFri = element.week.fri;
                                lessonsFri.forEach(lesson => {
                                    document.getElementById('friwp').innerHTML += `<div class="flex w-[350px] h-[190px] bg-blue-100 rounded-3xl">
                                    <div class="flex flex-row w-full justify-center items-center p-5">
                                        <div class="flex w-1/2 flex-col gap-y-4">
                                            <h1 class="text-2xl font-bold">${lesson.title}</h1>
                                            <p>${lesson.description}</p>
                                        </div>
                                        <div class="flex w-1/2 h-full justify-center flex-col gap-y-5 items-center">
                                            <p class="text-lg font-bold">${lesson.time}</p>
                                            <button type="submit"
                                                class="w-32 h-10 bg-sky-500 rounded-lg text-white hover:bg-sky-600 duration-150">ویرایش
                                            </button>
                                        </div>
                                    </div>
                                </div>`;
                                })
                                break;

                            default:
                                break;
                        }
                    })

                }
            });

        })
}
getWeekProgRep();