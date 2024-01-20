let isLogin = false

isLogin = JSON.parse(localStorage.getItem('isLogin'))
console.log(typeof(isLogin))

// Check isLogin
document.addEventListener("DOMContentLoaded", function() {
    if(isLogin){
        let buttonLogin = document.getElementsByClassName("btn-login")
        for(let i = 0; i < buttonLogin.length; i++){
            buttonLogin[i].classList.add('d-none')
            console.log('1')
        }
    } else{
        let welcomeText = document.getElementById("welcome")
        let buttonLogin = document.getElementsByClassName("btn-logout")
        for(let i = 0; i < buttonLogin.length; i++){
            buttonLogin[i].classList.add('d-none')
            console.log('1')
        }
        welcomeText.classList.add('d-none')
    }
})



function login(){
    let userName = document.getElementById("inputUsername")
    let password = document.getElementById("inputPassword")
    let form = document.getElementById("login-form")

    let listUsername = localStorage.getItem('savedUsername')
    let listPassword = localStorage.getItem('savedPassword')

    localStorage.setItem('userLoggedIn', userName.value)
    // let listUsername = JSON.parse(localStorage.getItem('savedUsername'))
    // let listPassword = JSON.parse(localStorage.getItem('savedPassword'))
    
    let found = false
    // for(let i = 0; i < listUsername.length; i++){
    //     if((userName.value == listUsername[i] && password.value == listPassword[i]) || (userName.value == "alif" && password.value == "alif")){
    //     form.setAttribute("action", "index.html")
    //     found = true
    //     }
    //     if(found){
    //         break
    //     }
    // }

    if((userName.value == listUsername && password.value == listPassword) || (userName.value == "alif" && password.value == "alif")){
    form.setAttribute("action", "index.html")
    found = true
    isLogin = true
    localStorage.setItem('isLogin', isLogin)
    }
    
    if(found == false){
        alert("Kredensial salah!")
    }
    // if(userName.value == "alif" && password.value == "alif"){
    //     form.setAttribute("action", "index.html")
    // } else{
    //     alert("login invalid!")
    // }
}

function logout(){
    isLogin = false
    localStorage.setItem('isLogin', isLogin)
}