let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let btn = document.querySelector('.btn')

function qosh() {
   let son1 = inp1.value
   let son2 = inp2.value
   let jovob = Number(son1) + Number(son2)
   btn.innerHTML = jovob
}




let inp3 = document.querySelector('.inp3')
let inp4 = document.querySelector('.inp4')
let btn1 = document.querySelector('.btn1')

function bolish() {
   let son3 = inp3.value
   let son4 = inp4.value
   let jovob = Number(son3) / Number(son4)
   btn1.innerHTML = jovob 
}

let inp5 = document.querySelector('.inp5')
let inp6 = document.querySelector('.inp6')
let btn3 = document.querySelector('.btn3')

function kopaytirish() {
   let son5 = inp5.value
   let son6 = inp6.value
   let jovob = Number(son5) * Number(son6)
   btn3.innerHTML = jovob
}


let inp7 = document.querySelector('.inp7')
let inp8 = document.querySelector('.inp8')
let btn4 = document.querySelector('.btn4')

function ayirish() {
   let son5 = inp7.value
   let son6 = inp8.value
   let jovob = Number(son5) - Number(son6)
   btn4.innerHTML = jovob
}