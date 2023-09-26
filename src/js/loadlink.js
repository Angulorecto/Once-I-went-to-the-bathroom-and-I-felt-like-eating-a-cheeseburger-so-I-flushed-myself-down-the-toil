const CryptoJS = require("crypto-js");
function decode() {
  var link = localStorage.getItem("hash");
  var key = "";
  const step1 = CryptoJS.AES.decrypt(link, key);
  var step2 = atob();
}
