let video = document.querySelector('.viewr');
let btnplay = document.querySelector('.btnPlay');
let inputs = document.querySelectorAll('input');
let btnskip = document.querySelectorAll('.btn-player');
let progress = document.querySelector('.progress');
let progressFilled = document.querySelector('.progressFilled');
function videoplay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    btnplay.innerText = video.paused ? '▶' : '⏸️';
}
video.addEventListener('click',videoplay);
btnplay.addEventListener('click',videoplay);

inputs.forEach(input => {
    input.addEventListener('input',()=>{
        video[input.name] = input.value;
    });
});

btnskip.forEach(bSkip =>{
    bSkip.addEventListener('click',()=>{
        video.currentTime += parseFloat(bSkip.dataset.skip);

    });
});

video.addEventListener('timeupdate',()=>{
    let percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
});

let result = false;
function progr(e){
    let pr = (e.offsetX / progress.offsetWidth) * video.duration;
    // console.log(pr);
    video.currentTime =  pr;
}
progress.addEventListener('click',progr);
progress.addEventListener('mousemove',(e)=> result && progr(e));
progress.addEventListener('mousedown',()=> result = true);
progress.addEventListener('mouseup',()=> result = false);
