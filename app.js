function changeColor(){
    var kart = document.querySelector('.kart');
    kart.classList.toggle('rotate');
    kart.classList.toggle('blue');
}
function changeColor2(){
var kart1 = document.querySelector('#kart1');
kart1.classList.toggle('rotate');
kart1.classList.toggle('red');



}
function changeColor3(){
    var kart2 = document.querySelector('#kart2');
    kart2.classList.toggle('rotate');
    kart2.classList.toggle('green');
var ikinciButon = document.getElementById('ikinciButon');
var dorduncuButon = document.getElementById('dorduncuButon');
if(  ikinciButon.value <  dorduncuButon.value ){
  
  

    setTimeout(function(){
        kart2.style.display = 'none';
        kart4.style.display = 'none';
    
       },1200);
}

}
function changeColor4(){
    var kart3= document.querySelector('#kart3');
    kart3.classList.toggle('rotate');
    kart3.classList.toggle('yellow');
}

function changeColor5(){
   
    var kart4 = document.querySelector('#kart4');
    kart4.classList.toggle('rotate');
    kart4.classList.toggle('green');
    
     /*var value2= parseInt(ucuncuButon.value);
     value2++;
     ucuncuButon.value = value2;*/
    if(  ikinciButon.value != dorduncuButon.value && ikinciButon.changeColor3() ){
   
   setTimeout(function(){
    kart2.style.display = 'none';
    kart4.style.display = 'none';

   },1200); 

}


}
function changeColor6(){
    var kart5 = document.querySelector('#kart5');
    kart5.classList.toggle('rotate');
    kart5.classList.toggle('blue');
}
function changeColor7(){
    var kart6 = document.querySelector('#kart6');
    kart6.classList.toggle('rotate');
    kart6.classList.toggle('yellow');
}
function changeColor8(){
    var kart7 = document.querySelector('#kart7');
    kart7.classList.toggle('rotate');
    kart7.classList.toggle('gray');
}
function changeColor9(){
    var kart8 = document.querySelector('#kart8');
    kart8.classList.toggle('rotate');
    kart8.classList.toggle('red');
}
function changeColor10(){
    var kart9 = document.querySelector('#kart9');
    kart9.classList.toggle('rotate');
    kart9.classList.toggle('firebrick');
}
function changeColor11(){
    var kart10 = document.querySelector('#kart10');
    kart10.classList.toggle('rotate');
    kart10.classList.toggle('gray');
}
function changeColor12(){
    var kart11 = document.querySelector('#kart11');
    kart11.classList.toggle('rotate');
    kart11.classList.toggle('firebrick');
}























