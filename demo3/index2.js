//打字機遊戲 2.0
//產⽣亂數的char [A-Z] ⼀個賽道，由左跑到右
//按鍵打字對應到的 char 就會消失，⼀定要由右到左打！
//打字機比賽：HODIHWOBCBOQBOQOQ
//打字機比賽：AHODIHWOBCBOQBOQOQ(A是增加)
//當使⽤者輸入QOQ就會消掉
//打字機比賽：AHODIHWOBCBOQBO
//過程中會每秒平均隨機產⽣2.5個字，只要敲擊鍵盤就產⽣、按空⽩鍵也會產⽣!
var Main = document.getElementById('Main');
const Alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var Length=Alphabet.length;//大小為26

function GeneraterandomLetter()//產⽣亂數
{
     var index=[];
     for (var i=0;i<1;i++)//一開始會有1個random字母
     {
          index.push(Alphabet[(Math.floor(Math.random()*Length))]);//floor是無條件捨去
     }
     return index;
}
var answer=GeneraterandomLetter();
for(let i=0;i<answer.length;i++)//for block var
{
     Main.textContent+=answer[i];
     //generated, then print it
}

function printout()//去掉，用空白取代
{
     Main.innerText='';

     for(let i=0;i<answer.length;i++)//for block var
     {
          Main.innerText +=answer[i];
     }
}

function InsertValue()//插入新值
{
     answer.unshift(Alphabet[(Math.floor(Math.random()*Length))]);
     printout();
}

var btn=true;//adding alphabet
window.addEventListener('keyup', Insert,false);
function Insert()
{
     if(btn)//按下button
     {
          Adding=window.setInterval(InsertValue,400)// 每秒2.5個字,一個字0.4秒,,400毫秒/per
     }
     btn=false;
}

window.addEventListener('keydown',DeleteValue,false);//去除
function DeleteValue(event)
{
     var index2=answer.length-1;
     if(event.key==answer[index2])
     {
          answer.pop();
          console.log(index2);
          console.log(answer[index2]);
          printout();
     }
}
console.log(btn);

//var number=0; //分數 (來不及DEBUG...QAQ)
//function Point()
//{
     //DeleteValue();
     //number+=10;
     //document.getElementById("msg").innerHTML=number+"Point";
//}
//console.log(number+"Point");