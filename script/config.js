function openPlayerConfig() {
  enableModal.style.display = "block";
  enableBackDrop.style.display = "block";
}

function closePlayerConfig() {
  enableModal.style.display = "none";
  enableBackDrop.style.display = "none";
}

function savePlayerConfig (event) {
  event.preventDefault();
  const formData = new FormData(event.target); // build in obejct blueprint
  const enterPlayerName = formData.get('playername').trim(); // '  ' -> '';

  //yeild falsey value if '' in bolean value;  enterPlayerName === '';
  if (!enterPlayerName ){
    event.target.firstElementChild.classList.add('error')
    errorOuputElement.textContent = 'Please enter a valid name!';
    return;
  } 


}