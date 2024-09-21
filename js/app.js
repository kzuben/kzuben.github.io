/* Variables :값을 여러번 고치지 않고 사용할 수 있는 방법*/

/* const a = 10;
const b = 2; */

/* 계산기 */

/* console.log(a + b);
console.log(a * b);
console.log(a / b);

const myName = "jiu";

console.log("hello " + myName) ; */

/* 변경 가능한 변수... let */
let a = 5;
let b = 2;
console.log(a + b);

let myName = "jiu";
console.log(myName);

myName = "kimjiu";
console.log("hello " + myName);

/* 변수 활용 */
const amIFat = true; 
console.log(amIFat);

const isVideoPlaying = false; // ex) 비디오가 재생되고 있는가?
console.log(isVideoPlaying) // false 재생되고 있지 않음

/* 정의되지 않음 & 존재하지 않음 */
const fat = null;
console.log(fat) // null... 비어있다(x) 아무것도 없는것으로 채웠다(o) 정의되었다. 값이 null이다.

let something;
console.log(something) //undefined 존재하지 않는, 뭔가 없는, 어떤 데이터 타입도 아닌 것.. 메모리에는 만들어졌고, 컴퓨터가 이 변수를 인지하지만 값은 없는 상태
// 문자가 아닌 타입... true, false

console.log(fat, something)
// null undefined 

/* 데이터를 정리하는 법... 데이터 구조... 어떤게 잘 정리할까 */
/* const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun"; */
/* daysOfWeek = mon + tue + wed + thu + fri + sat + sun; 
console.log(daysOfWeek) //montuewedthufrisatsun; */

/*  array 배열... 대괄호와 쉼표*/
const daysOfWeek =  ["mon" , "tue" , "wed", "thu" , "fri" , "sat" ];

const nonsense = [1,2,"mon", false, null, undefined];
console.log(daysOfWeek ,nonsense )

// 한 주의 첫번째 날을 알려주세요. array 에서 아이템 받아오기
console.log(daysOfWeek[5]); // sat ... 즉, array 안의 element 를 받아오는 방법

//array에 아이템 추가하기
daysOfWeek.push("sun");
console.log(daysOfWeek); //  ["mon" , "tue" , "wed", "thu" , "fri" , "sat", "sun" ];

// array의 목적은 하나의 variable 안에 데이터 리스트를 가지는 것
const apple = "apple";
const potato  = "potato";

const toBuy = ["potato","tomato","pizza"];
toBuy.push("kimbab");
console.log(toBuy); // ["potato","tomato","pizza","kimbab"];

/* objects : list에 정리하고 싶지 않을 때, 어떨 때는 이렇게 만들필요가있음 */

const playerName = "nico";
const playerPoints = "121212";
const playerHandsome = "true";
const playerFat = "littel bit";

// player.name 을 알아보고 싶을 때... 정리된 무언가가 필요함
//variable 존재의 즉 Property(이름) 이 필요하므로... 각각의 요소가 무슨 의미인지 필요함... 주석으로 표기해줄 수도 있지만, object로 정리해놓으면 편리하기 때문에 사용하는 것

const player = {
  name : "nico",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name); //nico = console.log(player["name"])
player.fat = false;
player.lastName = "potato"; //object의 property를 추가하는 방법
player.points = player.points + 15; // 기존 값을 불러와서 더해주는 방법
console.log(player); // 우리는 constant를 수정할 수는 없지만 object안의 무언가를 수정할수는있음

// plyaer.points를 불러올 떄는 ()가 없다. 왜? function이 아니기 때문이다.
//function이란? 반복해서 사용할 수 있는 코드조각... function이 없다면 이렇게 된다.
console.log("Hello my name is Nico");
console.log("Hello my name is Dal");
console.log("Hello my name is Flynn");

/* Function */

// 그러나 function이 있다면? 복붙하지 않아도 되는것 (캡슐화... 여러번 실행).. function은 괄호가 필요하다. 그리고 작성할 코드 블록이 필요하다 {}

