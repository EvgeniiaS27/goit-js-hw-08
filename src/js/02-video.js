import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);
const STORAGE_KEY = 'videoplayer - current - time';

player.on('timeupdate', throttle(onTimeUpdatePlayer, 1000));

function onTimeUpdatePlayer(e) {
  const timePlayer = e.seconds;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(timePlayer));
}

const storageTime = localStorage.getItem(STORAGE_KEY);
console.log(storageTime);

player.setCurrentTime(storageTime).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration
      break;

    default:
      // some other error occurred
      break;
  }
});
