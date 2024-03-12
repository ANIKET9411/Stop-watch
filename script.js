let hour=  document.querySelector(".item1");
let minute= document.querySelector(".item2");
let second= document.querySelector(".item3");
let milisecond= document.querySelector(".item4");
let btn=document.querySelector(".btn");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");
let btn4=document.querySelector(".btn4");
let btn5=document.querySelector(".btn5");
let laps=document.querySelector(".lap");
let hours=0,minutes=0,seconds=0,miliseconds=0;
let id;
let lap=[];
function start()
{
    btn3.disabled=true;
    id=setInterval(() => {
        miliseconds++;
        // console.log(hours ,minutes,seconds,miliseconds);
        milisecond.innerText=(miliseconds>9)?miliseconds:"0"+miliseconds;
        if(miliseconds===99)
        {
            seconds++;
            miliseconds=0;
        }
        
        second.innerText=(seconds>9)?seconds:"0"+seconds;
        if(seconds===59)
        {
            minutes++;
            seconds=0;
        }
       
        minute.innerText=(minutes>9)?minutes:"0"+minutes;
        if(minutes===59)
        {
            hours++;
            minutes=0;
        }
        hour.innerText=(hours>9)?hours:"0"+hours;
        
    },10);
}

function stop(){
    clearInterval(id);
    btn3.disabled=false;
}

function reset(){
    lap=[];
    laps.innerHTML="";
    hours=0,minutes=0,seconds=0,miliseconds=0;
    stop();
    milisecond.innerText="0"+miliseconds;
    second.innerText="0"+seconds;
    hour.innerText="0"+hours;
    minute.innerText="0"+minutes;
}
// start();
btn.addEventListener('click',function(){
    // console.log(hours+" " +minutes+" "+seconds+" "+miliseconds+"&");
    v1=(miliseconds>9)?miliseconds:"0"+miliseconds;
    v2=(seconds>9)?seconds:"0"+seconds;
    v3=(minutes>9)?minutes:"0"+minutes;
    v4=(hours>9)?hours:"0"+hours;

    lap.push(v4+":" +v3+":"+v2+":"+v1);
    laps.innerHTML="";
    lap.forEach(function(list){
        let div1=document.createElement("div");
        div1.innerText=list;
        console.log(div1);
        laps.appendChild(div1);

    })

})
function clear(){
    lap=[];
    laps.innerHTML="";
}
btn2.addEventListener('click',stop);
btn3.addEventListener('click',start);
btn4.addEventListener('click',reset);
btn5.addEventListener('click',clear);
