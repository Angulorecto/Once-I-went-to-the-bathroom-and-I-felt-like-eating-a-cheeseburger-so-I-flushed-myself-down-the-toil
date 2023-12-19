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

function setupAcKeys() {
   keys.forEach((key) => {
        var k = document.createElement('div');
        k.setAttribute("align","center");
        k.setAttribute("style","background-color:rgb(33,38,45); border-radius:15px;");
        k.setAttribute("class","key");
        var e = document.createElement('p');
        e.innerText = inkey.name;
        e.setAttribute("class","whiteRight");
        var w = document.createElement('p');
        w.innerText = inkey.key;
        w.setAttribute("class","greenRight");
        var disc = document.createElement('button');
        disc.innerHTML = "Disable";
        disc.setAttribute("class","blackRight");
        disc.setAttribute("style","border-radius:15px; background-color:rgb(255,0,0)");
        disc.setAttribute("onclick","");
        k.appendChild(e);
        k.appendChild(w);
        k.appendChild(disc);
        document.getElementById("active").appendChild(k);
      });
};

function setupInKeys() {
   inactivekeys.forEach((inkey) => {
        var y = document.createElement('div');
        y.setAttribute("align","center");
        y.setAttribute("style","background-color:rgb(33,38,45); border-radius:15px;");
        y.setAttribute("class","key");
        var s = document.createElement('p');
        s.innerText = inkey.name;
        s.setAttribute("class","whiteRight");
        var r = document.createElement('p');
        r.innerText = inkey.key;
        r.setAttribute("class","redRight");
        var dis = document.createElement('button');
        dis.innerHTML = "Enable";
        dis.setAttribute("class","blackRight");
        dis.setAttribute("style","border-radius:15px; background-color:rgb(0,255,0)");
        dis.setAttribute("onclick","");
        y.appendChild(s);
        y.appendChild(r);
        y.appendChild(dis);
        document.getElementById("inactive").appendChild(y);
      });
};
