const theDay = document.getElementById("theDays");

const handleDate = new Date();

const daysOfWeek = [
  { day: "Sunday", short: "Sun", id: 1 },
  { day: "Monday", short: "Mon", id: 2 },
  { day: "Tuesday", short: "Tue", id: 3 },
  { day: "Wednesday", short: "Wed", id: 4 },
  { day: "Thursday", short: "Thu", id: 5 },
  { day: "Friday", short: "Fri", id: 6 },
  { day: "Saturday", short: "Sat", id: 7 },
];

Object.freeze(daysOfWeek)

const todaysDay = handleDate.getDay() + 1;

theDay.innerHTML = daysOfWeek
  .map((item) => {
    return `
    <span  id="${item.id}" class="dayOfWeek">${item.short}</span>
    `;
  })
  .join("");

const dayOfWeek = document.getElementsByClassName("dayOfWeek");

for (let i = 0; i < dayOfWeek.length; i++) {
  let converted = Number(dayOfWeek[i].id);

  if (todaysDay !== converted) {
    console.log(converted, " => ", todaysDay);
  } else {
    console.log("\n");
    console.log(converted, " => ", todaysDay);
    dayOfWeek[i].classList.add("colored");
    dayOfWeek[i].title = daysOfWeek[i].short;
    dayOfWeek[i].innerHTML = `
    <i  class="fa-solid fa-calendar"></i>
    `;
  }
}

let month;

switch (handleDate.getMonth()) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
  default:
    month = "Invalid month";
}

const popupInfo  = handleDate.getDay() + " " + month + " " + handleDate.getFullYear()
console.log (popupInfo);


const whitePop = document.getElementById('WhitePop');

whitePop.innerHTML =`  <button class="closeMe">
<i class="fa-solid fa-headphones"></i>
<br />
</button> 
${popupInfo}`;

$(document).ready(function(){
        $('footer').fadeIn();


    $('.closeMe').click(function(){
        $('footer').fadeOut();
        // $('footer').hide();
    })

  // jQuery methods go here...

});