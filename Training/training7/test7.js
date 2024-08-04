var stationName = ['八里', '三芝', '土城', '大安福州山', '坪林'];
var stationNo = ['C0AD1', 'C0AD0', 'C0AD4', '318', '01A17'];
var recTime = ['202204271600', '202204271600', '202204271600', '202204271602', '201911130140'];
var rain = ['0', '0', '0', '0', '0'];

function myFunction() 
{
    var y1, m1, d1, h1, mi1;
    y1 = recTime[0] / 100000000 | 0;
    m1 = recTime[0] % 100000000 / 1000000 | 0;
    d1 = recTime[0] % 1000000 / 10000 | 0;
    h1 = recTime[0] % 10000 / 100 | 0;
    mi1 = recTime[0] % 100 | 0;
    document.getElementById('contain1_1').innerHTML = stationName[0] + ' (' + stationNo[0] + ') ';
    document.getElementById('contain1_2').innerHTML = y1 + '年' + m1 + '月' + d1 + '日' + h1 + '點' + mi1 + '分';
    document.getElementById('contain1_3').innerHTML = rain[0];

    var y2, m2, d2, h2, mi2;
    y2 = recTime[1] / 100000000 | 0;
    m2 = recTime[1] % 100000000 / 1000000 | 0;
    d2 = recTime[1] % 1000000 / 10000 | 0;
    h2 = recTime[1] % 10000 / 100 | 0;
    mi2 = recTime[1] % 100 | 0;
    document.getElementById('contain2_1').innerHTML = stationName[1] + ' (' + stationNo[1] + ') ';
    document.getElementById('contain2_2').innerHTML = y2 + '年' + m2 + '月' + d2 + '日' + h2 + '點' + mi2 + '分';
    document.getElementById('contain2_3').innerHTML = rain[1];

    var y3, m3, d3, h3, mi3;
    y3 = recTime[2] / 100000000 | 0;
    m3 = recTime[2] % 100000000 / 1000000 | 0;
    d3 = recTime[2] % 1000000 / 10000 | 0;
    h3 = recTime[2] % 10000 / 100 | 0;
    mi3 = recTime[2] % 100 | 0;
    document.getElementById('contain3_1').innerHTML = stationName[2] + ' (' + stationNo[2] + ') ';
    document.getElementById('contain3_2').innerHTML = y3 + '年' + m3 + '月' + d3 + '日' + h3 + '點' + mi3 + '分';
    document.getElementById('contain3_3').innerHTML = rain[2];

    var y4, m4, d4, h4, mi4;
    y4 = recTime[3] / 100000000 | 0;
    m4 = recTime[3] % 100000000 / 1000000 | 0;
    d4 = recTime[3] % 1000000 / 10000 | 0;
    h4 = recTime[3] % 10000 / 100 | 0;
    mi4 = recTime[3] % 100 | 0;
    document.getElementById('contain4_1').innerHTML = stationName[3] + ' (' + stationNo[3] + ') ';
    document.getElementById('contain4_2').innerHTML = y4 + '年' + m4 + '月' + d4 + '日' + h4 + '點' + mi4 + '分';
    document.getElementById('contain4_3').innerHTML = rain[3];

    var y5, m5, d5, h5, mi5;
    y5 = recTime[4] / 100000000 | 0;
    m5 = recTime[4] % 100000000 / 1000000 | 0;
    d5 = recTime[4] % 1000000 / 10000 | 0;
    h5 = recTime[4] % 10000 / 100 | 0;
    mi5 = recTime[4] % 100 | 0;
    document.getElementById('contain5_1').innerHTML = stationName[4] + ' (' + stationNo[4] + ') ';
    document.getElementById('contain5_2').innerHTML = y5 + '年' + m5 + '月' + d5 + '日' + h5 + '點' + mi5 + '分';
    document.getElementById('contain5_3').innerHTML = rain[4];

}