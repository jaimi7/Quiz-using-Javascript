const quizDB = [
    {
        question: "Q1: What is a full form of HTML?",
        a: "Hypertext Machine Language",
        b: "Hyperlink Textual Mode Language",
        c: "Hypertext Merkup List",
        d: "Hypertext Markup Language", 
        ans: "ans4"
    },
    {
        question: "Q2: What is a full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Case Style Sheets",
        c: "Case Style Sheeting",
        d: "Cascading Styling Sheet",
        ans: "ans1"
    },
    {
        question: "Q3: What is a full form of JS?",
        a: "Java Scripted",
        b: "Java Scripting",
        c: "Java Styling",
        d: "JavaScript",
        ans: "ans4"
    },
    {
        question: "Q4: What is a full form of PHP?",
        a: "Hypertext Preprocessor",
        b: "Processor Hypertext",
        c: "Pre Hypertext Processo",
        d: "Hypertext Processor",
        ans: "ans1"
    },
    {
        question: "Q5: What is a full form of WWW?",
        a: "Wide wall Web",
        b: "World Wide Web",
        c: "Web Wide Wave",
        d: "Wild Wacky Walter",
        ans: "ans2"
    },
    {
        question: "Q6: What is a full form of HTTP?",
        a: "Hypertext Transform Prototype",
        b: "Hypertext Transfer Prototype",
        c: "Hypertext Transfer Protocol",
        d: "Hypertext Transform Protocol",
        ans: "ans3"
    },
    {
        question: "Q7: What is a full form of CMS?",
        a: "Content Management System",
        b: "Creative Management System",
        c: "Content Mixing System",
        d: "Creative Managerial Syatem",
        ans: "ans1"
    },
    {
        question: "Q8: What is a full form of UI?",
        a: "Unidentified Intelligence",
        b: "Under Investigation",
        c: "User Interface",
        d: "Ultimate Internet",
        ans: "ans3"
    },
    {
        question: "Q9: What is a full form of SEO?",
        a: "Search Engineer Optimization",
        b: "Search Engine Optimization",
        c: "Search Engineer Optimize",
        d: "Search Engine Optimizating",
        ans: "ans2"
    },
    {
        question: "Q10: What is a full form of DOM?",
        a: "Document Object Modual",
        b: "Document Object Modal",
        c: "Document Objective Modal",
        d: "Documention Object Modal",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const result = document.querySelector('#result');

let score = 0;

let questionCount = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((currentElement) => {
        if (currentElement.checked) {
            answer = currentElement.id;
        }
    });
    return answer;
};

const deSelect=()=>{
    answers.forEach((currentElement)=>{
        currentElement.checked=false
    });
}

submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();

    if (checkAnswer == quizDB[questionCount].ans) {
        score++;
    };

    deSelect();

    questionCount++;
    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        result.innerHTML =`
            <h3>Your scored ${score}/${quizDB.length} . </h3>
            <button class="btn" onclick="location.reload()">Play Again!</button>
        `;
        result.classList.remove('score');
    }
});