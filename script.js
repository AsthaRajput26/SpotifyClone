
console.log("Welcome to Spotify");
//Initialising the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let master_Play= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
{songName: "Warriyo - Mortals [NCS Release]", filePath:"songs/1.mp3",coverPath :"images/1.jpg"},
{songName: "Cielo", filePath:"songs/2.mp3",coverPath :"images/2.jpg"},
{songName: "Deaf KEV- Invincible [NCS Release]-320k", filePath:"songs/3.mp3",coverPath :"images/3.jpg"},
{songName: "Different Heaven", filePath:"songs/4.mp3",coverPath :"images/4.jpg"},
{songName: "Janji", filePath:"songs/5.mp3",coverPath :"images/5.jpg"},
{songName: "Rabba", filePath:"songs/6.mp3",coverPath :"images/6.jpg"},
{songName: "Sakhiyaan", filePath:"songs/7.mp3",coverPath :"images/7.jpg"},
{songName: "Bhula Dena", filePath:"songs/1.mp3",coverPath :"images/8.jpg"},
{songName: "Tumhari Kasam", filePath:"songs/2.mp3",coverPath :"images/9.jpg"},

]
songItems.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//audioElemnt.play();

//Handle play/pause click
master_Play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
        master_Play.classList.remove('fa-play-circle');
        master_Play.classList.add('fa-pause-circle');
        if(songIndex==0){
        masterSongName.innerText=songs[0].songName;
        }
    }
    else{
        audioElement.pause();
        gif.style.opacity=0;
        master_Play.classList.remove('fa-pause-circle');
        master_Play.classList.add('fa-play-circle');
        
    }
})
//Listen To Events
audioElement.addEventListener('timeupdate',()=>{

//update Seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    
    })
    const makeAllPlays=()=>{
       
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        }


    )}
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src=`songs/${songIndex+2}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        master_Play.classList.remove('fa-play-circle');
        master_Play.classList.add('fa-pause-circle');


    })
  })  

  document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+2}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        master_Play.classList.remove('fa-play-circle');
        master_Play.classList.add('fa-pause-circle');
  })  
  document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+2}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        master_Play.classList.remove('fa-play-circle');
        master_Play.classList.add('fa-pause-circle');
  })  