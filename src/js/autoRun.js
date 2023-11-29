var hash = localStorage.getItem("hash");
var iframe = document.getElementById("iframeId");
const decode = atob(hash);
iframe.src = decode;
if (localStorage.getItem("roblox") == "true") {
   iframe.contentWindow.images("https://now.gg/play/roblox-corporation/5349/roblox");
   localStorage.setItem("roblox", "false");
}

function back() {
   window.location.href = "home.html";
}
