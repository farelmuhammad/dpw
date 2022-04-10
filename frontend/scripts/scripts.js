// DOM Selection
// document.getElementsByTagName()
const h2 = document.getElementsByTagName('h2');
h2[0].style.color = 'red';

// document.getElementsByClassName()
const button = document.getElementsByClassName('button');
button[0].style.backgroundColor = 'black';
button[0].style.color = 'red';

button[1].style.backgroundColor = 'black';
button[1].style.color = 'red';

// query
const p = document.querySelector(".writer").style
p.color ="red";

// let
const gambar = document.getElementsByClassName('gambar');
     for (let i=0; i<gambar.length; i++){
         if(gambar){
             console.log(gambar[i]);
         }
         else if(no){
             console.log('Tidak Ada Data');
             console.log(i)
         }
     }