const row = document.querySelector('.row');
const pic = document.querySelector('.question');
const yuris = ['Chaewon', 'Yena', 'Yuri', 'Others'];
let currentAnswer = '';
let currentQuestion = '';
let souces = [{
    question: 'yena1.jpg',
    answer: 'Yena'
}, {
    question: 'yuri1.jpg',
    answer: 'Yuri'
}, {
    question: 'yuri2.jpg',
    answer: 'Yuri'
}];
let right = 0, wrong = 0;
function createElement(tag, className, text = "") {
    let obj = document.createElement(tag);
    obj.className = className;
    obj.textContent = text;
    return obj
}

function createButton() {
    yuris.sort(() => Math.random() - 0.5);
    row.innerHTML = "";
    for (let i = 0; i < yuris.length; i++) {
        let obj = createElement('button', 'option', yuris[i]);
        obj.addEventListener('click', function () { checkAnswer(yuris[i]) })
        row.appendChild(obj)
    }
}
function checkAnswer(name) {
    if (name === currentAnswer) {
        alert('Bingo');
        right++;
    } else {
        alert('wrong');
        wrong++;
    }
    filterQuiz(currentQuestion);
    if (souces.length) {
        init();
    } else {
        gameOver();
        return;
    }
}

function filterQuiz(currentQuestion) {
    souces = souces.filter(souce => {
        return souce.question !== currentQuestion
    })
}

function gameOver() {
    alert('遊戲結束,恭喜答對：' + right + ' 題，答錯：' + wrong + ' 題');
    window.location.reload();
}

function changePic() {
    souces.sort(() => Math.random() - 0.5);
    currentQuestion = souces[0].question;
    pic.src = "./pic/" + currentQuestion;
    currentAnswer = souces[0].answer;
}

function init() {
    createButton();
    changePic()
}

window.addEventListener('DOMContentLoaded', init)