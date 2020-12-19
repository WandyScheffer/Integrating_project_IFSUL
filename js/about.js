function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//https://developers.google.com/youtube/iframe_api_reference 
//https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5

const musics = ['tAGnKpE4NCI', '3cEDwzHksNM', '2OKMO_JzJ8k'];
const title = document.getElementById("music_title");
const left_speaker = document.getElementById("left_speaker");
const right_speaker = document.getElementById("right_speaker");
// Load the IFrame Player API code asynchronously.

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    
    width: '0',
    height: '0',
    // setVolume: 10,
    videoId: musics[getRandomIntInclusive(0, (musics.length - 1))],
    playerVars: { 
        'autoplay': 1,
        'volume': 10
    },
    events:{
        'onReady': setConfig
    }
  });
}

function setConfig() {
    title.innerText = player.playerInfo.videoData.title;
    player.setVolume(50);
}

function volumeOrMute(event) {
    console.log(player);
    player.setVolume(event.target.value);
    if(event.target.value == 0){
        right_speaker.src = null;
        left_speaker.src = "./img/icons/mute.svg";
        console.log(left_speaker);
    }else{
        right_speaker.src = "./img/icons/speaker_loud.svg";
        left_speaker.src = "./img/icons/speaker_low.svg";
        console.log(right_speaker);
    }
}