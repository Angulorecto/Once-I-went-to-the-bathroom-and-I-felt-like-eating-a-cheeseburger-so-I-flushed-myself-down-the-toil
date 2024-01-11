const video = document.createElement('video');

// 👇️ Local file
video.src = '../videos/Dust Particles pack (online-video-cutter.com).mp4';

video.autoplay = true;
video.controls = false;
video.muted = true;
video.loop = true;
video.playsinline = true;
video.setAttribute("class", "toPlayVideo");

const box = document.getElementById('container');

box.appendChild(video);
