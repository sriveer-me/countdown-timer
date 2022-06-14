let days = document.getElementById('days');

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
    let newValue = newText;

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

        topFlap.classList.remove('animate')
        bottomFlap.classList.remove('animate')
    },1500); //assuming that the css animation takes 0.75 seconds to complete
}

setText(days,15);