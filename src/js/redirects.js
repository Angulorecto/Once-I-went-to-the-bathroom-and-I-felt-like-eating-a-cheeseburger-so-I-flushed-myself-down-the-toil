const keys = [
   { rank: "Owner", name: "Ethan", key: "SWN5MTM=" },
   { rank: "Co-owner", name: "Matthew", key: "TWF0aDAx" },
   { rank: "Member", name: "Test", key: "TWVtYmVy" },
   { rank: "Staff", name: "Caleb", key: "Q2Fsbw==" },
   { rank: "Staff", name: "BJ", key: "QmVqb3Rh" },
   { rank: "Premium", name: "Vikram", key: "bWFya2l2" },
   { rank: "Premium", name: "Liam", key: "ZXN0dXBpZG9ib3pv" },
];
const tempKeys = [
   { rank: "Premium", name: "Marcos", key: "bWFyY29z", activeUntill: "27/11/2023"},
];
const services = [
       { serviceNum: "1", hash: "aHR0cHM6Ly9pbnRlcnN0ZWxsYXI3LWplMjQudmVyY2VsLmFwcC8=", rank: "staff"},
       { serviceNum: "2", hash: "aHR0cHM6Ly93Nmo0a2otODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "3", hash: "aHR0cHM6Ly9pbnRlcnN0ZWxsYXI3LXRzcXQudmVyY2VsLmFwcC8=", rank : "premium"},
       { serviceNum: "4", hash: "aHR0cHM6Ly92ZXJjZWwyLXpldGEtbmluZS52ZXJjZWwuYXBwLw==", rank : "member"},
       { serviceNum: "5", hash: "aHR0cHM6Ly92ZXJjZWwyLXpldGEtbmluZS52ZXJjZWwuYXBwLw==", rank : "staff"},
       { serviceNum: "6", hash: "aHR0cHM6Ly8zam55bmstODA4MC5jc2IuYXBwLwo=", rank : "public"},
       { serviceNum: "7", hash: "", rank : "premium"},
       { serviceNum: "8", hash: "", rank : "member"},
       { serviceNum: "9", hash: "", rank : "staff"},
       { serviceNum: "10", hash: "aHR0cHM6Ly92MnQ3ZzMtODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "11", hash: "", rank : "premium"},
       { serviceNum: "12", hash: "", rank : "member"},
       { serviceNum: "13", hash: "aHR0cHM6Ly9pbnRlcnN0ZWxsYXI3LXRzcXQudmVyY2VsLmFwcC8=", rank : "staff"},
       { serviceNum: "14", hash: "aHR0cHM6Ly80bnF5eGstODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "15", hash: "aHR0cHM6Ly9pbnRlcnN0ZWxsYXI3LXkzdHIudmVyY2VsLmFwcC8=", rank : "premium"},
       { serviceNum: "16", hash: "aHR0cHM6Ly9pbnRlcnN0ZWxsYXJzLXpldGEudmVyY2VsLmFwcC8=", rank : "member"},
       { serviceNum: "17", hash: "aHR0cHM6Ly9pbnRlcnN0ZWxsYXI3LWJsdXNoLnZlcmNlbC5hcHAv", rank : "staff"},
       { serviceNum: "18", hash: "aHR0cHM6Ly90OTNkcjQtODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "19", hash: "aHR0cHM6Ly9pbnRlcnN0ZWxsYXI3LWF0ZncudmVyY2VsLmFwcC8=", rank : "premium"},
       { serviceNum: "20", hash: "aHR0cHM6Ly9pbnRlcnN0ZWxsYXI3LXlramcudmVyY2VsLmFwcC8=", rank : "member"},
       { serviceNum: "21", hash: "aHR0cHM6Ly9pbnRlcnN0ZWxsYXI3LXdzYm4udmVyY2VsLmFwcC8=", rank : "staff"},
       { serviceNum: "22", hash: "aHR0cHM6Ly93dDM1emgtODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "23", hash: "", rank : "premium"},
       { serviceNum: "24", hash: "aHR0cHM6Ly9pbnRlcnN0ZWxsYXI3LXlsYWIudmVyY2VsLmFwcC8=", rank : "member"},
       { serviceNum: "25", hash: "aHR0cHM6Ly9pbnRlcnN0ZWxsYXI3LW5lOGIudmVyY2VsLmFwcC8=", rank : "staff"},
       { serviceNum: "26", hash: "aHR0cHM6Ly9saHB4Y2wtODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "27", hash: "", rank : "premium"},
       { serviceNum: "28", hash: "", rank : "member"},
       { serviceNum: "29", hash: "", rank : "staff"},
       { serviceNum: "30", hash: "aHR0cHM6Ly9xNHN5am4tODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "31", hash: "", rank : "premium"},
       { serviceNum: "32", hash: "", rank : "member"},
       { serviceNum: "33", hash: "", rank : "staff"},
       { serviceNum: "34", hash: "aHR0cHM6Ly9ncTR4cXEtODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "35", hash: "", rank : "premium"},
       { serviceNum: "36", hash: "", rank : "member"},
       { serviceNum: "37", hash: "", rank : "staff"},
       { serviceNum: "38", hash: "aHR0cHM6Ly9ncTR4cXEtODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "39", hash: "", rank : "premium"},
       { serviceNum: "42", hash: "aHR0cHM6Ly96ODNuM3ctODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "46", hash: "aHR0cHM6Ly80cnk2NXYtODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "50", hash: "aHR0cHM6Ly9wZjY1bWMtODA4MC5jc2IuYXBwLw==", rank : "public"},
       { serviceNum: "100", hash: "aHR0cHM6Ly9yb2Jsb3gtaW50ZXJzdGVsbGFyLnZlcmNlbC5hcHAv", rank : "roblox"},
];
const pages = [
   { linkNum: "0.1", page: "publicLinks.html"},
   { linkNum: "0.2", page: "premiumLinks.html"},
   { linkNum: "0.3", page: "memberLinks.html"},
   { linkNum: "0.4", page: "staffLinks.html"},
   { linkNum: "0.5", page: "load.html"},
];
var b = document.getElementById("premiumdecKey");
var c = document.getElementById("memberdecKey");
var d = document.getElementById("staffdecKey");
function setupPublic() {
   services.forEach((service) => {
        if (service.rank == "public") {
          var div = document.createElement('div');
          div.setAttribute("class", "link");
          var x = document.createElement('img');
          x.setAttribute("src", "../photos/BlueInLinkBadge.png");
          x.setAttribute("width", "100");
          x.setAttribute("alt", "InthashBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onclick", "redirect(" + service.serviceNum + ")");
          
          div.appendChild(x);
          
          var y = document.createElement('p');
          y.innerText = service.serviceNum;
          y.setAttribute("class", "whiteRight");
          y.setAttribute("align", "center");
          
          div.appendChild(y);
          if (service.serviceNum < 50) {
             document.getElementById("row1").appendChild(div);
          } else {
             document.getElementById("row2").appendChild(div);
          }
        }
      });
};

function setupPremium() {
   services.forEach((service) => {
        if (service.rank == "premium") {
          var div = document.createElement('div');
          div.setAttribute("class", "link");
          var x = document.createElement('img');
          x.setAttribute("src", "../photos/GreenWeb.png");
          x.setAttribute("width", "100");
          x.setAttribute("alt", "InthashBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onclick", "redirect(" + service.serviceNum + ")");
          
          div.appendChild(x);
          
          var y = document.createElement('p');
          y.innerText = service.serviceNum;
          y.setAttribute("class", "whiteRight");
          y.setAttribute("align", "center");
          
          div.appendChild(y);
          
          document.getElementById("row1").appendChild(div);
        }
      });
};

function setupMember() {
   services.forEach((service) => {
        if (service.rank == "member") {
          var div = document.createElement('div');
          div.setAttribute("class", "link");
          var x = document.createElement('img');
          x.setAttribute("src", "../photos/RedBadge.png");
          x.setAttribute("width", "100");
          x.setAttribute("alt", "InthashBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onclick", "redirect(" + service.serviceNum + ")");
          
          div.appendChild(x);
          
          var y = document.createElement('p');
          y.innerText = service.serviceNum;
          y.setAttribute("class", "whiteRight");
          y.setAttribute("align", "center");
          
          div.appendChild(y);
          
          document.getElementById("row1").appendChild(div);
        }
      });
};

function setupStaff() {
   services.forEach((service) => {
        if (service.rank == "staff") {
          var div = document.createElement('div');
          div.setAttribute("class", "link");
          var x = document.createElement('img');
          x.setAttribute("src", "../photos/StaffLink.png");
          x.setAttribute("width", "100");
          x.setAttribute("alt", "InthashBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onclick", "redirect(" + service.serviceNum + ")");
          
          div.appendChild(x);
          
          var y = document.createElement('p');
          y.innerText = service.serviceNum;
          y.setAttribute("class", "whiteRight");
          y.setAttribute("align", "center");
          
          div.appendChild(y);
          
          document.getElementById("row1").appendChild(div);
        }
      });
};

function setupRoblox() {
   services.forEach((service) => {
        if (service.rank == "roblox") {
          var div = document.createElement('div');
          div.setAttribute("id", "link5");
           div.setAttribute("style", "display:inline-block;");
          var x = document.createElement('img');
          x.setAttribute("src", "../photos/Robloxlogo2019.png");
          x.setAttribute("width", "100");
          x.setAttribute("alt", "InthashBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onclick", "redirect(" + service.serviceNum + ")");
          
          div.appendChild(x);
          
          var y = document.createElement('p');
          y.innerText = "Roblox";
          y.setAttribute("class", "whiteRight");
          y.setAttribute("align", "center");
          
          div.appendChild(y);
          
          document.getElementById("row1").appendChild(div);
        }
      });
};
function checkout(rank) {
   if (rank == 1) {
      localStorage.setItem("checkoutRank", "premium");
      window.location.href = "checkout.html";
   } else if (rank == 2) {
      localStorage.setItem("checkoutRank", "member");
      window.location.href = "checkout.html";
   } else {
      localStorage.setItem("checkoutRank", "superMember");
      window.location.href = "checkout.html";
   }
}
function redirect(num) {
    pages.forEach((page) => {
       if (num == page.linkNum) {
          window.location.href = page.page;
        };
    });
    services.forEach((service) => {
        if (num == service.serviceNum) {
            if (service.rank == "public") {
               localStorage.setItem("hash",service.hash);
               window.location.href = "load.html";
            };
            if (service.rank == "premium") {
               localStorage.setItem("hash",service.hash);
               window.location.href = "load.html";
            };
            if (service.rank == "member") {
               localStorage.setItem("hash",service.hash);
               window.location.href = "load.html";
            };
            if (service.rank == "staff") {
               localStorage.setItem("hash",service.hash);
               window.location.href = "load.html";
            };
           if (service.rank == "roblox") {
               localStorage.setItem("hash", service.hash);
               localStorage.setItem("roblox", "true");
               window.location.href = "load.html";
            };
        };
    });
};
tempKeys.forEach((tempKey) =>{
   let dateObj = new Date();
   let month = dateObj.getUTCMonth() + 1; //months from 1-12
   let day = dateObj.getUTCDate();
   let year = dateObj.getUTCFullYear();
   let newdate = day + "/" + month + "/" + year;
   if (newdate != tempKey.activeUntill) {
      
   }
});
var account = document.getElementById("back");
keys.forEach((key) => {
   account.setAttribute("data-key", btoa(localStorage.getItem("key")));
   const decodedKey = account.getAttribute("data-key");
   if (key.key == decodedKey) {
      if (localStorage.getItem("advanced") == "true") {
         if (key.rank == "Premium") {
            document.getElementById("premium").style.display = "inline-block";
         };
         if (key.rank == "Member") {
            document.getElementById("premium").style.display = "inline-block";
            document.getElementById("member").style.display = "inline-block";
         };
         if (key.rank == "Staff") {
            document.getElementById("premium").style.display = "inline-block";
            document.getElementById("member").style.display = "inline-block";
            document.getElementById("staff").style.display = "inline-block";
         };
         if (key.rank == "Owner") {
            document.getElementById("premium").style.display = "inline-block";
            document.getElementById("member").style.display = "inline-block";
            document.getElementById("staff").style.display = "inline-block";
         };
      };
   };
});
