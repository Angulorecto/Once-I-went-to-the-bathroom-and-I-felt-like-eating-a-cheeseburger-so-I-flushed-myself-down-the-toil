var hash = localStorage.getItem("hash");
var iframe = document.getElementById("iframe");
const decode = atob(hash);
iframe.src = decode;
