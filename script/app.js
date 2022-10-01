const enableModal = document.querySelector('#config-overlay');
const enableBackDrop = document.querySelector('#backdrop');
const formElement = document.querySelector('form');
const errorOuputElement = document.querySelector('#config-error');


const editPlayer1Btn = document.querySelector('#edit-play1-btn');
const editPlayer2Btn = document.querySelector('#edit-play2-btn');
const cancelModalBtn = document.querySelector('#cancel-confi-btn')

//listen to the click event occured on edit btn 1 and btn 2
editPlayer1Btn.addEventListener('click',openPlayerConfig);
editPlayer2Btn.addEventListener('click',openPlayerConfig);

//for user to close modal and backdrop if click on either cancel btn or backdrop background
cancelModalBtn.addEventListener('click',closePlayerConfig); 
enableBackDrop.addEventListener('click',closePlayerConfig); 

formElement.addEventListener('submit',savePlayerConfig);


