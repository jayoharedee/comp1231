// remember the developer tools? open the "console" tab and have a look
// at what's there. the console.log you see below allows us to print info
// out to the console
console.log("it works! BUT MAKE SURE YOU RENAME THE FILE HERE AND UPDATE THE HTML SCRIPT TAG");

let seconds = new Date().getSeconds()
let randomBoolean = Math.random() >= 0.5

if (randomBoolean) {
  console.log(seconds)
  let minutes = new Date().getMinutes()
  console.log(minutes)
  let hours = new Date().getHours()
  console.log(hours)
  console.log(
    `It's ${hours} hours passed 12 AM.
    It's ${minutes} minutes passed ${hours}
    There is ${seconds} passed the minute`
  )

  let time = `${hours}:${minutes}:${seconds}`

  console.log(`The time is ${time}`)
} else {
  let randomNumber = Math.floor(Math.random() * 100)

  if (randomNumber <= 25) {
    console.log(`The number generated was ${randomNumber}`)
  } else if (randomNumber > 50 && randomNumber < 99) {
    console.log(`The number generated was ${randomNumber}`)
  }
}

