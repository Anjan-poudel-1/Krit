let hamburger_menu = document.querySelector(".hamburger-wrap");
let sidenav = document.querySelector('.side-bar');
let backdrop = document.querySelector('.backdrop');
let topnav = document.querySelector('.nav');
let question= document.getElementsByClassName('qn');
let ans = document.getElementsByClassName('ans');
let scrollup = document.querySelector('.move-up');
let nextbtn = document.querySelector('.next');
let prevbtn = document.querySelector('.previous');
let slideclass = document.querySelectorAll('slide');
let imagetrack = 0;
let hamclickBack = document.querySelector('.backdrop');
let closeHammenu1 = document.querySelector('.close-hammenu1');
let closeHammenu2 = document.querySelector('.close-hammenu2');
let closeHammenu3 = document.querySelector('.close-hammenu3');
let rollupNumber = document.querySelectorAll('.rollup');
console.log(rollupNumber)
let rollupArr = Array.prototype.slice.call(rollupNumber)
console.log(rollupArr)
let initial=true;
let currentdisplay= null;
let images=['image-1','image-2','image-3'];

let timer = 7000;
let myVar = null;
let executed = 0 ;


//WE need something at first in carousel. So, the first image is kept here.

if(imagetrack==0 && initial){
    currentdisplay = document.querySelector('.'+images[0]);
   currentdisplay && currentdisplay.classList.add('show-img');
   }
// At first we need to initialize interval... 
// Upon changes, we donot want rapid change as a user might click next or previous button at the end of 6 sec timer.So, initializeinterval is called everytime next image is changed

function initializeinterval(){
     myVar = setInterval(shownext, timer);
}
if(nextbtn){
    initializeinterval();
}


function resetTimer(){
    clearInterval(myVar);
    initializeinterval();
}

nextbtn && nextbtn.addEventListener("click",shownext);
prevbtn && prevbtn.addEventListener("click",showprev);

function resetimage(id,previmg){
    currentdisplay = document.querySelector('.'+images[id]);
    previmg.classList.remove('show-img');
    currentdisplay.classList.add('show-img');
  
    initial=false;
}

//When next button is clicked

function shownext(){
    resetTimer();
imagetrack++;
  
    if(imagetrack>2){   //imagetrack shows the index of slider image. if it exceeds the max value, again it is set to 0 
        imagetrack=0
    }
resetimage(imagetrack,currentdisplay);
}

//When previous button is clicked

function showprev(){
    resetTimer();
 
    imagetrack--;
   
    console.log(imagetrack);
    if(imagetrack<0){
        imagetrack=2
    }
resetimage(imagetrack,currentdisplay);


}

hamburger_menu.addEventListener('click',togglehamMenu)
for(let i = 0 ; i <question.length;i++){
    question[i].addEventListener('click',()=>toggleanswer(question[i],ans[i]))
}

scrollup.addEventListener('click',scrolltotop)

document.addEventListener("scroll",function(){
    var scrollValue = window.scrollY;
    if(scrollValue>165){
topnav.classList.add('navshadow')
scrollup.classList.add('showup'); 
    }
    if(scrollValue<165){  //565
    topnav.classList.remove('navshadow')
    scrollup.classList.remove('showup');        
    }
   
    if(scrollValue>=2000 && scrollValue<4000){

if(executed<=1){
    rollupArr.map(item=>{
        executed++;
            let currentposition = 0 ; 
            let value = (item.innerHTML);
            item.innerHTML=currentposition;

            
          let numberanimate =   setInterval(function(){
        
            if(value>= currentposition){
              
               
                item.innerHTML=currentposition;
                currentposition++;
            }
            if(value < currentposition){
           clearInterval(numberanimate);
            }
             
            },15)
        
        
        })
}
    }
    
})

function  togglehamMenu(){
sidenav.classList.toggle("hamclick_side");
console.log("Click")
backdrop.classList.toggle("hamclick_back");
}


function scrolltotop(){
    document.documentElement.scrollTop = 0;
}
hamclickBack.addEventListener('click',togglehamMenu)
closeHammenu1.addEventListener('click',togglehamMenu)
closeHammenu2.addEventListener('click',togglehamMenu)
closeHammenu3.addEventListener('click',togglehamMenu)
