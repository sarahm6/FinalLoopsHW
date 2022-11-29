// Write a for loop that logs 0-15;
for (var i=0; i<= 15; i++ )
    console.log (i)
// Write a for loop that counts from 15-0
for (var i=15; i>= 0; i-- )
    console.log (i)
// Make variable laps = 0; write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.
let laps=0;
for (let laps = 0; laps <= 10; laps++) {
  console.log("That's another lap! " +laps)
}

// git add, commit, push
// Make variable age. Make a loop from 0-100. In every loop check if i == age, if so log something, else say “age doesn’t match”.
for (var i=0; i<=100; i++) {
  let age = 0;
  if (i== age) {
     console.log("Age matches");
  } else{
    console.log("Age doesn't match");
    }
  }

// Write a loop that logs all even numbers from 0-700.
for (var i=0; i<=700; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
// Write a loop that logs all odd numbers from 0-700.
for (var i = 0; i <= 700; i++) {
    if (i % 2 != 0) {
      console.log(i)
    }
  }
// Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and log when things were invented. For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”

for (var i = 1900; i< 1950; i++) {

  let inventionYear = i;
if (inventionYear > 1942) {
  console.log("it is 1943 - the slinky is invented!");
} else if (inventionYear <= 1942 && inventionYear >= 1938) {
  console.log("it is 1938 - the ballpoint pen is invented!");
} else if (inventionYear <= 1938 && inventionYear >= 1935) {
  console.log("it is 1935 - the radar is invented!");
} else if (inventionYear <= 1935 && inventionYear >= 1923) {
  console.log("it is 1923 - the traffic signal is invented!");
} else if (inventionYear <= 1923 && inventionYear >= 1918) {
  console.log("it is 1918 - the fortune cookie is invented!");
} else if (inventionYear <= 1918 && inventionYear >= 1913) {
  console.log("it is 1913 - the bra is invented!");
} else if (inventionYear <= 1913 && inventionYear >= 1910) {
  console.log("it is 1910 - the talking motion picture is invented!");
} else if (inventionYear <= 1910 && inventionYear >= 1902) {
  console.log("it is 1902 - the teddy bear is invented!");
} else {
  console.log("it is 1900 - the zeppelin is invented!");
}  
  console.log("");
}