let gameseq=[];
let userseq=[];
let start=false;
let level=0;
let highScore=0;
let color=["red","green","blue","yellow"];//this array is given accoding to your class and id that youu want to matach to create random flash
// let color=["red","green","blue","yellow"]

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");


// start the game
document.addEventListener("keypress",function(){    
    if(start==false){
        console.log("Game is started...");
        start=true;
        levelUp();
    }
})

// computer flash button
function computerFlash(div){
 div.classList.add("flash");

 setTimeout(function(){
    div.classList.remove("flash");
 },250);
}

//user flash
function userflashUp(div){
 div.classList.add("userflash");

 setTimeout(function(){
    div.classList.remove("userflash");
 },250);
}


//level up 
function levelUp(){
    userseq=[];//when level is up then user is reset.
    level++;
    h2.innerText=`level ${level}`;

    //random flash is generate by computer
    let randInx=Math.floor(Math.random()*3);
    let randcolor=color[randInx];
    //let randdiv=document.querySelector(`#${randcolor}`);//it match the random flas in a div,if we used id
    let randdiv=document.querySelector(`.${randcolor}`);//by using class

    gameseq.push(randcolor);//adding the color in a array that are generate by a computer
    console.log(gameseq)
    computerFlash (randdiv);
}

function checkans(idx){
    if(gameseq[idx]===userseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelUp,800)
        }
    }else{
        if(level>highScore){
            highScore=level;
            h3.innerHTML=`Your High Score is <b>:${highScore} </b>`;
        }
        h2.innerHTML=`Game is over! Your score was <b>${level}</b> <br/> Press any key to start...` ;
        reset();// reset the game 
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200)
    }
}

function btnPress(){
    // console.log(this)
    let key=this;
    userflashUp(key);

    userColor=key.getAttribute("id");//getting the color from the user id
    userseq.push(userColor);

    checkans(userseq.length-1);

}

let allbtns= document.querySelectorAll(".div");
for(btn of allbtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;

}