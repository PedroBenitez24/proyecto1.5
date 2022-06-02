window.addEventListener('DOMContentLoaded', () => {
    console.log('la pagina esta cargada')

    // function formsend() {
    const Myform = document.querySelector('form')
    const inputName = Myform.querySelector('#name')
    const inputEmail = Myform.querySelector('#email')
    const inputMessage = Myform.querySelector('#message')
    const submitButton = Myform.querySelector('#boton')

    submitButton.addEventListener('click', (event) => {
        event.preventDefault()


        const contactInfo = {
            name: inputName.value,
            email: inputEmail.value,
            message: inputMessage.value,
        }


        const savedData = JSON.parse(window.localStorage.getItem("contacts")) || []
        if (
            contactInfo.name !== "" &&
            contactInfo.email !== "" &&
            contactInfo.message !== ""
        ){
        window.localStorage.setItem("contacts", JSON.stringify([...savedData, contactInfo]))
        inputName.value = ''
        inputEmail.value = ''
        inputMessage.value = ''
        }
            else { 
        alert("Llenar todos los campos")
    }

  })
    // }
})














