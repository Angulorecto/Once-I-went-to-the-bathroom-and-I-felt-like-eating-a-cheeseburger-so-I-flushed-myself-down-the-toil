const keys = [
   { rank: "Staff", name: "Static", key: "Static" },
   { rank: "Owner", name: "Ethan", key: "Icy13" },
   { rank: "Staff", name: "Matthew", key: "Math01" },
   { rank: "Member", name: "Test", key: "Member" },
];
const inactivekeys = [
   { rank: "Premium", name: "Inactive", key: "Inactive" },
];
const services = [
       { serviceNum: "1", link: "redirects/redirect1.html", rank: "staff"},
       { serviceNum: "2", link: "redirects/redirect2.html", rank : "public"},
       { serviceNum: "3", link: "redirects/redirect3.html", rank : "premium"},
       { serviceNum: "4", link: "redirects/redirect4.html", rank : "member"},
       { serviceNum: "5", link: "redirects/redirect5.html", rank : "staff"},
       { serviceNum: "6", link: "redirects/redirect6.html", rank : "public"},
       { serviceNum: "7", link: "redirects/redirect7.html", rank : "premium"},
       { serviceNum: "8", link: "redirects/redirect8.html", rank : "member"},
       { serviceNum: "9", link: "redirects/redirect9.html", rank : "staff"},
       { serviceNum: "10", link: "redirects/redirect10.html", rank : "public"},
       { serviceNum: "11", link: "redirects/redirect11.html", rank : "premium"},
       { serviceNum: "12", link: "redirects/redirect12.html", rank : "member"},
       { serviceNum: "13", link: "redirects/redirect13.html", rank : "staff"},
       { serviceNum: "14", link: "redirects/redirect14.html", rank : "public"},
       { serviceNum: "15", link: "redirects/redirect15.html", rank : "premium"},
       { serviceNum: "16", link: "redirects/redirect16.html", rank : "member"},
       { serviceNum: "17", link: "redirects/redirect17.html", rank : "staff"},
       { serviceNum: "18", link: "redirects/redirect18.html", rank : "public"},
       { serviceNum: "19", link: "redirects/redirect19.html", rank : "premium"},
       { serviceNum: "20", link: "redirects/redirect20.html", rank : "member"},
       { serviceNum: "21", link: "redirects/redirect21.html", rank : "staff"},
       { serviceNum: "22", link: "redirects/redirect22.html", rank : "public"},
       { serviceNum: "23", link: "redirects/redirect23.html", rank : "premium"},
       { serviceNum: "24", link: "redirects/redirect24.html", rank : "member"},
       { serviceNum: "25", link: "redirects/redirect25.html", rank : "staff"},
       { serviceNum: "26", link: "redirects/redirect26.html", rank : "public"},
       { serviceNum: "27", link: "redirects/redirect27.html", rank : "premium"},
       { serviceNum: "28", link: "redirects/redirect28.html", rank : "member"},
       { serviceNum: "29", link: "redirects/redirect29.html", rank : "staff"},
       { serviceNum: "30", link: "redirects/redirect30.html", rank : "public"},
       { serviceNum: "31", link: "redirects/redirect31.html", rank : "premium"},
       { serviceNum: "32", link: "redirects/redirect32.html", rank : "member"},
       { serviceNum: "33", link: "redirects/redirect33.html", rank : "staff"},
       { serviceNum: "34", link: "redirects/redirect34.html", rank : "public"},
       { serviceNum: "35", link: "redirects/redirect35.html", rank : "premium"},
       { serviceNum: "36", link: "redirects/redirect36.html", rank : "member"},
       { serviceNum: "37", link: "redirects/redirect37.html", rank : "staff"},
       { serviceNum: "38", link: "redirects/redirect38.html", rank : "public"},
       { serviceNum: "39", link: "redirects/redirect39.html", rank : "premium"}
];
const pages = [
   { linkNum: "0.1", link: "publicLinks.html" },
   { linkNum: "0.2", link: "premiumLinks.html" },
   { linkNum: "0.3", link: "memberLinks.html" },
   { linkNum: "0.4", link: "staffLinks.html" },
];

