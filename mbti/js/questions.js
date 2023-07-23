// data.js 에서 export const questions 부분을 가져온다.
import {questions} from './data.js'

const progressValuEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''

function renderQuestion(){
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number 
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValuEl.style.width = (currentNumber +1) * 10 + '%'
}
function nextQuestion(choiceNumber){
  if(currentNumber === questions.length -1){ 
    //length: 데이터 갯수, questions에 들어있는 데이터의 갯수를 불러옴
    //length만 보면 데이터수는 10개이나 코드는 9여야 실행되기 때문에 -1을 해줌
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  //mbti는 원래 ''(공백) = 공백 + 하단 각 choiceEl들을 통해 선택한 것의 data.js의 value부분이 추가됨
  //ex) mbti = 'i' + 's' + ...
  currentNumber = currentNumber + 1
  renderQuestion()
}
function showResultPage(){
  location.href = '/results.html?mbti=' + mbti //쿼리스트링 방식
}

choice1El.addEventListener('click',function(){
  nextQuestion(0)
})
choice2El.addEventListener('click',function(){
  nextQuestion(1)
})


renderQuestion()