const input = require('sync-input')

const words = ['python', 'java', 'swift', 'javascript'];

function getRandomWord(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index]
}

function game() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    let rand=getRandomWord(words);
    //let part=rand.substr(0,3);
   // console.log(rand);
    let len=rand.length;
    let h="";
    for (i=0;i<len;i++){ h="-"+h;}
    let ListI="";
    for (j=7;j>=0;j--) {
        console.log(`\n` + h);
        let checkInput = true;

        let userChoice="";
        while (checkInput) {
            userChoice= input(`Input a letter: `);
                if (userChoice.length!=1) {
                    console.log("Please, input a single letter.");
                    console.log(`\n` + h);
                    continue;
                }
                if (userChoice != userChoice.toLowerCase()){
                    console.log("Please, enter a lowercase letter from the English alphabet.");
                    console.log(`\n` + h);
                    continue;
                }

                if (alphabet.indexOf(userChoice)==-1){
                     console.log("Please, enter a lowercase letter from the English alphabet.");
                    console.log(`\n` + h);
                     continue;
                }


                if (ListI.indexOf(userChoice)>-1){
                    console.log("You've already guessed this letter.");
                    console.log(`\n` + h);
                   // console.log(`List is ${LaEistI}.`);
                    continue;
                }
               checkInput=false;
               ListI=ListI+userChoice;
        }
        let Frand= rand.indexOf(userChoice,0);
        if (Frand== -1)
            console.log(`That letter doesn't appear in the word.  // ${j} attempts`  );
        else {
            let Rrand= h.indexOf(userChoice,0);
            if (Rrand> -1)
                console.log(`No improvements.  // ${j} attempts`  );
            else
               j++;
        }

        while(Frand>-1){
            h=h.substr(0,Frand) + userChoice +h.substr (Frand+1,h.length-Frand)    ;
            Frand= rand.indexOf(userChoice,Frand+1);
            //console.log(h);
        }
        // console.log(h);j
        if (h === rand){
            break;}
    }
    if (h === rand){
        console.log(`\n` + h+`\nYou guessed the word ${h}!\nYou survived!`);
        won=won+1;
        }
    else {
        console.log(`\nYou lost!`);
        lost = lost + 1;
    }
         //console.log(h j
    // === rand ? `You guessed the word!\nYou survived!` : `You lost!`);
   // console.log('Thanks for playing!');
}

let CheckCommand=true;
let won=0;
let lost=0;
console.log(`H A N G M A N  // 8 attempts`);
while (CheckCommand) {

    const Command= input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: `);
    if (Command== "play") {
        game();
    }
    else if(Command== "results"){
        console.log(`You won: ${won} times.`);
        console.log(`You lost: ${lost} times.`);
    }
    else if(Command== "exit"){
        CheckCommand=false;
    }

}
