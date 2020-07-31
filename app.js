/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores
let roundscore
let activePlayer


let gamePlaying

init()

// get a random number form 1-6 and store it in dice
// dice = Math.floor(Math.random() * 6) + 1



// selects the current-0 id and changes the value we got from the dice
// current score is the id of the current score that the user will get 
// document.querySelector('#current-0').textContent = dice



// this will help us  select the score of the player just by changing the value of activeplayer variable-----> #current- 0 or 1 
// document.querySelector('#current-' + activePlayer).textContent = dice


// chnage the font to em
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// also works when reading the value
// let x = document.querySelector('#score-0').textContent;

// changing the css property using of dice image to none




// this event will fire everytime we click on ROLL DICE BUTTON
// 1. WHEN WE CLICK ON ROLL DICE ---> DICE WILL GET AN RANDOM NUMBER THEN
// 2.WE WILL SELECT THE CLASS -->.DICE NAD MAKE ITS DISPLAY BLOCK TO FELL THAT THE GAME IS STARTING FROM NEW END
// 3.THEM WE WILL CHNAGE THE DICE IMAGE BY-->  DiceDom.src = `dice-` + dice + `.png`
// 4.AFTER THAT IN A LOOP WE SAY IF THE DICE IS GREATER THAN ONE THEN ONLY PERFORM CODE BELOW
// 5. roundscore=roundscore+dice --> ROUNDSCORE=0+DICE----> WE WILL GET A RANDOM VALUE IN DICE EVERYTIME WE FIRE THE CLICK EVENT AND CLICK THE BUTTON ROLL-DICE SO BASICALLY FOR EXAMPLE --> ROUNDSCORE=ROUNDSCORE+DICE
//            0 = 0+6
//NOW THE ROUNDSCORR IS CHANGED TO 6
//    6=6+3(RANDOM VALUE WE GET FROM DICE)
// NOW TH ROUND SCORE IS CHANGED TO 9
// LIKWWISE THE EVENT WILL PERFORM


// if we encounter one in roll dice we will change the player to next player by writing the code // next player

// if(activePlayer === 0){
//     activePlayer = 1
// }
// else{
//     activePlayer = 0
// }

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // random number
        let dice = Math.floor(Math.random() * 6) + 1

        // display the result
        let DiceDom = document.querySelector('.dice')
        DiceDom.style.display = 'block'
        DiceDom.src = `dice-` + dice + `.png`

        // update the round score if the rolled number was not one
        if (dice !== 1) {
            // add score
            console.log(dice)
            roundscore += dice
            // console.log(roundscore)
            document.querySelector("#current-" + activePlayer).textContent = roundscore


        }
        else {
            // next player
            nextPlayer()


        }



    }

    // console.log(document.querySelector('.dice').src = `dice-`+ dice + `.png`)

    // document.querySelector("#current-0").innerHTML=dice
})

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundscore


        // update the ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]


        // check if the player won the game

        if (scores[activePlayer] >= 10) {
            document.querySelector('#name-' + activePlayer).textContent = 'winner!'
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            gamePlaying = false

        }
        else {
            nextPlayer()
        }

    }




})

function nextPlayer() {
    // next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;

    document.getElementById('current-0').textConten = '0';
    document.getElementById('current-1').textContent = '0';

    // to change the class of a player to know which player is active
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none'


}


document.querySelector('.btn-new').addEventListener('click', init)



function init() {
    scores = [0, 0]
    roundscore = 0
    activePlayer = 0;
    gamePlaying = true
    document.querySelector('.dice').style.display = 'none'
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player'
    document.getElementById('name-1').textContent = 'Player'
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');


    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');







}