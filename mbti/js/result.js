import {results, mbtis} from './data.js'

const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbti)
const result = results[mbtis[mbti]]

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const lectureEl = document.querySelector('.lecture')
const lectureImgEl = document.querySelector('.lecture img')

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function(boxEl, index){
  //index 는 data.js의 results: 안에 배열로 된 4개의 문장들(0~3번째)를 출력 
  boxEl.innerHTML = result.results[index]
})
jobEls.forEach(function(jobEl, index){
  jobEl.innerHTML = result.jobs[index]
})
lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg