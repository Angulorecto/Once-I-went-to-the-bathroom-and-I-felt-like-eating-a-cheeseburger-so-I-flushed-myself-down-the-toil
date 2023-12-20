function setupPublic() {
   services.forEach((service) => {
        if (service.rank == "public") {
          var div = document.createElement('div');
          div.setAttribute("class", "link");
          var x = document.createElement('img');
          x.setAttribute("src", "../photos/BlueInLinkBadge.png");
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
