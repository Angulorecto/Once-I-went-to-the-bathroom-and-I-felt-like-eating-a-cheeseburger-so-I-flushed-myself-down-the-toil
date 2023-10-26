document.addEventListener("keydown", function(event) {
  if (event.key === "`") {
    window.location.href = "home.html";
  }
  if (event.key === "-") {
    let prompt = prompt("What is the debug Admin key?");
    if (prompt == atob("SWN5MTM=")) {
      alert(localStorage.getItem("hash"));
    }
  }
});
