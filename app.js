const row = document.querySelector('.row');
const pic = document.querySelector('.question');
const yuris = ['Chaewon', 'Yena', 'Yuri', 'Others'];
let currentAnswer = '';
let currentQuestion = '';
// let sources=[]
let sources = [
    {
        question: 'chaewon1.jpg',
        answer: 'Chaewon'
    },
    {
        question: 'chaewon2.jpg',
        answer: 'Chaewon'
    },{
        question: 'chaewon3.jpg',
        answer: 'Chaewon'
    },{
        question: 'chaewon4.jpg',
        answer: 'Chaewon'
    },{
        question: 'chaewon5.jpg',
        answer: 'Chaewon'
    },{
        question: 'chaewon6.jpg',
        answer: 'Chaewon'
    },{
        question: 'chaewon7.jpg',
        answer: 'Chaewon'
    },
    {
        question: 'yena1.jpg',
        answer: 'Yena'
    },
    {
        question: 'yena2.jpg',
        answer: 'Yena'
    },{
        question: 'yena3.jpg',
        answer: 'Yena'
    },{
        question: 'yena4.jpg',
        answer: 'Yena'
    },{
        question: 'yena5.jpg',
        answer: 'Yena'
    },{
        question: 'yena6.jpg',
        answer: 'Yena'
    },{
        question: 'yena7.jpg',
        answer: 'Yena'
    }, {
        question: 'yuri1.jpg',
        answer: 'Yuri'
    }, {
        question: 'yuri2.jpg',
        answer: 'Yuri'
    }, {
        question: 'yuri3.jpg',
        answer: 'Yuri'
    }, {
        question: 'yuri4.jpg',
        answer: 'Yuri'
    }, {
        question: 'yuri5.jpg',
        answer: 'Yuri'
    }, {
        question: 'yuri6.jpg',
        answer: 'Yuri'
    }, {
        question: 'yuri7.jpg',
        answer: 'Yuri'
    },{
        question: 'other1.jpg',
        answer: 'Others'
    },{
        question: 'others2.jpg',
        answer: 'Others'
    },
];
function getData() {
    db.collection("GuessMe").doc().get().then((doc) => {
        if (doc.exists) {
            sources.push(doc.data());
        }
        console.log(sources)
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}


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

function changePic() {
    sources.sort(() => Math.random() - 0.5);
    currentQuestion = sources[0].question;
    pic.src = "./pic/" + currentQuestion;
    currentAnswer = sources[0].answer;
}

function init() {
    // getData();
    createButton();
    changePic()
}

window.addEventListener('DOMContentLoaded', init)