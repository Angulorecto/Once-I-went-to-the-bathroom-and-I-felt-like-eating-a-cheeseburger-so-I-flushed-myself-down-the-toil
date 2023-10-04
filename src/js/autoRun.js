var hash = localStorage.getItem("hash");
var iframe = document.getElementById("iframe");
const decode = aotb(hash);
iframe.src = decode;
