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
        turns = [];
    })
}

const winningCombos = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    ['1','4','7'],
    ['2','5','8'],
    ['3','6','9'],
    ['1','5','9'],
    ['3','5','7'],
]

const winComb = [1,2,3];

let playerMarker = '';
let count = 2;


turnsX=[];
turnsO =[];


const resetBtn = document.getElementById('resetBtn');
const btns = document.querySelectorAll('.grid');
btns.forEach((button) => {
    button.addEventListener('click', () => {
        
        let numberX = button.getAttribute('id');
        let numberO = button.getAttribute('id');
        if(count % 2 ==0){
            playerMarker = 'X';
            turnsX.push(numberX);
            count++;
        } else if (count%2==1){
            playerMarker = 'O';
            turnsO.push(numberO);
            count++;
            
        }
        

        button.textContent = playerMarker;
        button.disabled = true;

        

    resetBtn.addEventListener('click', ()=>{
        turnsX = [];
        turnsO = [];
        count = 2;
        button.textContent = '';
        button.disabled = false;
    })
    })

    
});



// btns.forEach((button) =>{
//     button.addEventListener('click', ()=>{
//         let scoreX = 0;
//         console.log(numberX);
//         scoreX++
//     })
// })


// const btn1 = document.getElementById('1').textContent;
// const btn2 = document.getElementById('2').textContent;
// const btn3 = document.getElementById('3').textContent;
// const btn4 = document.getElementById('4');
// const btn5 = document.getElementById('5');
// const btn6 = document.getElementById('6');
// const btn7 = document.getElementById('7');
// const btn8 = document.getElementById('8');
// const btn9 = document.getElementById('9');



// let winner = winningCombos.some(r=> turnsX.includes(r));
// console.log(winner);


startGame();
closeGame();

