var hash = localStorage.getItem("hash");
var iframe = document.getElementById("iframeId");
const decode = atob(hash);
if (localStorage.getItem("Roblox") == "true") {
   iframe.src = decode + "/reviews/hvtrs8%2F-nmw%2Cge%2Frlcy-rmbnoz-aoppmrctkol%2F7369-rmbnoz";
   localStorage.setItem("Roblox", "false");
} else {
   iframe.src = decode;
}

function back() {
   window.location.href = "home.html";
}
