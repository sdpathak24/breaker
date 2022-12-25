const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }
  monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});


renderCalendar();



// let today = document.getElementsByClassName("today")[0]

// today.addEventListener("click", (e)=>{
//     if(today.style.background==="none"){
//         today.style.background="red"
//     }else{
//         today.style.background="none"
//       }

//     localStorage.setItem("today", today.style.background);  
// })



// let allDays = document.getElementsByClassName("days")[0]

// allDays.addEventListener("click", ()=>{
//     if(allDays.style.background==="red"){
//         allDays.style.background="red"
//     }
// })


document.querySelectorAll('.days div:not(.next-date):not(.prev-date)').forEach
(day => {
    if (localStorage.getItem(day.innerHTML)) {
        day.style.background = "red";
    }else day.style.background = "none";
        
    
});

document.querySelectorAll('.today').forEach
(day => {
    day.addEventListener("click", (event) =>{
        if (localStorage.getItem(event.target.innerHTML)) {
            localStorage.removeItem(event.target.innerHTML);
            event.currentTarget.style.background = '#777';
        }else {
        event.currentTarget.style.background = 'red';
        console.log(event.currentTarget);
        
        localStorage.setItem(event.target.innerHTML,"red")
        }
        
      //  localStorage.getItem("days")
        //    let dys = document.getElementsByClassName(".days div")[0]
        //   localStorage.setItem("day",dys.style.background="red");      
    });
});

let dropDown = document.getElementsByClassName("down")[0]
let textInfo = document.getElementsByClassName("info-text")[0]


dropDown.addEventListener("click", ()=>{
    if (textInfo.style.display == "none") {
        textInfo.style.display = "block"
    }else{
        textInfo.style.display = "none"
    }
    // if (textInfo.style.opacity == "1") {
    //     textInfo.style.opacity = "0"
    // }else{
    //     textInfo.style.opacity = "1"
    // }
    
})
