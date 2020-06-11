function createElement(tag, className, text = "") {
    let obj = document.createElement(tag);
    obj.className = className;
    obj.textContent = text;
    return obj
}

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
        question: 'others1.jpg',
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
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}