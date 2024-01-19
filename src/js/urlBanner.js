// Get the current URL
const currentUrl = window.location.href;

// Create a URLSearchParams object to parse the query parameters
const searchParams = new URLSearchParams(currentUrl);

// Get the values of the 'perma' and 'daysBanned' parameters
const perma = searchParams.get("perma");
const daysBanned = searchParams.get("till");

// Check if the parameters exist and are not empty
if (perma == "false") {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysBanned); // Cookie expires in x days

  localStorage.setItem("banned", expirationDate);

} else {
  localStorage.setItem("banned", "true");
}

if (localStorage.getItem("banned") == "true") {
  window.location.href = "banned.html";
} if else (localStorage.getItem("banned") != "") {
  window.location.href 
}
