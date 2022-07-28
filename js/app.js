const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_TYPED = "username";

function onLoginSubmit(event) {

    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_TYPED, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);

   greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);


}



if(localStorage.getItem(USERNAME_TYPED) === null){

loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", onLoginSubmit);

}else{
    greeting.innerText = `hello ${localStorage.getItem("username")}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
     ;
}