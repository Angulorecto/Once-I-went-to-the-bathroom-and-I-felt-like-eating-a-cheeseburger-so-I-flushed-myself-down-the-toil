var frame = document.getElementById("iframeId");
if (frame.contentWindow.document.getElementByTagName("H1").innerHTML == "502") {
  frame.src = "502.html";
}
