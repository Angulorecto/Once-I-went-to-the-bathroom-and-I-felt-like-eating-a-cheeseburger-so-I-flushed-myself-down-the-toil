document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.key === 'r') {
    location.reload();
  }
});
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.key === '`') {
    alert(localStorage.getItem("HomeBG"));
  }
});
