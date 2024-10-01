'use strict';

const modal = document.querySelector('.uploud');
const overlay = document.querySelector('.overlay');
const post = document.querySelector('.post button');

const btnclosemodal = document.querySelector('.close-modal');


const openmodal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closemodal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden');
}

document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key == 'Escape' && !modal.classList.contains('hidden')){
        closemodal()
    };
})

post.addEventListener('click', openmodal)

btnclosemodal.addEventListener('click', closemodal);

overlay.addEventListener('click', closemodal);

