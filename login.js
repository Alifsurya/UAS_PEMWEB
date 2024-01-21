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
        let buttonLogin = document.getElementsByClassName("btn-logout")
        for(let i = 0; i < buttonLogin.length; i++){
            buttonLogin[i].classList.add('d-none')
            console.log('1')
        }
    }
    let welcomeText = document.getElementById("welcome");
    let user = localStorage.getItem("userLoggedIn");
    if (user) {
        welcomeText.innerHTML = `Selamat datang, ${user[0].toUpperCase()}${user.slice(
            1
          )}`;
    }
})

function login(){
    let userName = document.getElementById("inputUsername")
    let password = document.getElementById("inputPassword")
    let form = document.getElementById("login-form")

    let listUsername = localStorage.getItem('savedUsername')
    let listPassword = localStorage.getItem('savedPassword')

    localStorage.setItem('userLoggedIn', userName.value)
    
    let found = false

    if((userName.value == listUsername && password.value == listPassword) || (userName.value == "alif" && password.value == "alif")){
    form.setAttribute("action", "index.html")
    found = true
    isLogin = true
    localStorage.setItem('isLogin', isLogin)
    }
    
    if(found == false){
        alert("Kredensial salah!")
    }
}

function logout(){
    isLogin = false
    localStorage.setItem('isLogin', isLogin)
    localStorage.removeItem('userLoggedIn')
    location.reload()
}

