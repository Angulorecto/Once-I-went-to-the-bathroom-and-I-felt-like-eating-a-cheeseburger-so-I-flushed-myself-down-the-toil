function removeText(text, animationTag) {
    // Input string
    let originalText = text;
    // Replace method to remove given text
    let newText = originalText.replace(animationTag, '');
     
    // Display output
    console.log(newText);
}
function startAnimation(elementId, aniTag) {
  var currentClass = document.getElementById(elementId).class;
  currentClass + aniTag;
}
function stopAnimation(elementId, aniTag) {
  var currentClass = document.getElementById(elementId).class;
  currentClass + aniTag;
}