function setupPublic() {
   services.forEach((service) => {
        if (service.rank == "public") {
          var div = document.createElement('div');
          div.setAttribute("class", "link");
          var x = document.createElement('img');
          x.setAttribute("src", "../photos/BlueInLinkBadge.png");
          x.setAttribute("width", "100");
          x.setAttribute("alt", "IntLinkBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onmouseout", "this.style.transition='width 0.5s'; this.style.width='100px';");
          x.setAttribute("onmouseover", "this.style.transition='width 0.5s'; this.style.width='120px';");
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

function setupPremium() {
   services.forEach((service) => {
        if (service.rank == "premium") {
          var div = document.createElement('div');
          div.setAttribute("class", "link");
          var x = document.createElement('img');
          x.setAttribute("src", "../photos/GreenWeb.png");
          x.setAttribute("width", "100");
          x.setAttribute("alt", "IntLinkBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onmouseout", "this.style.transition='width 0.5s'; this.style.width='100px';");
          x.setAttribute("onmouseover", "this.style.transition='width 0.5s'; this.style.width='120px';");
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
          x.setAttribute("alt", "IntLinkBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onmouseout", "this.style.transition='width 0.5s'; this.style.width='100px';");
          x.setAttribute("onmouseover", "this.style.transition='width 0.5s'; this.style.width='120px';");
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
          x.setAttribute("alt", "IntLinkBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onmouseout", "this.style.transition='width 0.5s'; this.style.width='100px';");
          x.setAttribute("onmouseover", "this.style.transition='width 0.5s'; this.style.width='120px';");
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

function redirect(num) {
    pages.forEach((page) => {
        if (num == page.linkNum) {
            window.location.href = page.link;
        };
    });
    services.forEach((service) => {
        if (num == service.serviceNum) {
            if (service.rank == "public") {
                window.location.href = service.link;
            };
            if (service.rank == "premium") {
                if (localStorage.getItem("key") != " ") {
                    keys.forEach((key) => {
                        if (localStorage.getItem("key") == key.key) {
                            if (key.rank == "Premium") {
                                window.location.href = service.link;
                            } else if (key.rank == "Member") {
                                window.location.href = service.link;
                            } else if (key.rank == "Staff") {
                                window.location.href = service.link;
                            } else if (key.rank == "Owner") {
                                window.location.href = service.link;
                            } else {
                               alert("You're trying to use a key that is at the wrong rank.\nPlease upgrade to get this rank.");
                            };
                        } else {
                            inactiveKeys.forEach((inkey) => {
                                if (localStorage.getItem("key") == inkey.key) {
                                    alert("Sorry the key you have on your account is inactive.\nIf you think this is a mistake go to:\nrebrand.ly/inlinkrepeal");
                                };
                            });
                        };
                    });
                } else {
                    let input = prompt("Please type in your id key.");
                    keys.forEach((key) => {
                        if (key.key == input) {
                           if (key.rank == "Premium") {
                              window.location.href = service.link;
                           } else if (key.rank == "Member") {
                              window.location.href = service.link;
                           } else if (key.rank == "Staff") {
                              window.location.href = service.link;
                           } else if (key.rank == "Owner") {
                              window.location.href = service.link;
                           } else {
                               alert("You're trying to use a key that is at the wrong rank.\nPlease upgrade to get this rank.");
                            };
                        };
                    });
                    inactiveKeys.forEach((inkey) => {
                        if (input == inkey.key) {
                            alert("This key is inactive.\nIf you think this is a mistake, please go to:\nrebrand.ly/inlinkrepeal");
                        };
                    });
                };
            };
            if (service.imgSrc == "pictures/RedBadge.png") {
                if (localStorage.getItem("key") != " ") {
                    keys.forEach((key) => {
                        if (localStorage.getItem("key") == key.key) {
                           if (key.rank == "Member") {
                              window.location.href = service.link;
                           } else if (key.rank == "Staff") {
                              window.location.href = service.link;
                           } else if (key.rank == "Owner") {
                              window.location.href = service.link;
                           } else {
                               alert("You're trying to use a key that is at the wrong rank.\nPlease upgrade to get this rank.");
                            };
                        } else {
                            inactiveKeys.forEach((inkey) => {
                                if (localStorage.getItem("key") == inkey.key) {
                                    alert("Sorry the key you have on your account is inactive.\nIf you think this is a mistake go to:\nrebrand.ly/inlinkrepeal");
                                };
                            });
                        };
                    });
                } else {
                    let input = prompt("Please type in your id key.");
                    keys.forEach((key) => {
                        if (key.key == input) {
                            if (key.rank == "Member") {
                                window.location.href = service.link;
                            } else if (key.rank == "Staff") {
                                window.location.href = service.link;
                            } else if (key.rank == "Owner") {
                                window.location.href = service.link;
                            } else {
                               alert("You're trying to use a key that is at the wrong rank.\nPlease upgrade to get this rank.");
                            };
                        };
                    });
                    inactiveKeys.forEach((inkey) => {
                        if (input == inkey.key) {
                            alert("This key is inactive.\nIf you think this is a mistake, please go to:\nrebrand.ly/inlinkrepeal");
                        };
                    });
                };
            };
            if (service.imgSrc == "pictures/StaffLink.png") {
                if (localStorage.getItem("key") != " ") {
                    keys.forEach((key) => {
                        if (localStorage.getItem("key") == key.key) {
                           if (key.rank == "Staff") {
                              window.location.href = service.link;
                           } else if (key.rank == "Owner") {
                              window.location.href = service.link;
                           } else {
                               alert("You're trying to use a key that is at the wrong rank.\nPlease upgrade to get this rank.");
                            };
                        } else {
                            inactiveKeys.forEach((inkey) => {
                                if (localStorage.getItem("key") == inkey.key) {
                                    alert("Sorry the key you have on your account is inactive.\nIf you think this is a mistake go to:\nrebrand.ly/inlinkrepeal");
                                };
                            });
                        };
                    });
                } else {
                    let input = prompt("Please type in your id key.");
                    keys.forEach((key) => {
                        if (key.key == input) {
                            if (key.rank == "Staff") {
                                window.location.href = service.link;
                            } else if (key.rank == "Owner") {
                                window.location.href = service.link;
                            } else {
                               alert("You're trying to use a key that is at the wrong rank.\nPlease upgrade to get this rank.");
                            };
                        };
                    });
                    inactiveKeys.forEach((inkey) => {
                        if (input == inkey.key) {
                            alert("This key is inactive.\nIf you think this is a mistake, please go to:\nrebrand.ly/inlinkrepeal");
                        };
                    });
                };
            };
        };
    });
};
