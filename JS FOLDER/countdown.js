// The end of the sec tirm to countdown

let countDown = new Date("may 11, 2022 23:59:59").getTime();
// console.log(countDown);

let counter = setInterval(() => {

  // Get Data Now
  let dateNow = new Date().getTime();

  // Find the date diff between now and countdown date
  let dateDiff = countDown - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(dateDiff % (1000 * 60) / (1000))

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000)




