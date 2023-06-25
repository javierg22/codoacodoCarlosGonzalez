
const precioTicket= 200
const categorias ={
    a:{percent:80, value:'0'},
    b:{percent:50, value:'1'},
    c:{percent:15, value:'2'}
}
const totaltext= 'Total a pagar: $';

let category = null
let tickets= null
let totalFinal = null

// DOM
const form = document.forms.formulario

const inputs= form.getElementsByTagName('input')
const select= form.getElementsByTagName('select')

const totalTag= document.getElementById('total')

const resetBtn= document.getElementById('reset')
const resumenBtn= document.getElementById('resumen')

totalTag.innerText= totaltext
 

const totalPrice =()=>{

if(!tickets || !category)return;
    const totalValue= precioTicket * tickets
   
    const descuento= (totalValue/100) * categorias[category].percent
    totalFinal= totalValue - descuento

    totalTag.innerText= totaltext + totalFinal
}
totalPrice()


// EVENTOS

const resetCategorias=() => {
    totalFinal= null
     selected = null  //selected
     tickets= 0
    total.innerText= totaltext
    

}


const setCategory = (e) => {
    const option = e.target.value
    if(option === 'none'){
        resetCategorias()
        return
    }
    category = option
    const index = categorias[category].value

    selected=index
  
    
    totalPrice()
    
} 

const setTickets=(e) => {
 const { value } =e.target
if(value<0 || isNaN(value)){
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

const submit=(e)=> {
    e.preventDefault()

    const { nombre, apellido, email, tickets, category} = formulario
    
const verificate = { 
    nombre: nombre.value !== '',
    apellido:apellido.value !== '',
    email: email.value.includes ('@'),
    tickets: tickets.value >0 ,
    category: category.value !== 'none'
}

const values = Object.values(verificate)
console.log(values)

const submitAccepted = values.every(value => value)
 console.log(submitAccepted)
 submitAccepted 
 ?  location.href='./comprado.html'
 : alert('Debes completar todos los Campos para poder comprar')

}

form.category.addEventListener('change',setCategory)
form.tickets.addEventListener('change', setTickets)
form.tickets.addEventListener('keyup', setTickets)

form.addEventListener('submit',submit )
resetBtn.addEventListener('click', reset)


