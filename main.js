let count = 0;
let cells = document.querySelectorAll('#field td');
let header = document.getElementById('header');

function isVictory(){
	let combos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]
	for(let combo of combos){
		if(cells[combo[0]].innerHTML == cells[combo[1]].innerHTML && cells[combo   [1]].innerHTML == cells[combo[2]].innerHTML && cells[combo[0]].innerHTML != ''){
			return true
		}
	}
	return false
}

function tap(event){
	if(count % 2 == 0) {
		event.target.innerHTML = '<img src="close.png" width=100>';
}
else {
		event.target.innerHTML = '<img src="circle.png" width=100>';
}

if(isVictory()){
	for(let cell of cells){
		cell.removeEventListener('click', tap)
	}
	if(count % 2 == 0){
			header.innerText = 'X is winner'
	}
	else{
		header.innerText = 'O is winner'
	}
	
}
else if(count == 8){
		header.innerText = 'Draw!'
	}
	count++;
	event.target.removeEventListener('click', tap)
};

function startGame() {
	header.innerText = 'Tic Tac Toe';
	count = 0;
	for (let cell of cells) {
			cell.innerHTML = '';
			cell.addEventListener('click', tap);
	}
}
startGame();