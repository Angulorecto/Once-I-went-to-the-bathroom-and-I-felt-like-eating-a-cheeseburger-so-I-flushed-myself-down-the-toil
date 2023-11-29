var hash = localStorage.getItem("hash");
var iframe = document.getElementById("iframeId");
const decode = atob(hash);
if (localStorage.getItem("roblox") == "true") {
   iframe.src = decode;
   localStorage.setItem("roblox", "false");
} else {
   iframe.src = decode;
}

function back() {
   window.location.href = "home.html";
}
