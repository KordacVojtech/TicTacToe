const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');

const winnerMess = document.getElementById('winner');

let count = 2;
let playerMarker = '';


let score = ['','','','','','','','','']



btn1.addEventListener('click', ()=>{
    if(count % 2 ==0){
        playerMarker = 'X';
        count++;
    } else if (count%2==1){
        playerMarker = 'O';
        count++;
    }

    btn1.textContent = playerMarker;
    score[0]=btn1.textContent;
    btn1.disabled = true;
})

btn2.addEventListener('click', ()=>{
    if(count % 2 ==0){
        playerMarker = 'X';
        count++;
    } else if (count%2==1){
        playerMarker = 'O';
        count++;
    }

    btn2.textContent = playerMarker;
    score[1]=btn2.textContent;
    btn2.disabled = true;
})

btn3.addEventListener('click', ()=>{
    if(count % 2 ==0){
        playerMarker = 'X';
        count++;
    } else if (count%2==1){
        playerMarker = 'O';
        count++;
    }

    btn3.textContent = playerMarker;
    score[2]=btn3.textContent;
    btn3.disabled = true;
})


btn4.addEventListener('click', ()=>{
    if(count % 2 ==0){
        playerMarker = 'X';
        count++;
    } else if (count%2==1){
        playerMarker = 'O';
        count++;
    }

    btn4.textContent = playerMarker;
    score[3]=btn4.textContent;
    btn4.disabled = true;
})

btn5.addEventListener('click', ()=>{
    if(count % 2 ==0){
        playerMarker = 'X';
        count++;
    } else if (count%2==1){
        playerMarker = 'O';
        count++;
    }

    btn5.textContent = playerMarker;
    score[4]=btn5.textContent;
    btn5.disabled = true;
})

btn6.addEventListener('click', ()=>{
    if(count % 2 ==0){
        playerMarker = 'X';
        count++;
    } else if (count%2==1){
        playerMarker = 'O';
        count++;
    }

    btn6.textContent = playerMarker;
    score[5]=btn6.textContent;
    btn6.disabled = true;
})

btn7.addEventListener('click', ()=>{
    if(count % 2 ==0){
        playerMarker = 'X';
        count++;
    } else if (count%2==1){
        playerMarker = 'O';
        count++;
    }

    btn7.textContent = playerMarker;
    score[6]=btn7.textContent;
    btn7.disabled = true;
})

btn8.addEventListener('click', ()=>{
    if(count % 2 ==0){
        playerMarker = 'X';
        count++;
    } else if (count%2==1){
        playerMarker = 'O';
        count++;
    }

    btn8.textContent = playerMarker;
    score[7]=btn8.textContent;
    btn8.disabled = true;
})

btn9.addEventListener('click', ()=>{
    if(count % 2 ==0){
        playerMarker = 'X';
        count++;
    } else if (count%2==1){
        playerMarker = 'O';
        count++;
    }

    btn9.textContent = playerMarker;
    score[8]=btn9.textContent;
    btn9.disabled = true;
})

function startGame(){
    const startGameBtn = document.getElementById('startBtn');
    const playArea = document.getElementById('playArea');
    startGameBtn.addEventListener('click', ()=>{
        playArea.style.display = 'grid';
    })
}

function closeGame(){
    const closeGameBtn = document.getElementById('closeBtn');
    const playArea = document.getElementById('playArea');
    closeGameBtn.addEventListener('click', ()=>{
        playArea.style.display = 'none';
    })
}

function reset(){
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', ()=>{
        btn1.textContent = '';
        btn1.disabled = false;
        count = 2;

        btn2.textContent = '';
        btn2.disabled = false;
        count = 2;

        btn3.textContent = '';
        btn3.disabled = false;
        count = 2;

        btn4.textContent = '';
        btn4.disabled = false;
        count = 2;

        btn5.textContent = '';
        btn5.disabled = false;
        count = 2;

        btn6.textContent = '';
        btn6.disabled = false;
        count = 2;

        btn7.textContent = '';
        btn7.disabled = false;
        count = 2;

        btn8.textContent = '';
        btn8.disabled = false;
        count = 2;

        btn9.textContent = '';
        btn9.disabled = false;
        count = 2;

        winnerMess.style.display = 'none';
        score = ['','','','','','','','','']
    }
)}

const winningCombos = [
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['0','4','8'],
    ['2','4','6'],
]

const winningMess = document.getElementById('winner');
let internalCount = 0;
const btns = document.querySelectorAll('.grid');
btns.forEach((button) =>{
    button.addEventListener('click', ()=>{
        internalCount++;
        console.log(internalCount);
        if(score[0] === 'X' && score[1] === 'X' && score[2]==='X'){
            winnerMess.textContent = 'X is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[0] === 'O' && score[1] === 'O' && score[2]==='O'){
            winnerMess.textContent = 'O is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[3] === 'X' && score[4] === 'X' && score[5]==='X'){
            winnerMess.textContent = 'X is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[3] === 'O' && score[4] === 'O' && score[5]==='O'){
            winnerMess.textContent = 'O is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[6] === 'X' && score[7] === 'X' && score[8]==='X'){
            winnerMess.textContent = 'X is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[6] === 'O' && score[7] === 'O' && score[8]==='O'){
            winnerMess.textContent = 'O is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[0] === 'X' && score[3] === 'X' && score[6]==='X'){
            winnerMess.textContent = 'X is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[0] === 'O' && score[3] === 'O' && score[6]==='O'){
            winnerMess.textContent = 'O is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[1] === 'X' && score[4] === 'X' && score[7]==='X'){
            winnerMess.textContent = 'X is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[1] === 'O' && score[4] === 'O' && score[7]==='O'){
            winnerMess.textContent = 'O is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[2] === 'X' && score[5] === 'X' && score[8]==='X'){
            winnerMess.textContent = 'X is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[2] === 'O' && score[5] === 'O' && score[8]==='O'){
            winnerMess.textContent = 'O is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[0] === 'X' && score[4] === 'X' && score[8]==='X'){
            winnerMess.textContent = 'X is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[0] === 'O' && score[4] === 'O' && score[8]==='O'){
            winnerMess.textContent = 'O is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[2] === 'X' && score[4] === 'X' && score[6]==='X'){
            winnerMess.textContent = 'X is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (score[2] === 'O' && score[4] === 'O' && score[6]==='O'){
            winnerMess.textContent = 'O is the winner!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        } else if (internalCount == 9){
            winnerMess.textContent = 'It is a tie!';
            score = ['','','','','','','','',''];
            winnerMess.style.display = 'block';
            internalCount = 0;
        }
    })
})


reset();
startGame();
closeGame();