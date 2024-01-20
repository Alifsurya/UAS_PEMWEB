// let listUsername = []
// let listPassword = []
// listUsername = JSON.parse(localStorage.getItem('savedUsername'))
// listPassword = JSON.parse(localStorage.getItem('savedPassword'))
// localStorage.setItem('savedUsername', JSON.stringify(listUsername))
// localStorage.setItem('savedPassword', JSON.stringify(listPassword))
// localStorage.setItem('savedUsername', listUsername)
// localStorage.setItem('savedPassword', listPassword)
let x = localStorage.getItem('savedUsername')
let y = localStorage.getItem('savedPassword')

function register(){

    let userName = document.getElementById("inputUsername")
    let password = document.getElementById("inputPassword")
    let passwordConfirm = document.getElementById("inputPasswordConfirm")
    let form = document.getElementById("register-form")

    if (password.value == passwordConfirm.value){
        listUsername = userName.value
        listPassword = password.value
        localStorage.setItem('savedUsername', listUsername)
        localStorage.setItem('savedPassword', listPassword)
        form.setAttribute("action", "login.html")
    } else {
        alert("Password tidak sama!")
    }
}