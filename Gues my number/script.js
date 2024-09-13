'use strict';

let random = Math.round(Math.random() * 20);
let score = 20;
let highscore = 0;
console.log(random);

// check button
document.querySelector('.check').addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value);

   // Player win
   if (guess === random){
      document.querySelector('body').style.backgroundColor = 'green';

      document.querySelector('.message').textContent = '🎉 YOU WIN!!';

      document.querySelector('.number').textContent = random;

      document.querySelector('.highscore').textContent = score;

      document.querySelector('.number').style.width = '30rem';

      if(score > highscore) highscore = score;

      document.querySelector('.highscore').textContent = highscore;
   
   // Score is to high
   }else if(guess !== random){
      if(score > 1){
         document.querySelector('.message').textContent = guess > random ? 'To High' : 'To Low';
         score--;
         document.querySelector('.score').textContent = score;
      }else{
         document.querySelector('.message').textContent = '💣 You lost the game!'
      } 
   }
   // else if(guess > random){
   //    if(score > 1){
   //       document.querySelector('.message').textContent = 'To High';
   //       score--;
   //       document.querySelector('.score').textContent = score;
   //    }else{
   //       document.querySelector('.message').textContent = '💣 You lost the game!'
   //    } 
   // // score is to low
   // }else{
   //    if(score > 1){
   //    document.querySelector('.message').textContent = 'To Low';
   //    score--;
   //    document.querySelector('.score').textContent = score;
   // }else{
   //    document.querySelector('.message').textContent = '💣 You lost the game!'
   // } 
   // }

   
});


// again button
document.querySelector('.again').addEventListener('click', function(){
   document.querySelector('body').style.backgroundColor = '#222';

   document.querySelector('.number').style.width = '15rem';

   document.querySelector('.number').textContent = '?';

   score = 20;

   random = Math.round(Math.random() * 20);

   console.log(random);

   document.querySelector('.score').textContent = score;

   document.querySelector('.message').textContent = 'Start guessing';

   document.querySelector('.guess').value = '';
   
});