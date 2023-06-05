// const cards= document.getElementsByClassName('card-body')
// const contairnerCards= document.querySelectorAll('.btn.card')
// console.log(cards)
// console.log(contairnerCards)
//   VARIABLES
const precioTicket= 200
const categorias ={
    a:{percent:80, value:'0'},
    b:{percent:50, value:'1'},
    c:{percent:15, value:'2'}
}
const totaltext= 'Total a pagar: $'

let categoria = null
let tickets= null
let totalFinal = null

// DOM
const form = document.forms.formulario

const inputs= form.getElementsByTagName('input')
const select= form.getElementsByTagName('select')

const total= document.getElementById('total')

const resetBtn= document.getElementById('reset')
const resumenBtn= document.getElementById('resumen')

total.innerText= totaltext

const totalPrice =()=>{
    const totalValue= precioTicket * tickets
   
    const descuento= (totalValue/100) * categorias[categoria].percent
    totalFinal= totalValue - descuento

total.innerText= totaltext + totalFinal
}


// EVENTOS

const resetCategorias=() => {
    totalFinal=null
    selected=null
   
    total.innerText= totaltext
    

}
const setCategory=(e) => {
    const option= e.target.value
    if(option === 'none'){
        resetCategorias()
        return
    }
    categoria = option
    const index = categorias[categoria].value
    selected= index
    
    totalPrice()
    
} 

const setTickets=(e) => {
 const {value} =e.target
if(value<0){
e.target.value=0
totalFinal= null
return
}
tickets = value
totalPrice()
}


  




const reset =(e) =>{
    e.preventDefault()
    for(let input of inputs)
    input.value=''
    select.value='none'
   resetCategorias()

}

const submit=(e)=>{
    e.preventDefault()


}

form.categoria.addEventListener('change',setCategory)
form.tickets.addEventListener('change', setTickets)
form.tickets.addEventListener('keyup', setTickets)

form.addEventListener('submit',submit )
resetBtn.addEventListener('click', reset)


