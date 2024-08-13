
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent =13;
document.querySelector('.score').textContent =10;
  document.querySelector('.guess').value =23;*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore=0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // no hay entrada de numero
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';

        // cuando el jugador gana
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score>highScore) {
            highScore=score
        }
        document.querySelector('.highscore').textContent = highScore;
        //numero alto
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game, Loser!'
            document.querySelector('.score').textContent = 0;
        }

        // numero bajo
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game, Loser!'
            document.querySelector('.score').textContent = 0;
        }
    }


});
document.querySelector('.again').addEventListener('click', function () {
    score = 20    
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Starting guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})