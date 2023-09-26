const CryptoJS = require("crypto-js");
function encode(item) {
  var key = "admin";
  const step1 = CryptoJS.AES.encrypt(item, key);
  var step2 = atob(step1);
  const step3 = CryptoJS.AES.encrypt(step2, key);
  var step4 = atob(step3);
  var step5 = atob(step4);
  var step6 = atob(step5);
  const step7 = CryptoJS.AES.encrypt(step6, key);
  const step8 = CryptoJS.AES.encrypt(step7, key);
  var p = document.getElementById("output");
  p.innerHTML = step8;
}
