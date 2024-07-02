gameSequence = [];
userSequence = [];

let started = false;
let level = 0;

let btns = ["red", "yellow", "green", "purple"];

let h2 = document.querySelector("h2");

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    level++;
    userSequence = [];
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    

    let randbtn = document.querySelector(`.${randColor}`);
    gameSequence.push(randColor);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);

    console.log(gameSequence);

    btnFlash(randbtn);
}

function checkSequence(idx) {
    if (userSequence[idx] === gameSequence[idx]) {
        if (userSequence.length == gameSequence.length) {
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerText = `Game Over! Your score was ${level}. Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 700);
        reset();
    }
}

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started.");
        started = true;

        levelUp();
    }
});

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSequence.push(userColor);

    checkSequence(userSequence.length - 1);
}

let allbtn = document.querySelectorAll(".btn");

for (let btn of allbtn) {
    btn.addEventListener("click", btnPress);
}

function reset (){
    started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}
