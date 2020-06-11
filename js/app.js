const row = document.querySelector('.row');
const pic = document.querySelector('.question');
const yuris = ['Chaewon', 'Yena', 'Yuri', 'Others'];
let currentAnswer = '';
let currentQuestion = '';
let right = 0, wrong = 0;

function createButton() {
    yuris.sort(() => Math.random() - 0.5);
    row.innerHTML = "";
    for (let i = 0; i < yuris.length; i++) {
        let obj = createElement('button', 'option', yuris[i]);
        obj.addEventListener('click', function () { checkAnswer(yuris[i]) })
        row.appendChild(obj)
    }
}

function changePic() {
    sources.sort(() => Math.random() - 0.5);
    currentQuestion = sources[0].question;
    pic.src = "./pic/" + currentQuestion;
    currentAnswer = sources[0].answer;
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
    nextQuiz();
}

function nextQuiz() {
    if (sources.length) {
        init();
    } else {
        gameOver();
        return;
    }
}

function filterQuiz(currentQuestion) {
    sources = sources.filter(souce => {
        return souce.question !== currentQuestion
    })
}

function gameOver() {
    alert('遊戲結束,恭喜答對：' + right + ' 題，答錯：' + wrong + ' 題');
    window.location.reload();
}

function pause(){
    alert('您目前答對：' + right + ' 題，答錯：' + wrong + ' 題')
}

function init() {
    // getData();
    createButton();
    changePic()
}

window.addEventListener('DOMContentLoaded', init)