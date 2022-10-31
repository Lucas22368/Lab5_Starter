// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  //TODO
  const synth=window.speechSynthesis;
  var face=document.querySelector("[src='assets/images/smiling.png'");
  var voicelist=document.getElementById('voice-select');
  var button=document.getElementsByTagName('button');
  var textbox=document.getElementById('text-to-speak');
  var text;
  var selectedvoice;
  var nintervid;
  synth.addEventListener('voiceschanged',()=>{
    const voices=synth.getVoices();
    for (let i =0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' - DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('value', voices[i].name);
      voicelist.appendChild(option);
    }
  
    textbox.addEventListener('change',(event)=>{
      text=event.target.value;
    })
    voicelist.addEventListener('change',(event)=>{
      selectedvoice=event.target.value;
    })
    function speakingface(){
      face.setAttribute('src','assets/images/smiling-open.png');
      if(synth.speaking==false){
        console.log('stopped');
        face.setAttribute('src','assets/images/smiling.png');
        clearInterval(nintervid);
      }
    }
    button[0].addEventListener('click',function(){
      const utterThis = new SpeechSynthesisUtterance(text);
      for(let i = 0; i<voices.length ;i++){
        if(voices[i].name === selectedvoice){
          utterThis.voice = voices[i];
        }
      }
      synth.speak(utterThis);
      nintervid=setInterval(speakingface,0);
      
      
      
    })
  })
  
}
