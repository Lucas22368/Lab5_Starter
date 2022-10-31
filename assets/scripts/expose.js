// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var mainimage=document.querySelector("[src='assets/images/no-image.png']");
  var select=document.getElementById('horn-select');
  var sound=document.getElementsByClassName('hidden');
  var button=document.getElementsByTagName('button');
  var volumeimage=document.querySelector("[src='assets/icons/volume-level-2.svg']");
  var slider=document.getElementById('volume');
  const jsConfetti=new JSConfetti();
  select.addEventListener('change',(event) =>{
    if(event.target.value=='air-horn'){
      mainimage.setAttribute('src','assets/images/air-horn.svg');
      sound[0].setAttribute('src','assets/audio/air-horn.mp3');
    }
    else if(event.target.value=='car-horn'){
      mainimage.setAttribute('src','assets/images/car-horn.svg');
      sound[0].setAttribute('src','assets/audio/car-horn.mp3');
    }
    else if(event.target.value=='party-horn'){
      mainimage.setAttribute('src','assets/images/party-horn.svg');
      sound[0].setAttribute('src','assets/audio/party-horn.mp3');

    }
  })
  button[0].addEventListener('click',function(){
    if(sound[0].getAttribute('src')=='assets/audio/party-horn.mp3'){
      jsConfetti.addConfetti();
    }
    sound[0].play();
  })
  slider.addEventListener('change',(event)=>{
    if(event.target.value==0){
      volumeimage.setAttribute('src','assets/icons/volume-level-0.svg');
    }
    else if(event.target.value<33 && event.target.value>0){
      volumeimage.setAttribute('src','assets/icons/volume-level-1.svg');
    }
    else if(event.target.value>=33 && event.target.value<67){
      volumeimage.setAttribute('src','assets/icons/volume-level-2.svg');
    }
    else if(event.target.value>=67 && event.target.value<=100){
      volumeimage.setAttribute('src','assets/icons/volume-level-3.svg');
    }
    console.log(event.target.value);
    sound[0].volume=event.target.value/100;
  })
}