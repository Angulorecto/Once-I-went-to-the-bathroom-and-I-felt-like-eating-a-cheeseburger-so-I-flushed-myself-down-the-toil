const CryptoJS = require("crypto-js");
function encode() {
  var item = document.getElementById("item");
  var key = "Once I went to the bathroom and I felt like eating a cheeseburger, so I flushed myself down the toilet to the nearest McDonalds and that meant that I went to China and along the way I found a heavy weaponry that could blow up Alaska in 5 seconds. I shot some weapons to test out the explosion radius and the explosion plus water = Goodbye earth so that means I flew into outer space and re-formed the earth so after that I kind of lost orbit and flew down and destroyed the world trade center. The world trade center flew into outer space and flew down and set back in the place it was totally un-harmed. I also destroyed the entire planet for the second time flying through the atmosphere. So I asked Jesus to restore the earth. He said yes and blew up the sun. Then I farted. Turns out the whole “blowing up the sun” thing was all just a big diversion. While I was vaporized from the sun, the earth was re-formed for the 2nd time. After that I went to the McDonalds and realized that they were out of chikin nuggets and so I became SCP-2623. The karen. I slapped some kids toys and then got to speak to the manager and flushed him down the toilet. And got my chili from Wendy's and realized. I blew up. Then I came back to coding class and gave some chili to Mr. V.";
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
