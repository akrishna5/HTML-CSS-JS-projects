var quizdata = [
    {
        question : "Which framework is related to JS ?",
        a:'react',
        b:'flask',
        c:'.net',
        d:'django',
        correct : 'a'
    },

    {
        question : "Which is not a framework ?",
        a:'angular',
        b:'javascript',
        c:'django',
        d:'react',
        correct : 'b'
    },

    {
        question : "WCSS stands for ?",
        a:'Cascade Style Sheet',
        b:'Cascading Sheet Style',
        c:'Cascading Style Sheet',
        d:'None of them',
        correct : 'c'
    },

    {
        question : "Which is not a programming language ?",
        a:'python',
        b:'java',
        c:'js',
        d:'html',
        correct : 'd'
    }
]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')

var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentques = 0
var quizscore = 0

loadQuiz()

function loadQuiz()
{
    deselect()

    question.innerHTML = quizdata[currentques].question
    option_a.innerText = quizdata[currentques].a
    option_b.innerText = quizdata[currentques].b
    option_c.innerText = quizdata[currentques].c
    option_d.innerText = quizdata[currentques].d

}

function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click', ()=>{

    var selectedoption;

    answer.forEach(answer=>{

        if(answer.checked)
        {
            selectedoption=answer.id
        }
    })

    if(selectedoption==quizdata[currentques].correct)
    {
        quizscore=quizscore+1
    }
    currentques=currentques+1

    if(currentques==quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML=`<h1> You have answered ${quizscore} correctly out of ${quizdata.length}. </h1>`
    }
    else{
        loadQuiz()
    }
})