/* function sayHello() {
// 실행 버튼을 누를때마다 발생하는 내용
//console.log("Hello myName is C");

console.log("Hello myName is C");
}
 */


//function을 실행하면서 데이터를 받아서 보내는 방법.. C를 이름으로바꾸기

function sayHello(nameOfPerson,age) { //argument (인자)는 여러개를 받을 수 있다
  console.log("Helly my name is" + nameOfPerson + "and I'm " + age + "years old");
  }

  sayHello("lynn",10);
  sayHello("dal",23);
  sayHello("nico",21); // 4번의 실행...
  

  function plus(firstNumber,secondNumber) {
    console.log(firstNumber+secondNumber); 
  }

  plus(); // undefined, undefined

  plus(8,60); // 68 데이터가 전달된다....


  function divide(firstNumber,secondNumber) {
    console.log(firstNumber / secondNumber); //function 밖에서는 존재하지 않음
  }

  divide(3,2);



  const playerToday ={
    name: "jiu",
    sayBye: function(otherPersonsName) {
      console.log("Bye! " + otherPersonsName + "See You later")
    }
  }

  console.log(playerToday.name);
  playerToday.sayBye("lynn");


// variable을 업데이트 하고싶다면... let을 사용하면 된다
const app = "app"// 문자

let hello;
console.log(hello) // undefined.... null과는 다른 것

const me = "jiu"
const days = [1,2,false,null,true,undefined,"text",me];
console.log(days[1]); // 2;
days[1] = 3;
console.log(days[1]) // 3;


// console 자체도 object 라는 것...
//console의 property는 다양하다... 그 중에서 console.log()를 불러오는것은 object의 property를 꺼내서 element를 불러오는 것과 같은것
console.log(console);

const playerTm = {
  name : "jiu",
  age: 92
}

playerTm.name = "kimjiu"; // object의 element를 변경하였다.

console.log(playerTm); 

playerTm.love = "tj" // object내에 property와 element를 추가하였다.

console.log(playerTm); 

// function은 ()가 필수이다. ()는 실행한다는 뜻

function minus(first,second) { // data를 받을 준비를 한다.
console.log(first - second) // 받는다.
// 이곳이 function의 body
}

minus(); // NaN
minus(1,2) // 데이터를 준다.

function minusFive(firstNum) {
  console.log(firstNum - 5)
}

minusFive(10,2,12,1) // 찻반쩨 숫자와의 수식만 결과값으로 나온다.

const calculator = {
  add: function(a,b){
   return a+b
  },
  
  minus: function(a,b){
    return a-b
  }
}

//calculator.add(5,1);

console.log(calculator.add(1,3)); //4, undefined

const age = 96;
function calculateKrAge(ageOfForeigner){
  return ageOfForeigner + 2; // 여기서 중요한 것은 return
}

const krAge = calculateKrAge(age); //즉, 96을 넣은것...
console.log(krAge); // 98

//function 안에 return을 넣게 되면, 누군가 function을 실행할 때 이것을 대체하게 된다.

const plusResult = calculator.add(2,3);
console.log(plusResult); //5

const minusResult = calculator.minus(plusResult,10);
console.log(minusResult); //-5

// return으로 값을 대체

const yourAge = parseInt(prompt("How old are you?")); // 나온 값을 숫자로 바꿈
console.log(isNaN(yourAge)); // 슷자가 아닌가요? 나오는 값: false ... 숫자이다.

/* 
if(condition) {
// 조건 (condition 이 === true 일 때) 나올 내용
} */
// isNaN function ...

if(isNaN(yourAge)) {
  console.log("please write a number")
} else if(yourAge < 18) {
  console.log("You are too young.")
} else if(yourAge >= 18 && yourAge <= 50) {
  console.log("You can drink")
} else if (yourAge > 50 && yourAge <=80){
  console.log("You should exercise")
} else if(yourAge>80 ) {
  console.log("You can do whatever you want")
} else {
 // console.log("You can't drink")
}


