//使⽤ jQuery 完成打字機遊戲 2.0
//產⽣亂數的char [A-Z] 六個賽道
//每個賽道每秒平均1.5個字圖
//由左跑到右 (jQuery Animation)
//打字對應的 char 就字圖消失
//字圖觸碰到最右邊的邊界，Game over!
//⾃⾏找[A-Z]的圖樣
var startTime;
var endTime;
var s=0;
var max=200; 
//var point=0;
$(document).ready(function()
{
     //point=$('score');
     //console.log(point);
     image_List = $('img');
     console.log(image_List);
     $("Input").click(function()
     { 
        startTime=new Date().getTime();
        creating();
        document.addEventListener('keydown',creating);//event:generateing A-Z 
        document.addEventListener('keydown',deletetion);// event:delete char
        window.setInterval(finish,1000);// every second do once
     });
});

function shifting()//由左跑到右 (jQuery Animation)
{
    $(".race").find("img").animate({left:"95%"},5000);
}

function get_time()
{
     endTime = new Date().getTime();
     endTime = (endTime-startTime)/1000;
    return endTime;
}

function creating()//如何令它們分開generate?
{ 
     let number=[];
     let total = get_time()*1.5;// 每秒1.5個
     for( s ; s<total-s ; s++)
     {
         for (let i=0 ; i<=5 ; i++)// 0-5共6道
          {
               number[i] = Math.floor(Math.random()*26); //0-26(A-Z)亂數
               //if(i==0)
               //{
                    //number[i] = Math.floor(Math.random()*26); //0-26(A-Z)亂數
               //}
               //else if(i==1)
               //{
                    //setTimeout(number[i] = Math.floor(Math.random()*26),5000);
               //}
               //else if(i==2)
               //{
                    //setTimeout(number[i] = Math.floor(Math.random()*26),4700);
               //}
               //else if(i==3)
               //{
                    //setTimeout(number[i] = Math.floor(Math.random()*26),4000);
               //}
               //else if(i==4)
               //{
                    //setTimeout(number[i] = Math.floor(Math.random()*26),3000);
               //}
               //else
               //{
                    //setTimeout(number[i] = Math.floor(Math.random()*26),7000);
               //}
          }
         for (let j = 0 ; j <=5 ; j++)
          {
               let new_Node =  document.createElement("img"); //generate新的node對應圖片亂數
               new_Node.src="word/"+number[j]+".jpg";
               $(".race")[j].append(new_Node);
          }
          max--;
     }
     shifting();
}

function deletetion(logkey)
{
    let deleteNode = document.createElement("img");
    deleteNode.src = "word/"+(logkey.keyCode-65)+".jpg";
    for (var i =0 ; i<=5 ; i++)
    {
          var final = $(".race")[i].children[0];
          if (final.src == deleteNode.src)
          {
               $(".race")[i].removeChild(final);
               break;
          }
    }
    console.log(final);
    //point+=10;
}

function finish(s)
{
     if(s==true)
     {        
          return true;
     }
     else
     {
        for(var x = 0 ; x <= 5 ; x++)
          {
               var bottom = $(".race")[x].children[0];
               if(bottom.style.left >= "95%" )//碰到底
               {
                    alert("Game Over!!!");
                    window.location.reload();//重新刷新page
               }
          }
     }
}