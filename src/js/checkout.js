var itemName = localStorage.getItem("checkoutRank");
var itemArea = document.getElementById("productName");
var itemPrice = document.getElementById("productPrice");
if (itemName == "premium") {
  itemArea.innerHTML = "Premium";
} else if () {
  itemArea.innerHTML = "Member";
} else {
  itemArea.innerHTML = "Super Member";
}
localStorage.setItem("checkoutRank", "");
