const keys = [
   { rank: "Staff", name: "Static", key: "Static" },
   { rank: "Owner", name: "Ethan", key: "Icy13" },
   { rank: "Staff", name: "Matthew", key: "Math01" },
   { rank: "Member", name: "Test", key: "Member" },
   { rank: "Staff", name: "Caleb", key: "Calo" },
   { rank: "Staff", name: "BJ", key: "Bejota" },
];
const inactivekeys = [
   { rank: "Premium", name: "Inactive", key: "Inactive" },
];
const services = [
       { serviceNum: "1", hash: "", rank: "staff"},
       { serviceNum: "2", hash: "", rank : "public"},
       { serviceNum: "3", hash: "", rank : "premium"},
       { serviceNum: "4", hash: "", rank : "member"},
       { serviceNum: "5", hash: "", rank : "staff"},
       { serviceNum: "6", hash: "", rank : "public"},
       { serviceNum: "7", hash: "", rank : "premium"},
       { serviceNum: "8", hash: "", rank : "member"},
       { serviceNum: "9", hash: "", rank : "staff"},
       { serviceNum: "10", hash: "", rank : "public"},
       { serviceNum: "11", hash: "", rank : "premium"},
       { serviceNum: "12", hash: "", rank : "member"},
       { serviceNum: "13", hash: "", rank : "staff"},
       { serviceNum: "14", hash: "", rank : "public"},
       { serviceNum: "15", hash: "", rank : "premium"},
       { serviceNum: "16", hash: "", rank : "member"},
       { serviceNum: "17", hash: "", rank : "staff"},
       { serviceNum: "18", hash: "", rank : "public"},
       { serviceNum: "19", hash: "", rank : "premium"},
       { serviceNum: "20", hash: "", rank : "member"},
       { serviceNum: "21", hash: "", rank : "staff"},
       { serviceNum: "22", hash: "", rank : "public"},
       { serviceNum: "23", hash: "", rank : "premium"},
       { serviceNum: "24", hash: "", rank : "member"},
       { serviceNum: "25", hash: "", rank : "staff"},
       { serviceNum: "26", hash: "", rank : "public"},
       { serviceNum: "27", hash: "", rank : "premium"},
       { serviceNum: "28", hash: "", rank : "member"},
       { serviceNum: "29", hash: "", rank : "staff"},
       { serviceNum: "30", hash: "", rank : "public"},
       { serviceNum: "31", hash: "", rank : "premium"},
       { serviceNum: "32", hash: "", rank : "member"},
       { serviceNum: "33", hash: "", rank : "staff"},
       { serviceNum: "34", hash: "", rank : "public"},
       { serviceNum: "35", hash: "", rank : "premium"},
       { serviceNum: "36", hash: "", rank : "member"},
       { serviceNum: "37", hash: "", rank : "staff"},
       { serviceNum: "38", hash: "", rank : "public"},
       { serviceNum: "39", hash: "", rank : "premium"}
];
const pages = [
   { hashNum: "0.1", hash: "publicLinks.html" },
   { hashNum: "0.2", hash: "premiumLinks.html" },
   { hashNum: "0.3", hash: "memberLinks.html" },
   { hashNum: "0.4", hash: "staffLinks.html" },
];

