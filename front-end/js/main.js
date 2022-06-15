import {getTimeRemaining,setEndTime} from './countdown.js';

let days    = document.getElementById('days');
let hours   = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

function checkEquality(elements)
{
    for(let i=0;i<elements.length;i++)
    {
        for(let j=i;j<elements.length;j++)
        {
            if(i!=j)
                return false;
        }
    }
    return true;
}

function setText(el,newText)
{
    let topElement = el.querySelector('.flip-clock__elementTop');
    let bottomElement = el.querySelector('.flip-clock__elementBottom');
    let topFlap = el.querySelector('.flip-clock__elementTopFlap');
    let bottomFlap = el.querySelector('.flip-clock__elementBottomFlap');

    if(checkEquality([topElement.innerText,bottomElement.innerText,topFlap.innerText,bottomFlap.innerText]))
    {
        console.log(el,"not initialized properly. all interior elements do not have the same innerText",
        `
        topElement.innerText : ${topElement.innerText} 
        bottomElement.innerText : ${bottomElement.innerText} 
        topFlap.innerText : ${topFlap.innerText}
        bottomFlap.innerText : ${bottomFlap.innerText}
        `
        );
        return;
    }

    let oldValue = topElement.innerText;
    let newValue = `${newText}`;

    if(oldValue === newValue)
        return;

    topElement.innerText = `${newValue}`;
    topFlap.innerText = `${oldValue}`;

    bottomElement.innerText = `${oldValue}`;
    bottomFlap.innerText = `${newValue}`;

    if(topFlap.classList.contains('animate'))
    {
        console.log(el,"not initialized properly as topFlap still contains animate");
        return;
    }
    
    if(bottomFlap.classList.contains('animate'))
    {
        console.log(el,"not initialized properly as bottomFlap still contains animate");
        return;
    }

    topFlap.classList.add('animate');
    bottomFlap.classList.add('animate');
    
    setTimeout(function(){
        topFlap.innerText = newValue;
        bottomElement.innerText = newValue;

        topFlap.classList.remove('animate');
        bottomFlap.classList.remove('animate');
    },500); //assuming that the css animation takes 0.5s seconds to complete
}

axios.get('/timeRemaining').then(
    function(res){
        let timeRemaing = res.data;
        setEndTime(timeRemaing.total);
        
        setInterval(function(){
            timeRemaing = getTimeRemaining();
        
            setText(days,timeRemaing.days);
            setText(hours,timeRemaing.hours);
            setText(minutes,timeRemaing.minutes);
            setText(seconds,timeRemaing.seconds);
        
            console.log(`Days : ${timeRemaing.days} Hours : ${timeRemaing.hours} Minutes : ${timeRemaing.minutes} Seconds : ${timeRemaing.seconds}`);
        },1000);
    },
    function(err){
        console.log(err);
    }
);