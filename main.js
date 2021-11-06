var body = document.getElementById("body");
var modalRules = document.getElementById("modal");
var btnRules = document.getElementById("btn-rules");
var closeModal = document.getElementsByClassName("close")[0];

var rockPaperSciss = document.getElementById("rock-paper-sciss");
var rockMain = document.getElementById("rock-main");
var scissorsMain = document.getElementById("scissors-main");
var paperMain = document.getElementById("paper-main");

var pickedFinish = document.getElementById("picked-finish");
var housePickedArray = new Array("images/icon-paper.svg","images/icon-rock.svg","images/icon-scissors.svg");
var pickedImg1 = document.getElementById("picked-img1");
var pickedImg2 = document.getElementById("picked-img2");
var pickedDiv1 = document.getElementById("you-picked-img");
var pickedDiv2 = document.getElementById("house-picked-img");
var playAgain = document.getElementById("play-again");
var youResult = document.getElementById("you-result");
var i = 0;
var score = document.getElementById("score");
var x = window.matchMedia("(max-width: 850px)")

btnRules.addEventListener("click",function(){
    modal.style.display = "flex";
});

closeModal.addEventListener("click",function(){
  modal.style.display = "none";
});

window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

rockMain.addEventListener("click",function(){
  rockPaperSciss.style.display = "none";
  pickedFinish.style.display = "flex";
  pickedImg1.src.match("images/icon-rock.svg");
  pickedImg1.src = "images/icon-rock.svg";
  pickedDiv1.style.borderColor = "#DB2E4D";
  choosePic();
  // setDiv1();
  setDiv2();
  resultText();
})

scissorsMain.addEventListener("click",function(){
  rockPaperSciss.style.display = "none";
  pickedFinish.style.display = "flex";
  pickedImg1.src.match("images/icon-scissors.svg");
  pickedImg1.src = "images/icon-scissors.svg";
  choosePic();
  // setDiv1();
  setDiv2();
  resultText();
  pickedDiv1.style.borderColor = "#EB9F0E";
})

paperMain.addEventListener("click",function(){
  rockPaperSciss.style.display = "none";
  pickedFinish.style.display = "flex";
  pickedImg1.src.match("images/icon-paper.svg");
  pickedImg1.src = "images/icon-paper.svg";
  pickedDiv1.style.borderColor = "#4664F4";
  choosePic();
  // setDiv1();
  setDiv2();
  resultText();
})

playAgain.addEventListener("click",function(){
  rockPaperSciss.style.display = "flex";
  pickedFinish.style.display = "none";
})

function choosePic() {
    var randomNum = Math.floor(Math.random() * housePickedArray.length);
    pickedImg2.src = housePickedArray[randomNum];
}

function setDiv2(){
  if(pickedImg2.src.match("images/icon-paper.svg")){
    pickedDiv2.style.borderColor = "#4664F4";
    // pickedDiv2.style.boxShadow = "inset 0px 12px 0px #BABFD4, 0px 12px 0px #2a45c2";
  }
  else if(pickedImg2.src.match("images/icon-scissors.svg")){
    pickedDiv2.style.borderColor = "#EB9F0E";
    // pickedDiv2.style.boxShadow = "inset 0px 1rem 0px #BABFD4, 0px 1rem 0px #C76C1B";
  }
  else{
    pickedDiv2.style.borderColor = "#DB2E4D";
    // pickedDiv2.style.boxShadow = "inset 0px 1rem 0px #BABFD4, 0px 1rem 0px #9D1634";
  }
}
// function setDiv1(){
//   if(pickedImg1.src.match("images/icon-paper.svg")){
//     pickedDiv1.style.boxShadow = "inset 0px 12px 0px #BABFD4, 0px 12px 0px #2a45c2";
//   }
//   else if(pickedImg2.src.match("images/icon-scissors.svg")){
//     pickedDiv1.style.boxShadow = "inset 0px 12px 0px #BABFD4, 0px 12px 0px #C76C1B";
//   }
//   else{
//     pickedDiv1.style.boxShadow = "inset 0px 12px 0px #BABFD4, 0px 12px 0px #9D1634";
//   }
// }

function resultText(){
  if((pickedImg1.src.match("images/icon-paper.svg") && pickedImg2.src.match("images/icon-rock.svg")) || 
  (pickedImg1.src.match("images/icon-scissors.svg") && pickedImg2.src.match("images/icon-paper.svg")) ||
  (pickedImg1.src.match("images/icon-rock.svg") && pickedImg2.src.match("images/icon-scissors.svg"))){
        youResult.innerHTML = "YOU WIN";
        i++;
  }
  else if((pickedImg1.src.match("images/icon-paper.svg") && pickedImg2.src.match("images/icon-paper.svg")) || 
  (pickedImg1.src.match("images/icon-scissors.svg") && pickedImg2.src.match("images/icon-scissors.svg")) ||
  (pickedImg1.src.match("images/icon-rock.svg") && pickedImg2.src.match("images/icon-rock.svg"))){
        youResult.innerHTML = "DRAW";
  }
  else{
    youResult.innerHTML = "YOU LOSE";
    i--;
  }
  score.innerHTML = i;
}