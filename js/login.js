/* 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// string의 오타는 지적해주지 않지만 변수의 오타를 지적해주는 자바스크립트

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,loginInput.value);
  paintGreetings()
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  //유저의 key, value 정보가 없으면 form 을 보여준다.
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit",onLoginSubmit);
}else {
  paintGreetings()
}

 */


// Login
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const greetingTxt = greeting.querySelector(".greetingTxt");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
event.preventDefault();
loginForm.classList.add(HIDDEN_CLASSNAME);
localStorage.setItem(USERNAME_KEY,loginInput.value);
paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greetingTxt.innerText = `안녕, ${username} ! 오늘의 <To do List> 를 작성해봐!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}
else {
  paintGreetings();
}

