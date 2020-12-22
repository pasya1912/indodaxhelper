// ==UserScript==
// @name Indodax Helper
// @namespace Script Runner Pro
// @match *://indodax.com/market/*
// @grant none
// ==/UserScript==
console.log('Indodax Info Helper v1.0');
console.log('Created By Rafli Pasya');

  var str = window.location.pathname;
  var arr = str.split("/");
var http = new XMLHttpRequest();
var url = 'https://indodax.com/api/trades/' + arr[2].toLowerCase(); // Api Indodax untuk mengambil market transaksi histori (150 Last Transaction)
http.open('GET', url, true);
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        var coki = JSON.parse(http.responseText);
      var ss = 0;
      var bb = 0;
                  for(i=0;i<=149;i++){
        if(coki[i].type == "sell"){
          var ss = ss + 1;
        }else if(coki[i].type == "buy"){
          var bb = bb + 1;
        }
      }
      
                    alert(arr[2] + '\r\nLast 150 Market Transaction History \r\nBuy : '+ bb + '\r\nSell : ' + ss);
      
    }
}
http.send();
