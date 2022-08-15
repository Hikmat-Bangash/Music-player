const music = document.querySelector("audio");
const img = document.querySelector("img");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const marquee = document.querySelector("marquee");
console.log(title.textContent);
//----- ADDING SONGS TO THE MUSIC PLAYER THROUGH OBJECT ----------
let songs = [
       {
           name : "music",
           artist : "BANGASH",
           title : "Tum Q Chale",
       },

       {
           name : "music3",
           artist : "BANGASH",
           title : "Dekh Lena ♥",
       },
    
       {
           name : "music7",
           artist : "BANGASH",
           title : "Sachi Na kr 😊",
       }
      
]

let isplaying = true;     // for puase / start
let songIndex = 0;       // for to change music

//---------- for playing music --------
let playMusic = () =>{
     isplaying = false;
     music.play();
     play.style.backgroundColor = 'red';
     img.classList.add("enimate");
   // img.className = "enimate";  
     marquee.style.display = "block";
}
//---------- for pause music -----------
let PauseMusic = () =>{
   isplaying = true;
   music.pause();
   play.style.backgroundColor = 'blue';
   img.classList.remove("enimate");
   marquee.style.display = "none";
}

//-------- LOADSONGS FUNCTION DEFINITION -------------
let LoadSongs = (songs) =>{
   title.textContent = songs.title;
   console.dir(title);
   artist.textContent = songs.artist;
   music.src = `assets/${songs.name}.mp3`;
   img.src = `assets/${songs.name}.jpg`;
}

//--------- NEXTSONG FUNCTION DEF ------------
let NextSONG = () =>{
   songIndex = (songIndex + 1) % songs.length;
   LoadSongs(songs[songIndex]);   // called loadSongs function
   music.play();
}
//--------- PREVSONGS FUNCTION DEF ------------
let PrevSONG = () =>{
   songIndex = ( (songIndex - 1) + songs.length) % songs.length;
   LoadSongs(songs[songIndex]);   // called loadSongs function
   music.play();
}



//------ when user click on play button --------------
play.addEventListener("click",()=>{
    isplaying ? playMusic() : PauseMusic();  // ternary operator
})
//------------ when user click on next button -----------
next.addEventListener("click",NextSONG);
//----------- when user click on previous button ---------
prev.addEventListener("click",PrevSONG);