function setupPublic() {
   services.forEach((service) => {
        if (service.rank == "public") {
          var div = document.createElement('div');
          div.setAttribute("class", "hash");
          var x = document.createElement('img');
          x.setAttribute("src", "../photos/BlueInhashBadge.png");
          x.setAttribute("width", "100");
          x.setAttribute("alt", "InthashBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onmouseout", "this.style.transition='width 0.5s'; this.style.width='100px';");
          x.setAttribute("onmouseover", "this.style.transition='width 0.5s'; this.style.width='120px';");
          x.setAttribute("onclick", "storeNum(" + service.serviceNum + ")");
          
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

function setupPremium() {
   services.forEach((service) => {
        if (service.rank == "premium") {
          var div = document.createElement('div');
          div.setAttribute("class", "hash");
          var x = document.createElement('img');
          x.setAttribute("src", "../photos/GreenWeb.png");
          x.setAttribute("width", "100");
          x.setAttribute("alt", "InthashBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onmouseout", "this.style.transition='width 0.5s'; this.style.width='100px';");
          x.setAttribute("onmouseover", "this.style.transition='width 0.5s'; this.style.width='120px';");
          x.setAttribute("onclick", "storeNum(" + service.serviceNum + ")");
          
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
          div.setAttribute("class", "hash");
          var x = document.createElement('img');
          x.setAttribute("src", "../photos/RedBadge.png");
          x.setAttribute("width", "100");
          x.setAttribute("alt", "InthashBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onmouseout", "this.style.transition='width 0.5s'; this.style.width='100px';");
          x.setAttribute("onmouseover", "this.style.transition='width 0.5s'; this.style.width='120px';");
          x.setAttribute("onclick", "storeNum(" + service.serviceNum + ")");
          
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
          div.setAttribute("class", "hash");
          var x = document.createElement('img');
          x.setAttribute("src", "../photos/Staffhash.png");
          x.setAttribute("width", "100");
          x.setAttribute("alt", "InthashBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onmouseout", "this.style.transition='width 0.5s'; this.style.width='100px';");
          x.setAttribute("onmouseover", "this.style.transition='width 0.5s'; this.style.width='120px';");
          x.setAttribute("onclick", "storeNum(" + service.serviceNum + ")");
          
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

function setupAcKeys() {
   keys.forEach((inkey) => {
        var k = document.createElement('div');
        k.setAttribute("align","center");
        k.setAttribute("style","background-color:rgb(33,38,45); border-radius:15px;");
        k.setAttribute("class","key");
        document.getElementById("active").appendChild(k);
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
        document.body.appendChild(k);
      });
};

function setupInKeys() {
   inactivekeys.forEach((inkey) => {
        var y = document.createElement('div');
        y.setAttribute("align","center");
        y.setAttribute("style","background-color:rgb(33,38,45); border-radius:15px;");
        y.setAttribute("class","key");
        document.getElementById("inactive").appendChild(y);
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
        document.body.appendChild(k);
      });
};

function load(num) {
   services.forEach((service) => {
      if (num == service.serviceNum) {
         if (service.rank == "public") {
            localStorage.setItem("hash", service.hash);
         } else if (service.rank == "premium") {
            if (localStorage.getItem("key") != "") {
               keys.forEach((key) => {
                  if (localStorage.getItem("key") == key.key) {
                     
                  }
               });
            }
         } else if (service.rank == "member") {
            
         } else {
            
         }
      }
   });
   window.location.href = "load.html";
}

function redirect(num) {
    pages.forEach((page) => {
       if (num == page.hashNum) {
            window.location.href = page.hash;
        };
    });
    services.forEach((service) => {
        if (num == service.serviceNum) {
            if (service.rank == "public") {
                decode(service.hash);
            };
            if (service.rank == "premium") {
                if (localStorage.getItem("key") != " ") {
                    keys.forEach((key) => {
                        if (localStorage.getItem("key") == key.key) {
                            if (key.rank == "Premium") {
                                window.location.href = service.hash;
                            } else if (key.rank == "Member") {
                                window.location.href = service.hash;
                            } else if (key.rank == "Staff") {
                                window.location.href = service.hash;
                            } else if (key.rank == "Owner") {
                                window.location.href = service.hash;
                            } else {
                               alert("You're trying to use a key that is at the wrong rank.\nPlease upgrade to get this rank.");
                            };
                        } else {
                            inactiveKeys.forEach((inkey) => {
                                if (localStorage.getItem("key") == inkey.key) {
                                    alert("Sorry the key you have on your account is inactive.\nIf you think this is a mistake go to:\nrebrand.ly/inhashrepeal");
                                };
                            });
                        };
                    });
                } else {
                    let input = prompt("Please type in your id key.");
                    keys.forEach((key) => {
                        if (key.key == input) {
                           if (key.rank == "Premium") {
                              window.location.href = service.hash;
                           } else if (key.rank == "Member") {
                              window.location.href = service.hash;
                           } else if (key.rank == "Staff") {
                              window.location.href = service.hash;
                           } else if (key.rank == "Owner") {
                              window.location.href = service.hash;
                           } else {
                               alert("You're trying to use a key that is at the wrong rank.\nPlease upgrade to get this rank.");
                            };
                        };
                    });
                    inactiveKeys.forEach((inkey) => {
                        if (input == inkey.key) {
                            alert("This key is inactive.\nIf you think this is a mistake, please go to:\nrebrand.ly/inhashrepeal");
                        };
                    });
                };
            };
            if (service.imgSrc == "pictures/RedBadge.png") {
                if (localStorage.getItem("key") != " ") {
                    keys.forEach((key) => {
                        if (localStorage.getItem("key") == key.key) {
                           if (key.rank == "Member") {
                              window.location.href = service.hash;
                           } else if (key.rank == "Staff") {
                              window.location.href = service.hash;
                           } else if (key.rank == "Owner") {
                              window.location.href = service.hash;
                           } else {
                               alert("You're trying to use a key that is at the wrong rank.\nPlease upgrade to get this rank.");
                            };
                        } else {
                            inactiveKeys.forEach((inkey) => {
                                if (localStorage.getItem("key") == inkey.key) {
                                    alert("Sorry the key you have on your account is inactive.\nIf you think this is a mistake go to:\nrebrand.ly/inhashrepeal");
                                };
                            });
                        };
                    });
                } else {
                    let input = prompt("Please type in your id key.");
                    keys.forEach((key) => {
                        if (key.key == input) {
                            if (key.rank == "Member") {
                                window.location.href = service.hash;
                            } else if (key.rank == "Staff") {
                                window.location.href = service.hash;
                            } else if (key.rank == "Owner") {
                                window.location.href = service.hash;
                            } else {
                               alert("You're trying to use a key that is at the wrong rank.\nPlease upgrade to get this rank.");
                            };
                        };
                    });
                    inactiveKeys.forEach((inkey) => {
                        if (input == inkey.key) {
                            alert("This key is inactive.\nIf you think this is a mistake, please go to:\nrebrand.ly/inhashrepeal");
                        };
                    });
                };
            };
            if (service.imgSrc == "pictures/Staffhash.png") {
                if (localStorage.getItem("key") != " ") {
                    keys.forEach((key) => {
                        if (localStorage.getItem("key") == key.key) {
                           if (key.rank == "Staff") {
                              window.location.href = service.hash;
                           } else if (key.rank == "Owner") {
                              window.location.href = service.hash;
                           } else {
                               alert("You're trying to use a key that is at the wrong rank.\nPlease upgrade to get this rank.");
                            };
                        } else {
                            inactiveKeys.forEach((inkey) => {
                                if (localStorage.getItem("key") == inkey.key) {
                                    alert("Sorry the key you have on your account is inactive.\nIf you think this is a mistake go to:\nrebrand.ly/inhashrepeal");
                                };
                            });
                        };
                    });
                } else {
                    let input = prompt("Please type in your id key.");
                    keys.forEach((key) => {
                        if (key.key == input) {
                            if (key.rank == "Staff") {
                                window.location.href = service.hash;
                            } else if (key.rank == "Owner") {
                                window.location.href = service.hash;
                            } else {
                               alert("You're trying to use a key that is at the wrong rank.\nPlease upgrade to get this rank.");
                            };
                        };
                    });
                    inactiveKeys.forEach((inkey) => {
                        if (input == inkey.key) {
                            alert("This key is inactive.\nIf you think this is a mistake, please go to:\nrebrand.ly/inhashrepeal");
                        };
                    });
                };
            };
        };
    });
};
