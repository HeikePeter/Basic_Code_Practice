let raceNumber = Math.floor(Math.random() * 1000);
const regisEarly = false;
const runnerAge = 34;
if (runnerAge > 18 && regisEarly === true) {
  raceNumber += 1000;
}
if (runnerAge > 18 && regisEarly === true) {
  console.log(`Your race will be begin at 09:30 and your racenumber is ${raceNumber}`);
} else if (runnerAge > 18 && !regisEarly){
  console.log(`Your race will begin at 11:00 and your racenumber is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Your race will begin at 12:30 and your racenumber is ${raceNumber}`);
} else {
  console.log('Please head to the registration desk')
}
