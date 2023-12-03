 function passwordgen(length, needed) {
  let newpassword = '';
  let uppercaseletters = 'ABCDEFGHILMNOPQRSTUVZ';
  let undercaseletters = 'abcdefghilmnopqrstuvz';
  let specialchar = '|!£$%&/()=?^*;:_#';
  let casenumber = '1234567890';
  let allChar = uppercaseletters + undercaseletters + specialchar + casenumber;

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allChar.length);
    let randomChar = allChar.charAt(randomIndex);

    newpassword += randomChar;
  }
  
  let newnewpassword=inserisciNeeded(newpassword, needed); 

  return newnewpassword;
  
}
function displayIt() {
  let passwordlength = document.getElementById('passwordlength').value;
  let needed = document.getElementById('passwordneeded').value; 
  if(passwordlength<needed.length){
		console.error("Error: you may choose a smaller needed!");
		let error = document.getElementById('newpassword'); 
		error.textContent = 'Sei un coglione, scegli una parola più piccola da inserire!'; 
		let resultContainer = document.getElementById('resultpassword-container');
		resultContainer.style.display = 'block'; 
  } else {
		let newpassword = passwordgen(passwordlength, needed);
		let passwordResult = document.getElementById('newpassword');
		passwordResult.textContent = newpassword;
		let resultContainer = document.getElementById('resultpassword-container');
		resultContainer.style.display = 'block'; 
  }
 
}

function inserisciNeeded(newpassword, needed){
	if(needed === '') {
	return newpassword; 
	}else {
			let strBecArrayNew=newpassword.split('');
	let strBeArrayNeeded=needed.split(''); 
	let randomIndex = Math.floor(Math.random()*(newpassword.length - needed.length));
	let passwordNeededLength = needed.length;
	for(i=randomIndex, j=0; j<passwordNeededLength; i++, j++){
		strBecArrayNew[i]=strBeArrayNeeded[j]; 
	}
	let newNewPassword =  strBecArrayNew.join(''); 
	return newNewPassword; 
	}
}
