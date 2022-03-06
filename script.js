const ask1 = {
    id: 1,
    ask: "Onde fica o Rio?",
    answer1: "Brazil",
    answer2: "USA",
    answer3: "UK",
    answer4: "Mexico",
    right: "Brazil"
}
const ask2 = {
    id: 2,
    ask: "Onde Fica Tokyo?",
    answer1: "Brazil",
    answer2: "Japão",
    answer3: "Argentina",
    answer4: "Portugal",
    right: "Japão"
}
const ask3 = {
    id: 3,
    ask: "Quanto é 1 + 2?",
    answer1: "2",
    answer2: "5",
    answer3: "3",
    answer4: "1",
    right: "3"
}
const ask4 = {
    id: 4,
    ask: "Qual pais desses esta em guerra contra a Russia?",
    answer1: "Ukrania",
    answer2: "USA",
    answer3: "Brazil",
    answer4: "Venezuela",
    right: "Ukrania"
}
const ask5 = {
    id: 5,
    ask: "Quanto é 5 + 3?",
    answer1: "8",
    answer2: "5",
    answer3: "10",
    answer4: "3",
    right: "8"
}

const ask6 = {
    id: 6,
    ask: "Em que ano começou a 2º Guerra Mundial?",
    answer1: "1945",
    answer2: "1939",
    answer3: "1891",
    answer4: "1925",
    right: "1939"
}

const data = [ask1,ask2,ask3,ask4,ask5,ask6]

const next = document.getElementById("btnNext")
const quiz = document.querySelector(".quiz")
const answersNumbers = document.getElementById("answers")
const asksNumbers = document.getElementById("asks")


let numId = 0
answersNumbers.innerHTML = numId
asksNumbers.innerHTML = data.length


next.addEventListener("click", function(){
   numId++
   
   data.forEach(e => {

        if (e.id == numId){ //se o id for igual ao numId 

            quiz.innerHTML = ` 
                <h2>${e.ask}</h2>
                <div class="answerBtn">
                    <button onClick="validarA()" id="a" class="answer">${e.answer1}</button>
                    <button onClick="validarB()" id="b" class="answer">${e.answer2}</button>
                    <button onClick="validarC()" id="c" class="answer">${e.answer3}</button>
                    <button onClick="validarD()" id="d" class="answer">${e.answer4}</button>
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
const validarA = () => {
    const answerA = document.getElementById("a")
    console.log(answerA.textContent)
    if (answerA.textContent == ask1.right){
        alert("Certa a resposta!")
    } else{
        alert("Resposta errada!")
    }
}