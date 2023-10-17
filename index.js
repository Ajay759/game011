let Secretnumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".q").value = Secretnumber;

let scorevalue = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".empty").value);
  console.log(guess);
  
  if (scorevalue > 0) {
    if (!guess) {
      document.querySelector(".corr").textContent = "nka no. kottale..shii..🤣";
    } 
    else if (guess === Secretnumber) {
      document.querySelector(".corr").textContent =
        "gelchinav poo..(Dhawath🥳)";
      document.querySelector("body").style.backgroundColor = "lightgreen";
      document.querySelector(".q").style.width = "130px";
    }
    if (scorevalue > highscore) {
      highscore = scorevalue;
      document.querySelector(".hscore").textContent = highscore;
    } else if (guess < Secretnumber) {
      document.querySelector(".corr").textContent =
        "kottina no. takkuva undi koncham akkuva kottu 🥶";
      scorevalue--;
      document.querySelector(".score").textContent = scorevalue;
    }
    else if (guess > Secretnumber) {
      document.querySelector(".corr").textContent =
        "kottina no. akkuva undi koncham thakkuva kottu 🥵";
      scorevalue--;
      document.querySelector(".score").textContent = scorevalue;
    }
}
else {
      document.querySelector(".corr").textContent = "mg..again othi mallaadu😇";
      document.querySelector(".score").textContent = 0;
    }
  
});

// reset buton again
document.querySelector(".again").addEventListener("click", function () {
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  scorevalue = 20;
  document.querySelector(".score").textContent = scorevalue;
  document.querySelector(".corr").textContent = "start chey beyy..!";
  document.querySelector(".q").style.width = "90px";
  document.querySelector(".q").value = "?";
  document.querySelector("body").style.backgroundColor = "rgb(220, 197, 197)";
  document.querySelector(".empty").value = "";
});
