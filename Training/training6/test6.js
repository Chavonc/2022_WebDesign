setInterval(myFunction, 1000);
function myFunction() 
{
    var NowTime = new Date();
    var h = NowTime.getHours();
    var m = NowTime.getMinutes();
    var s = NowTime.getSeconds();
    document.getElementById('Tim').innerHTML = h + ' : ' + m + ' : ' + s;
    setTimeout('myFunction()',1000);
}
