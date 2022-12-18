document.body.addEventListener('keyup', (event)=>{
  
   playSoud(event.code.toLowerCase());
 
});
document
function playSoud(sound){
   let audioElement = document.querySelector(`#s_${sound}`);
   let KeyElement = document.querySelector(`div[data-key="${sound}"]`);

   if(audioElement){
      audioElement.ariaCurrent = 0;
      audioElement.play();
   }
   if(KeyElement){
      KeyElement.classList.add('active');
       
      setTimeout(()=>{
         KeyElement.classList.remove('active');
      },300);
   
   
   }


}
