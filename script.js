alert("WELCOME TO ALGO TUNES WHERE CODE MEETS SYMPHONY");
console.log("WELCOME TO ALGO TUNES WHERE CODE MEETS SYMPHONY");

let songIndex = 0;
let audioElement = new Audio(songs[0].filePath);
masterSongName.innerText = songs[songIndex].songName;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "SULTAN KGF CHAPTER 2", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755901/0_oqn1oj.mp3", coverPath: "covers/1.jpeg" },
    { songName: "ME AND THE DEVIL", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755900/1_jy69bm.mp3", coverPath: "covers/2.jpg" },
    { songName: "BLODDY MARY - LADY GAGA", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755904/2_cynhwo.mp3", coverPath: "covers/3.jpeg" },
    { songName: "LET ME LOVE YOU - JUSTIN BIEBER", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755904/3_k9qpkk.mp3", coverPath: "covers/4.jpg" },
    { songName: "FAIRYTALE", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755901/4_wxvafq.mp3", coverPath: "covers/5.jpg" },
    { songName: "AASMAN KO CHUKAR DEKHA", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755905/5_twqf30.mp3", coverPath: "covers/6.jpg" },
    { songName: "BROWN RANG - YO YO HONEY SINGH", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755905/6_ogt4az.mp3", coverPath: "covers/7.jpg" },
    { songName: "VE HAANIYAN", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755905/7_u6qcpu.mp3", coverPath: "covers/8.jpg" },
    { songName: "RAANJHAN", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755909/8_snf20a.mp3", coverPath: "covers/9.jpeg" },
    { songName: "ISHQ", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755909/9_zyq1ph.mp3", coverPath: "covers/10.jpeg" },
    { songName: "HYMN FOR WEEKEND", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755910/10_ibiu7u.mp3", coverPath: "covers/11.jpeg" },
    { songName: "A SKY FULL OF STARS", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755909/11_hw7iev.mp3", coverPath: "covers/12.jpeg" },
    { songName: "ISHQ SUFIYANA", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755912/12_p6byuy.mp3", coverPath: "covers/13.jpeg" },
    { songName: "KHUDA JANE", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755901/13_dqpkqy.mp3", coverPath: "covers/14.jpeg" },
    { songName: "SONA RE - KING", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755901/14_ftbvod.mp3", coverPath: "covers/15.jpeg" },
    { songName: "SHAPE OF YOU X NAINA - ED SHAREEN X DILJIT DOSHANJH", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755904/15_woc9sw.mp3", coverPath: "covers/16.jpeg" },
    { songName: "CHUTTAMALE", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755908/16_pvgi0h.mp3", coverPath: "covers/17.jpeg" },
    { songName: "ASSA KHODA", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755908/17_nw6joe.mp3", coverPath: "covers/18.jpeg" },
    { songName: "WAKA WAKA - SHAKIRA", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755912/18_mipdgy.mp3", coverPath: "covers/19.jpg" },
    { songName: "GANGNAM STYLE", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755913/19_hbpgvk.mp3", coverPath: "covers/20.jpeg" },
    { songName: "BOLLYWOOD MASHUP", filePath: "https://res.cloudinary.com/dpdtprvue/video/upload/v1747755927/20_knpfau.mp3", coverPath: "covers/21.jpg" },
]

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// LISTEN TO EVENTS
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    element.id = index;
    element.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id)
    if(songIndex >= 0 && songIndex < songs.length){
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    } else {
        console.error("INVALID SONG INDEX:", songIndex);
    }
    });
});

// next button
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 20) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

// previous button
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 20;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

audioElement.addEventListener('ended', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0; // Loop back to first song
    } else {
        songIndex++;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});
