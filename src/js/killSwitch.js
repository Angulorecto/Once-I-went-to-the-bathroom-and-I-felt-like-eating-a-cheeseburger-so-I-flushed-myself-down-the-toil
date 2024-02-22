getText("https://kill-switch-phi.vercel.app/kill.txt");
async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  if (myText == "off") {
    window.href = "../pages/crashed.html";
  }
}
