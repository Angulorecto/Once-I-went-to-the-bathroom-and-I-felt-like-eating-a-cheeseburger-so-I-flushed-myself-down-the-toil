const settings = [
  { name: "Image border gradient", switch: "on", effect: "imageGradient()" }
];

settings.forEach((setting) => {
  if (setting.switch == "on") {
    eval(setting.effect);
  };
});

function imageGradient() {
  const borderElemts = document.querySelectorAll('.border');
  borderElemts.forEach(element => {
    element.setAttribute("class", "gradientBorder");
  });
}
