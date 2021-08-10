const socket = io()

const inboxForm = document.querySelector('#inboxForm')
const correo = document.querySelector('#correo')
const saludo = document.querySelector('#saludo')

inboxForm.addEventListener('submit', e =>{
    e.preventDefault()

    console.log(
        correo.value,
        saludo.value
    )

    socket.emit('client:newinbox')
})