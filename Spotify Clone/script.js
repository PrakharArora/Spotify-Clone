console.log("Welcome to Spotify");
// Initilise the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');


let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs =[
    {songName: "Sala-e-Ishq" , filePath: "1.mp3 , 1.jpg"},
    {songName: "Sala-e-Ishq" , filePath: "1.mp3 , 1.jpg"},
    {songName: "Sala-e-Ishq" , filePath: "1.mp3 , 1.jpg"},
    {songName: "Sala-e-Ishq" , filePath: "1.mp3 , 1.jpg"},
    {songName: "Sala-e-Ishq" , filePath: "1.mp3 , 1.jpg"},
    {songName: "Sala-e-Ishq" , filePath: "1.mp3 , 1.jpg"},
    
]
// audioElement.play();
// handle playplause click
masterPlay.addEventListener('click' , ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
    }


    else{

        if(audioElement.play || audioElement.currentTime<=0){
            audioElement.pause();
          masterPlay.classList.remove('fa-pause-circle');
          masterPlay.classList.add('fa-play-circle');

          
    }
}
})




myProgressBar.addEventListener('timeupdate', ()=>{

    console.log('timeupdate');

})