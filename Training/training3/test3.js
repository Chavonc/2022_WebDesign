//打字機 1.0 鍵盤打什麼 就出現什麼！！
const btn = document.getElementById('btn');
document.addEventListener('keydown',logKey,false);
function logKey(e) 
{
  btn.textContent += e.key;
  //console.log(btn.textConent);
}