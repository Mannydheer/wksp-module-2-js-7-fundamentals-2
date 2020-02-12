//tic-tac-toe

//whenever there is a click, we want to check and comapre to these arrays for a winner.
//array.
const WIN = [
    'X', 'X', 'X',
    null, null, null,
    null, null, null,
    
]

const game = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8,
];



//create event listener for the each cell in board. 
const board = document.getElementById('board');
const player1 = document.getElementById('player-1')
const player2 = document.getElementById('player-2')

const PLAYER_1_ICON = 'X';
const PLAYER_2_ICON = 'O';
let COUNTER = 0;
//game starts with players:
let currentPlayer = '1';
player1.classList.add('active');

function win() {
    console.log(currentPlayer);
    board.removeEventListener('click', handleClick);
    alert(`Player ${currentPlayer} wins!`)
}

function verifyWin() {{}
    if (game[0] === game[1] && game[1] === game[2]){ win();}
    if (game[3] === game[4] && game[4] === game[5]){ win();}
    if (game[6] === game[7] && game[7] === game[8]){ win();}
   //columsn.
    if (game[1] === game[4] && game[4] === game[7]){ win();}
    if (game[2] === game[5] && game[5] === game[8]){ win();}
    if (game[3] === game[6] && game[6] === game[9]){ win();}
    //DIAGNOLS.
    if (game[0] === game[4] && game[4] === game[8]){ win();} 
    if (game[2] === game[4] && game[4] === game[6]){ win();}
   


}


function togglePlayer() {
    //if current is player is not 1, make it to, if not make it 1.
    //if this, then this, else that.
    //if 1 is true, do 2 else do 1. 
    currentPlayer = (currentPlayer === '1') ? '2' : '1';
    player1.classList.toggle('active');
    player2.classList.toggle('active');
}

function handleClick() {
    const cell = event.target.id;
    let cellId = cell.charAt(cell.length - 1)

    const currentCellDiv = document.getElementById(cell);
    if(typeof game[cellId] ===  'number') {
    document.getElementById(cell).innerHTML = (currentPlayer === "1") ? PLAYER_1_ICON : PLAYER_2_ICON
    //add value to game array
    game[cellId] = (currentPlayer === "1") ? PLAYER_1_ICON : PLAYER_2_ICON;
    COUNTER += 1;
    if (COUNTER < 9) {
        verifyWin()
        togglePlayer();
    } else {
        alert('DRAW!');
    }
  
    
}

board.addEventListener('click', handleClick);
//1. Make the board. 
    //1 board <div>
    //9 cells <div>
    // player 1 / player 2
    //indicate whos turn it is. 
//2. Cells need to be clickable. 
    //clicking adds a value. (x or o) to the cell.
    //** once there us a value, it can't be changed. */
//3. Clear the board (optional)
//4. 2 players.
    //Flag for current player. 
    //each player is assigned either 'x' or 'o'
//5. Create an array of current values;
    //refresh on each change. 
//6. create all win conditions
    //...

