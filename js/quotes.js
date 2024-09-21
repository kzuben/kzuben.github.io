const quotes = [
  {
    quote: "동반자 아이루",
    author: "주인공 헌터의 동반자로서 조사대에 참가하는 아이루, 사람의 언어를 사용하여 사냥을 돕거나 커뮤니케이션을 나눌 수 있다.",
    img:"c_img_01_s.png"
  },
  {
    quote: "헌터",
    author: "플레이어가 조작하는 주인공, 금지된 땅 조사대로 임명된 헌터. 길드의 명령에 따라 미지의 땅을 조사하는 역할을 맡았다.",
        img:"c_img_02_s.png"
  },
  {
    quote: "알마",
    author: "몬스터가 사냥의 요청이나 허가, 퀘스트의 관리와 접수를 담당하는 편집자. 필드에서도 헌터와 동행해 사냥에 도움이 되는 정보를 제공하거나 퀘스트의 지급품을 관리하는 등을 통해 헌터를 지원한다.",
        img:"c_img_03_s.png"
  },
  {
    quote: "젬마",
    author: "조사대 가공점을 담당하는 인물, 무기 및 방어구의 생산과 가공을 담당한다.",
        img:"c_img_04_s.png"
  },
  {
    quote: "나타",
    author: "조사대와 동행하고 있는 의문의 소년",
    img:"c_img_05_s.png"
  },
  {
    quote: "올리비아",
    author: "헌터즈 길드의 금지된 땅 조사대원 중 한 명. 해머를 사용한다. 길드로부터 특수한 의뢰를 받아 활동하던 중, 금지된 땅 조사대원으로 지명받는다. 임무를 수행하면서도 서포트 헌터로서 주인공이 요청하면 달려와 준다.",
    img:"c_img_06_s.png"
  },
  {
    quote: "아토스",
    author: "올리비아를 서포트하는 동반자 아이루.장모종인 엘리트 동반자.",
    img:"c_img_07_s.png"
  },
];

const ourImg = document.querySelector("#quote span:nth-of-type(1)");
const quote = document.querySelector("#quote span:nth-of-type(2)");
const author = document.querySelector("#quote span:nth-of-type(3)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


ourImg.innerHTML = '<img src=./images/' + todaysQuote.img + '>'
quote.innerText = '"' + todaysQuote.quote + '"';
author.innerText = todaysQuote.author;