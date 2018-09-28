// function numberToReal(numero) {
//   var numero = numero.toFixed(2).split('.');
//   numero[0] =  numero[0].split(/(?=(?:...)*$)/).join('.');
//   return numero.join(',');
// }

// var numByClass = document.getElementsByClassName('numCount'),
//     element;

// for (var index = 0; index < numByClass.length; index++) {
//   element = parseFloat(numByClass[index].innerHTML);
//   console.log(numberToReal(element));
// }


//César O. Araújo
//Front-End JC
//Script to animate (Counting) any type of numbers with CountUp.Js
//Ex.: 153.121,25; 121,25; 523.123; 250

//Usage: create divs with 'numCount' class name and give it a number


function formattingNumber() {
  var items = document.querySelectorAll('.numCount');
  items.forEach((item) => {
    item.id = Math.random().toString(36).substr(2, 9);
    var numeroFinal = '';
    var numer = document.getElementById(item.id).innerHTML;
    var numer2 = document.getElementById(item.id).innerHTML.split('.').join(',').split(',').join(',').split(',');
    var tagabre = '<span data-numero>';
    var tagfecha = '</span>';
      for(i=0; i<numer2.length; i++){
        if( i < numer2.length-1 ){
          if(i == numer2.length-2){
            if(numer.indexOf(',') != -1 ){
              numeroFinal += tagabre + numer2[i] + tagfecha + ',';
            }else{
              numeroFinal += tagabre + numer2[i] + tagfecha + '.';
            }
          }else{
            numeroFinal += tagabre + numer2[i] + tagfecha + '.';
          }
        }else{
          numeroFinal += tagabre + numer2[i] + tagfecha;
        }
      }
    document.getElementById(item.id).innerHTML = numeroFinal;
  })
}













window.onload = function(){
  
  formattingNumber();


    var options = {
         useEasing: true, 
         useGrouping: true, 
          separator: '',
         decimal: ',',
  };


    var numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
      var total1 = +numero.innerText;
      console.log(total1);
      numero.id = Math.random().toString(36).substr(2, 9);
      var demo = new CountUp(numero.id, 0, total1, 0, 1, options);
      demo.start();
    })
  
}


    
        
    