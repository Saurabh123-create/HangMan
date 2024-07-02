    let alphabets = document.querySelector(".alphabets");
    let currQuestion = document.querySelector(".Questions");
    let keepcount = document.querySelector(".keepcount");
    let totalcount = document.querySelector(".totalcount");
    let AnswerBox = document.querySelector(".AnswerBox");
    let canvas = document.querySelector(".canvas");
    let guess = document.querySelector(".guess");
    let letters = document.getElementsByClassName("letter");

    let letterArray = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
    let falseAnswer = 0;
    let totalAnswer = 4;
    let questionBank = {
      question_1: {
        Q: "Hint : Which is the largest planet in solar system",
        A: "Saturn",
      },
    };

    keepcount.innerHTML = falseAnswer;
    totalcount.innerHTML = totalAnswer;
    currQuestion.innerHTML = questionBank.question_1.Q;

    for (let j = 0; j < questionBank.question_1.A.length; j++) {
      let element = document.createElement("div");
      element.classList.add("letter");
      AnswerBox.appendChild(element);
    }

    for (let i = 0; i < 26; i++) {
        let element = document.createElement("div");
            element.innerHTML = letterArray[i];
            element.classList.add("alpha");
            
            element.addEventListener("click", () => {
                getValue(letterArray[i]);
            });
            alphabets.appendChild(element);
    }

    function getValue(value) {
      let ques = questionBank.question_1.A.toUpperCase();
      if (ques.includes(value)) {
        let arr = [];

        let indexes = ques.split("").map((item, index) => {
          if (item == value) arr.push(index);
        });

        for (let i = 0; i < arr.length; i++) {
          letters[arr[i]].innerHTML = value;
        }
        for(let i = 0 ; i<alphabets.children.length ; i++){
            if(alphabets.children[i].innerHTML == value){
                alphabets.children[i].style.background = '#E7F0DC';
            }
        }

      } else if (falseAnswer != totalAnswer) {
        falseAnswer += 1;
        keepcount.innerHTML = falseAnswer;
        if (falseAnswer == 1) canvas.firstElementChild.style.display = "block";
        if (falseAnswer == 3) canvas.lastElementChild.style.display = "block";
        if (falseAnswer == 4)
          canvas.firstElementChild.nextElementSibling.style.cssText +=
            "display :block; background : red";
        if (falseAnswer == 2)
          canvas.lastElementChild.previousElementSibling.style.display =
            "block";
      }
      if (falseAnswer == totalAnswer) {
        setTimeout(() => {
          guess.innerHTML = "You failed !";
        }, 600);
      }
    }