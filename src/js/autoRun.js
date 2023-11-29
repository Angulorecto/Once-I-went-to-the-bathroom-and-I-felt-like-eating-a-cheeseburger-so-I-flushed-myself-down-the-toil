var hash = localStorage.getItem("hash");
var iframe = document.getElementById("iframeId");
const decode = atob(hash);
iframe.src = decode;
if (localStorage.getItem("roblox") == "true") {
   localStorage.setItem("roblox", "false");
}

function back() {
   window.location.href = "home.html";
}
