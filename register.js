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