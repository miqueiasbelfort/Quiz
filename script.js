
const data = [ask1,ask2,ask3,ask4,ask5,ask6] //array com os objetos
//array com as respostas dos objetos
const answerData = [ask1.right, ask2.right, ask3.right, ask4.right, ask5.right, ask6.right] 

const next = document.getElementById("btnNext")
const quiz = document.querySelector(".quiz")
const answersNumbers = document.getElementById("answers")
const asksNumbers = document.getElementById("asks")
const quizContainer = document.querySelector(".quizContainer")
const textIntroducion = document.getElementById("textIntroducion")


let numId = 0 
answersNumbers.innerHTML = numId // numero de respostas = 0
asksNumbers.innerHTML = data.length // quantidade de perguntas
let rightAnswers = 0


function percorerBtn(answer, isTrue){
    answer.forEach(btns => { // percorendo as respostas
        
        if (btns.textContent != isTrue){ //as respostas que forem diferentes da repostas corretas
            btns.style.background = "red" // ficarão vermelhas
        } else {
            btns.style.background = "green" // a corretas ficara verder
        }
    })
    
}

function reloadPage(){
    window.location.reload() //função para reiniciar a pagina
}


next.addEventListener("click", function(){
   numId++
   next.innerHTML = "Próximo"
   textIntroducion.innerHTML = "Quando marcar a sua resposta clique em próximo para ir a outra pergunta!"

   //percorrndo o array com as perguntas e respostas
   data.forEach(e => {

        if (e.id == numId){ //se o id for igual ao numId 

            quiz.innerHTML = ` 
                <h2>${e.ask}</h2>
                <div class="answerBtn">
                    <button id="a" class="answer">${e.answer1}</button>
                    <button id="b" class="answer">${e.answer2}</button>
                    <button id="c" class="answer">${e.answer3}</button>
                    <button id="d" class="answer">${e.answer4}</button>
                </div>
            `

            const answer = document.querySelectorAll(".answer")

            answer.forEach(button => { //Percorendo as respostas 
                //Add um evento de click quando clicar em uma delas
                button.addEventListener("click", (elementButton) => {

                    if(elementButton.target.textContent == e.right){ //Se o conteudo dela for igual a resposta correta
                        rightAnswers++ //Somar mais pontos
                        button.style.background = "green"
                        
                    }else {
                        //callback
                        percorerBtn(answer, e.right)
                    }
                })
            })

        } else if (numId > data.length){ // se o numId for maior que o tamanha de data
            
            quiz.innerHTML = `
                Você acertou ${rightAnswers} de ${data.length} | 
                Porcentagem de ${Math.round(rightAnswers * 10 / data.length * 10)}%
            `
            textIntroducion.innerHTML = " "
            next.style.display = "none"
        }
    })

    answersNumbers.innerHTML = numId
    if (numId > data.length){
        answersNumbers.innerHTML = 0
        quizContainer.innerHTML += `
            <button class="btnNext" onclick="reloadPage()" >Reiniciar</button>
        `
    }
})