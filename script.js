


console.log("welcome to spotify");
//initializing the variables:
let songindex = 0;
let audioElement = new Audio("1.mp3");
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songitem'));






let songs = [
    { songname: "far from home", filepath: "1.mp3", coverpath: "1.jpeg" },
    { songname: "everything feels new", filepath: "2.mp3", coverpath: "2.jpeg" },
    { songname: "days to remember", filepath: "3.mp3", coverpath: "3.jpg" },
    { songname: "ben-sound", filepath: "4.mp3", coverpath: "4.jpeg" },
    { songname: "yesterday", filepath: "1.mp3", coverpath: "5.jpeg" },
    { songname: "both of us", filepath: "2.mp3", coverpath: "6.jpeg" },

]


songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;



})



//handle play/pause click:
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;



    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;




    }
})

//listen to events:
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;



})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})
const makeAllPlays = () => {

    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {

        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })




}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();

        songindex = parseInt(e.target.id);

        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = songs[songindex].filepath;
            mastersongname.innerText = songs[songindex].songname;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
        }
        else {

            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
            audioElement.pause();
        }

    })




})

document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 5) {
        songindex = 0;
    }
    else {
        songindex = songindex + 1;

    }
    audioElement.src = songs[songindex].filepath;



    audioElement.currentTime = 0;
    audioElement.play();
    mastersongname.innerText = songs[songindex].songname;

    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');


})

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex = songindex - 1;

    }
    audioElement.src = songs[songindex].filepath;
    mastersongname.innerText = songs[songindex].songname;

    audioElement.currentTime = 0;
    audioElement.play();

    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');


})
