'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Nang Dumating Ka",
    album: "Single",
    year: 2025,
    artist: "Bandang Lapis",
    musicPath: "./assets/music/Bandang Lapis performs “Nang Dumating Ka”.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-2.jpg",
    posterUrl: "./assets/images/poster-2.jpg",
    title: "Let Down",
    album: "OK Computer",
    year: 1997,
    artist: "Radiohead",
    musicPath: "./assets/music/Let Down - Radiohead.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-3.jpg",
    posterUrl: "./assets/images/poster-3.jpg",
    title: "Stigmatized",
    album: "Camino Palmero",
    year: 2001,
    artist: "The Calling",
    musicPath: "./assets/music/Stigmatized - The Calling.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-4.jpg",
    posterUrl: "./assets/images/poster-4.jpg",
    title: "Number One (Slowed + Reverb)",
    album: "Single",
    year: 2024,
    artist: "Tendo ft. Vito",
    musicPath: "./assets/music/Tendo - Number One (slowed + reverb) ft. Vito (Lyrics) _She's my number one_ [UJMzv6K7WCc].mp3",
  },
  {
    backgroundImage: "./assets/images/poster-5.jpg",
    posterUrl: "./assets/images/poster-5.jpg",
    title: "About You",
    album: "Being Funny in a Foreign Language",
    year: 2022,
    artist: "The 1975",
    musicPath: "./assets/music/The 1975 - About You.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Buloy",
    album: "Inuman Sessions Vol. 1",
    year: 2004,
    artist: "Parokya Ni Edgar",
    musicPath: "./assets/music/2.Inuman Sessions Vol.1 - Buloy.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-2.jpg",
    posterUrl: "./assets/images/poster-2.jpg",
    title: "Inuman Na",
    album: "Inuman Sessions Vol. 1",
    year: 2004,
    artist: "Parokya Ni Edgar",
    musicPath: "./assets/music/9.Inuman Sessions Vol.1 - Inuman Na.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-3.jpg",
    posterUrl: "./assets/images/poster-3.jpg",
    title: "Bakit Part 2",
    album: "Single",
    year: 2000,
    artist: "Mayonnaise",
    musicPath: "./assets/music/Bakit Part 2 - Mayonnaise.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-4.jpg",
    posterUrl: "./assets/images/poster-4.jpg",
    title: "Beautiful Girls",
    album: "Single",
    year: 2007,
    artist: "Sean Kingston",
    musicPath: "./assets/music/Beautiful Girls.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-5.jpg",
    posterUrl: "./assets/images/poster-5.jpg",
    title: "Closing Time",
    album: "Feeling Strangely Fine",
    year: 1998,
    artist: "Semisonic",
    musicPath: "./assets/music/Closing Time.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Saksi Ang Langit",
    album: "Single",
    year: 2024,
    artist: "December Avenue",
    musicPath: "./assets/music/December Avenue - Saksi Ang Langit.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-2.jpg",
    posterUrl: "./assets/images/poster-2.jpg",
    title: "Ang Huling El Bimbo",
    album: "Cutterpillow",
    year: 1995,
    artist: "Eraserheads",
    musicPath: "./assets/music/Eraserheads - Ang Huling El Bimbo.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-3.jpg",
    posterUrl: "./assets/images/poster-3.jpg",
    title: "Pare Ko",
    album: "Ultraelectromagneticpop!",
    year: 1993,
    artist: "Eraserheads",
    musicPath: "./assets/music/Eraserheads - Pare Ko.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-4.jpg",
    posterUrl: "./assets/images/poster-4.jpg",
    title: "With A Smile",
    album: "Circus",
    year: 1994,
    artist: "Eraserheads",
    musicPath: "./assets/music/Eraserheads - With A Smile.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-5.jpg",
    posterUrl: "./assets/images/poster-5.jpg",
    title: "Iris",
    album: "Dizzy Up the Girl",
    year: 1998,
    artist: "Goo Goo Dolls",
    musicPath: "./assets/music/Goo Goo Dolls.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "The Day You Said Goodnight",
    album: "Hale",
    year: 2005,
    artist: "Hale",
    musicPath: "./assets/music/Hale - The Day You Said Goodnight.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-2.jpg",
    posterUrl: "./assets/images/poster-2.jpg",
    title: "If I Ain't Got You",
    album: "Single",
    year: 2024,
    artist: "Rolin Nababan",
    musicPath: "./assets/music/IF I AIN'T GOT YOU - ROLIN NABABAN.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-3.jpg",
    posterUrl: "./assets/images/poster-3.jpg",
    title: "Kabute (Live)",
    album: "Live at The Cozy Cove",
    year: 2024,
    artist: "Unknown",
    musicPath: "./assets/music/Kabute (Live at The Cozy Cove).mp3",
  },
  {
    backgroundImage: "./assets/images/poster-4.jpg",
    posterUrl: "./assets/images/poster-4.jpg",
    title: "First Day High",
    album: "Maharot",
    year: 2006,
    artist: "Kamikazee",
    musicPath: "./assets/music/Kamikazee - First Day High.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-5.jpg",
    posterUrl: "./assets/images/poster-5.jpg",
    title: "Narda",
    album: "Maharot",
    year: 2006,
    artist: "Kamikazee",
    musicPath: "./assets/music/Kamikazee - Narda.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Halik",
    album: "Long Time Noisy",
    year: 2002,
    artist: "Kamikazee",
    musicPath: "./assets/music/Kamikazee- Halik.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-2.jpg",
    posterUrl: "./assets/images/poster-2.jpg",
    title: "Multo (Live)",
    album: "Live at The Cozy Cove",
    year: 2024,
    artist: "Unknown",
    musicPath: "./assets/music/Multo (Live at The Cozy Cove).mp3",
  },
  {
    backgroundImage: "./assets/images/poster-3.jpg",
    posterUrl: "./assets/images/poster-3.jpg",
    title: "Nadarang",
    album: "Single",
    year: 2018,
    artist: "Agsunta ft. Jroa",
    musicPath: "./assets/music/Nadarang - Agsunta Ft.Jroa.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-4.jpg",
    posterUrl: "./assets/images/poster-4.jpg",
    title: "Nobela",
    album: "Single",
    year: 2018,
    artist: "Agsunta",
    musicPath: "./assets/music/Nobela-agsunta.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-5.jpg",
    posterUrl: "./assets/images/poster-5.jpg",
    title: "Paraan",
    album: "Single",
    year: 2004,
    artist: "Mayonnaise",
    musicPath: "./assets/music/Paraan- Mayonnaise.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Pwede Ba (Live)",
    album: "Live at The Cozy Cove",
    year: 2024,
    artist: "Soapdish",
    musicPath: "./assets/music/Pwede Ba (Live at The Cozy Cove) - Soapdish [UyVXS6iLRI0].mp3",
  },
  {
    backgroundImage: "./assets/images/poster-2.jpg",
    posterUrl: "./assets/images/poster-2.jpg",
    title: "Ikaw Sana",
    album: "Single",
    year: 2022,
    artist: "Rob Deniel",
    musicPath: "./assets/music/Rob Deniel Ikaw sana.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-3.jpg",
    posterUrl: "./assets/images/poster-3.jpg",
    title: "Kiss Me",
    album: "Sixpence None the Richer",
    year: 1997,
    artist: "Sixpence None the Richer",
    musicPath: "./assets/music/Sixpence None the Richer - Kiss Me.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-4.jpg",
    posterUrl: "./assets/images/poster-4.jpg",
    title: "Pwede Ba",
    album: "Single",
    year: 2003,
    artist: "Soapdish",
    musicPath: "./assets/music/Soapdish - Pwede Ba [9s8MtpdRRmQ].mp3",
  },
  {
    backgroundImage: "./assets/images/poster-5.jpg",
    posterUrl: "./assets/images/poster-5.jpg",
    title: "Tahanan (Live)",
    album: "Live at The Cozy Cove",
    year: 2024,
    artist: "Unknown",
    musicPath: "./assets/music/Tahanan (Live at The Cozy Cove).mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Tensionado",
    album: "Single",
    year: 2003,
    artist: "Soapdish",
    musicPath: "./assets/music/Tensionado- Soapdish.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-2.jpg",
    posterUrl: "./assets/images/poster-2.jpg",
    title: "Look After You",
    album: "How to Save a Life",
    year: 2005,
    artist: "The Fray",
    musicPath: "./assets/music/The Fray - Look After You.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-3.jpg",
    posterUrl: "./assets/images/poster-3.jpg",
    title: "The Man Who Can't Be Moved",
    album: "The Script",
    year: 2008,
    artist: "The Script",
    musicPath: "./assets/music/The Script - The Man Who Can't Be Moved.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-4.jpg",
    posterUrl: "./assets/images/poster-4.jpg",
    title: "I Love You So",
    album: "Songs for Dads",
    year: 2014,
    artist: "The Walters",
    musicPath: "./assets/music/The Walters -- I Love You So.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-5.jpg",
    posterUrl: "./assets/images/poster-5.jpg",
    title: "Your Universe",
    album: "Single",
    year: 2000,
    artist: "Rico Blanco",
    musicPath: "./assets/music/YOUR UNIVERSE _ RICO BLANCO.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Yellow",
    album: "Single",
    year: 2003,
    artist: "Mayonnaise",
    musicPath: "./assets/music/Yellow - Mayonaise.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-2.jpg",
    posterUrl: "./assets/images/poster-2.jpg",
    title: "Sayang",
    album: "Middle-Aged Juvenile Novelty Pop Rockers",
    year: 2000,
    artist: "Parokya Ni Edgar",
    musicPath: "./assets/music/[04] Parokya Ni Edgar - Sayang.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-3.jpg",
    posterUrl: "./assets/images/poster-3.jpg",
    title: "3 Stars and a Sun",
    album: "Single",
    year: 1994,
    artist: "Wolfgang",
    musicPath: "./assets/music/[15] 3 stars and a sun.mp3",
  },
  {
  backgroundImage: "./assets/images/poster-3.jpg",
  posterUrl: "./assets/images/poster-3.jpg",
  title: "Heaven Knows",
  album: "The OPM Hitmakers Collection",
  year: 2005,
  artist: "Orange & Lemons",
  musicPath: "./assets/music/O&L - Heaven Knows.mp3",
},
{
  backgroundImage: "./assets/images/poster-4.jpg",
  posterUrl: "./assets/images/poster-4.jpg",
  title: "Teenagers",
  album: "The Black Parade",
  year: 2006,
  artist: "My Chemical Romance",
  musicPath: "./assets/music/MCR - Teenagers.mp3",
},
{
  backgroundImage: "./assets/images/poster-5.jpg",
  posterUrl: "./assets/images/poster-5.jpg",
  title: "I Don't Love You",
  album: "The Black Parade",
  year: 2006,
  artist: "My Chemical Romance",
  musicPath: "./assets/music/MCR- I Don't Love You.mp3",
},
  {
  backgroundImage: "./assets/images/poster-1.jpg",
  posterUrl: "./assets/images/poster-1.jpg",
  title: "Chinelas",
  album: "Maharot",
  year: 2006,
  artist: "Kamikazee",
  musicPath: "./assets/music/Kamikazee Chinelas (320 Kbps).mp3",
},
{
  backgroundImage: "./assets/images/poster-2.jpg",
  posterUrl: "./assets/images/poster-2.jpg",
  title: "Tsinelas",
  album: "Tatak Pinoy",
  year: 1994,
  artist: "Yano",
  musicPath: "./assets/music/Yano - tsinelas.mp3",
},
  {
  backgroundImage: "./assets/images/poster-3.jpg",
  posterUrl: "./assets/images/poster-3.jpg",
  title: "Lutong Bahay",
  album: "Single",
  year: 2007,
  artist: "Parokya ni Edgar",
  musicPath: "./assets/music/Parokya ni Edgar - Lutong Bahay.mp3",
},
{
  backgroundImage: "./assets/images/poster-4.jpg",
  posterUrl: "./assets/images/poster-4.jpg",
  title: "Sa Susunod Na Habang Buhay",
  album: "Pebble House, Vol. 1",
  year: 2021,
  artist: "Ben&Ben",
  musicPath: "./assets/music/Sa Susunod Na Habang Buhay.mp3",
},
{
  backgroundImage: "./assets/images/poster-5.jpg",
  posterUrl: "./assets/images/poster-5.jpg",
  title: "Leaves",
  album: "Limasawa Street",
  year: 2019,
  artist: "Ben&Ben",
  musicPath: "./assets/music/Ben & Ben - Leaves.mp3",
},
{
  backgroundImage: "./assets/images/poster-1.jpg",
  posterUrl: "./assets/images/poster-1.jpg",
  title: "Kalapastanganan",
  album: "Single",
  year: 2020,
  artist: "fitterkarma",
  musicPath: "./assets/music/fitterkarma - Kalapastangan.mp3",
},
  {
  backgroundImage: "./assets/images/poster-1.jpg",
  posterUrl: "./assets/images/poster-1.jpg",
  title: "679",
  album: "Fetty Wap",
  year: 2015,
  artist: "Fetty Wap ft. Monty",
  musicPath: "./assets/music/Fetty Wap & Monty 679.mp3",
},
{
  backgroundImage: "./assets/images/poster-2.jpg",
  posterUrl: "./assets/images/poster-2.jpg",
  title: "Batman",
  album: "Single",
  year: 2022,
  artist: "LPB Poody",
  musicPath: "./assets/music/LPB Poody, batman.mp3",
},
{
  backgroundImage: "./assets/images/poster-3.jpg",
  posterUrl: "./assets/images/poster-3.jpg",
  title: "Pagsuko",
  album: "Single",
  year: 2021,
  artist: "Jireh Lim",
  musicPath: "./assets/music/Jireh Lim - Pagsuko.mp3",
},
{
  backgroundImage: "./assets/images/poster-4.jpg",
  posterUrl: "./assets/images/poster-4.jpg",
  title: "Buko",
  album: "Single",
  year: 2013,
  artist: "Jireh Lim",
  musicPath: "./assets/music/BukoJireh Lim.mp3",
},
]; 

/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time]");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
