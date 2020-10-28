let runnerNumber = Math.floor(Math.random() * 1000);
let runnerRegisteredEarly = true;
let runnersAge = 8;

if (runnersAge => 18 && runnerRegisteredEarly === true) {
  runnerNumber = (runnerNumber + 1000);
}

if (runnersAge => 18 && runnerRegisteredEarly === true) {
console.log("Race will start 9:30 am and your number will be " + runnerNumber);
}
else if (runnersAge > 18 && runnerRegisteredEarly === false) {
  console.log("Late adults run at 11:00 am and your number will be "+ runnerNumber);
}
else if (runnersAge < 18) {
  console.log("Youth registrants run at 12:30 pm (regardless of registration) and your race number will be " + runnerNumber);
}