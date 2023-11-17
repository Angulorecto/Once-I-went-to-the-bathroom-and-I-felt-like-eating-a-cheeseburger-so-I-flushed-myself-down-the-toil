var hash = localStorage.getItem("hash");
var iframe = document.getElementById("iframeId");
const decode = atob(hash);
iframe.src = decode;

function back() {
   window.location.href = "home.html";
}
