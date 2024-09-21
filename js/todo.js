const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

/* 리스트 삭제하기 */
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  //li.id는 string 타입이고, toDo.id는 number 타입이다.
  console.log(typeof(li.id)) 
  //문자를 숫자로 바꿔주는 작업이 필요함
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}


const TODOS_KEY = "todos";
//목록 업데이트가 가능하도록 const가 아닌 let으로 작성해준다.
let toDos = [

];

/* 리스트 저장하기 */
function saveToDos() {
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
} 


/* 리스트 추가하기 */
function paintToDo(newTodo){
  console.log(newTodo);
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "지우기";
  button.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
}



function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text:newTodo,
    id:Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();

}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;

  //각각의 array에 item을 준다.
  parsedToDos.forEach(paintToDo);
}

//지우고 싶은 item을 빼고 새 array룰 만든다.

//1. array의 모든 element를 유지하는 함수 
/* function sexyFilter(){
  return true;
}

[1,2,3,4,5].filter(sexyFilter) // (5)[1,2,3,4,5] */

//2. 모든 element를 제외하는 함수
/* function sexyFilter(){
  return false;
}

[1,2,3,4,5].filter(sexyFilter); //[] */

//3. 3이 아니면 true를 return 하는 함수
/* function sexyFilter(item) {
  return item !==3; //3만 false가 된다.
}

[1,2,3,4,5].filter(sexyFilter); //(4)[1,2,4,5] */

/* const arr = [1,2,3,4];
arr.filter(item => item > 2) //(2) [3,4]

const newArr = arr.filter(item => item > 2);
//arr
//(4)[1,2,3,4]
//newArr
//(2)[3,4] */