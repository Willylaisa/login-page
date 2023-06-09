const userName = document.getElementById("name")
const logIn = document.getElementById("login")
const eMail = document.getElementById("email")
const passWord = document.getElementById("password")
const errorMessage = document.getElementById("error-message")
const signUp = document.getElementById("sign-up")

function openIndex() {
    let loginDetails ={
        email: eMail.value,
        password: passWord.value
    }
    localStorage.setItem("logindetails", JSON.stringify(loginDetails))
    window.open("login.html")   
}

logIn.addEventListener("click", function() {
    const logIn = JSON.parse(localStorage.getItem("logindetails"))
    if (eMail.value === logIn.email && passWord.value === logIn.password) {
        window.open("index.html")
        eMail.value = ""
        passWord.value = ""
        errorMessage.textContent = ""
    } else {
        errorMessage.textContent = "Wrong username or password. Please sign up."
    }
})()


function openSignup(){
    window.open("signup.html")
}
