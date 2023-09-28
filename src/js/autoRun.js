var hash = localStorage.getItem("hash");
var iframe = document.getElementById("iframe");
const step1 = aotb(hash);
const step2 = aotb(step1);
const step3 = aotb(step2);
const step4 = aotb(step3);
iframe.src = step4;
