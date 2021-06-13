window.addEventListener('load',()=>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        '#60d394',
        '#d36060',
        '#7a68a1',
        '#d3d160',
        '#c060d3',
        '#609fd3'
    ];


    //Lets get going with the sound here
    pads.forEach((pad, index)=>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime=0;
            sounds[index].play();

            createBubble(index);
        });
    });

    //Create a function that makes bubbles
    const createBubble = (index) =>{
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationcancel',function(){
            visual.removeChild(this);
        })
    }
});
