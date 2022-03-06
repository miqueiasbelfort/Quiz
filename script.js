const data = [
    {
        id: 1,
        ask: "Onde fica o Rio?",
        answer1: "Brazil",
        answer2: "USA",
        answer3: "UK",
        answer4: "Mexico",
        right: "Brazil"
    },
    {
        id: 2,
        ask: "Onde Fica Tokyo",
        answer1: "Brazil",
        answer2: "Japão",
        answer3: "Argentina",
        answer4: "Portugal",
        right: "Japão"
    },
    {
        id: 3,
        ask: "Quanto é 1 + 2?",
        answer1: "2",
        answer2: "5",
        answer3: "3",
        answer4: "1",
        right: "3"
    },
    {
        id: 4,
        ask: "Qual pais desses esta em guerra?",
        answer1: "Ukrania",
        answer2: "USA",
        answer3: "Brazil",
        answer4: "Venezuela",
        right: "Ukrania"
    },
    {
        id: 5,
        ask: "Quanto é 5 + 3?",
        answer1: "8",
        answer2: "5",
        answer3: "10",
        answer4: "3",
        right: "8"
    },
    {
        id: 6,
        ask: "Em que ano começou a 2º Guerra Mundial?",
        answer1: "1945",
        answer2: "1939",
        answer3: "1891",
        answer4: "1925",
        right: "1939"
    }
]

const next = document.getElementById("btnNext")
const quiz = document.querySelector(".quiz")
const answersNumbers = document.getElementById("answers")
const asksNumbers = document.getElementById("asks")
//const sizeAsks = document.getElementById("sizeAsks")

const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")

let numId = 0
answersNumbers.innerHTML = numId
asksNumbers.innerHTML = data.length

const validate = () => {
    alert("Clicou em uma resposta!")
}

next.addEventListener("click", function(){
   numId = numId + 1
   
   data.forEach(e => {

        if (e.id == numId){ //se o id for igual ao numId 

            quiz.innerHTML = ` 
                <h2>${e.ask}</h2>
                <div class="answerBtn">
                    <span onclick="validate()" id="a" class="answer">${e.answer1}</span>
                    <span onclick="validate()" id="a" class="answer">${e.answer2}</span>
                    <span onclick="validate()" id="a" class="answer">${e.answer3}</span>
                    <span onclick="validate()" id="a" class="answer">${e.answer4}</span>
                </div>
            `

        } else if (numId > data.length){ // se o numId for maior que o tamanha de data
            quiz.innerHTML = "fished"
            
        }
    
    })
    answersNumbers.innerHTML = numId
    if (numId > data.length){
        answersNumbers.innerHTML = 0
    }
})
