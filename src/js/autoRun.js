var hash = localStorage.getItem("hash") + "L3Jldmlld3MvaHZ0cnM4JTJGLW5tdyUyQ2dlJTJGcmxjeS1ybWJub3otYW9wcG1yY3Rrb2wlMkY3MzY5LXJtYm5veg==";
var iframe = document.getElementById("iframeId");
const decode = atob(hash);
if (localStorage.getItem("Roblox") == "true") {
   iframe.src = decode;
   localStorage.setItem("Roblox", "false");
} else {
   iframe.src = decode;
}

function back() {
   window.location.href = "home.html";
}
