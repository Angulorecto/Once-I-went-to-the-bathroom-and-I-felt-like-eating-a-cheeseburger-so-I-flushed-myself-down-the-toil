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
       { serviceName: "silver", serviceNum: "1", link: "redirects/redirect1.html", imgSrc: "pictures/RedBadge.png", pClass: "whiteRight"},
       { serviceName: "child", serviceNum: "2", link: "redirects/redirect2.html", imgSrc: "pictures/RedBadge.png", pClass: "whiteRight"},
       { serviceName: "pear", serviceNum: "3", link: "redirects/redirect3.html", imgSrc: "pictures/RedBadge.png", pClass: "whiteRight"},
       { serviceName: "budget", serviceId: "srv-cgtvqlt269vbmeo540eg", serviceNum: "4", link: "redirects/redirect4.html", imgSrc: "pictures/StaffLink.png", pClass: "whiteRight"},
       { serviceName: "campaign", serviceId: "srv-cgtvqqt269vbmeo54n9g", serviceNum: "5", link: "redirects/redirect5.html", imgSrc: "pictures/BlueInLinkBadge.png", pClass: "whiteRight"},
       { serviceName: "head", serviceId: "srv-cgs5i0g2qv20m9ntkj1g", serviceNum: "6", link: "redirects/redirect6.html", imgSrc: "pictures/BlueInLinkBadge.png", pClass: "whiteRight"},
       { serviceName: "overcharge", serviceId: "srv-cgs5igrk9u53u204dddg", serviceNum: "7", link: "redirects/redirect7.html", imgSrc: "pictures/BlueInLinkBadge.png", pClass: "whiteRight"},
       { serviceName: "project", serviceId: "srv-cgs5irjk9u53u204focg", serviceNum: "8", link: "redirects/redirect8.html", imgSrc: "pictures/BlueInLinkBadge.png", pClass: "whiteRight"},
       { serviceName: "ignite", serviceId: "srv-cgs5j6ks3fvk982tlbtg", serviceNum: "9", link: "redirects/redirect9.html", imgSrc: "pictures/BlueInLinkBadge.png", pClass: "whiteRight"},
       { serviceName: "certian", serviceId: "srv-cgs5jj82qv20m9nukq00", serviceNum: "10", link: "redirects/redirect10.html", imgSrc: "pictures/BlueInLinkBadge.png", pClass: "whiteRight"},
       { serviceName: "refer", serviceId: "srv-cgs5jqss3fvk982tq8rg", serviceNum: "11", link: "redirects/redirect11.html", imgSrc: "pictures/BlueInLinkBadge.png", pClass: "whiteRight"},
       { serviceName: "contradiction", serviceId: "srv-cgs5k2rk9u53u204p8l0", serviceNum: "12", link: "redirects/redirect12.html", imgSrc: "pictures/BlueInLinkBadge.png", pClass: "whiteRight"},
       { serviceName: "assault", serviceId: "srv-cgs5kcss3fvk982u04ag", serviceNum: "13", link: "redirects/redirect13.html", imgSrc: "pictures/BlueInLinkBadge.png", pClass: "whiteRight"},
       { serviceName: "accent", serviceId: "srv-cgs5kjbk9u53u204sn1g", serviceNum: "14", link: "redirects/redirect14.html", imgSrc: "pictures/BlueInLinkBadge.png", pClass: "whiteRight"},
       { serviceName: "committee", serviceId: "srv-cgs5krbk9u53u204uaug", serviceNum: "15", link: "redirects/redirect15.html", imgSrc: "pictures/GreenWeb.png", pClass: "whiteRight"},
       { serviceName: "contrast", serviceId: "srv-cgs5l34s3fvk982u5k50", serviceNum: "16", link: "redirects/redirect16.html", imgSrc: "pictures/GreenWeb.png", pClass: "whiteRight"},
       { serviceName: "ethan", serviceId: "srv-cgs5lbjk9u53u2051ui0", serviceNum: "17", link: "redirects/redirect17.html", imgSrc: "pictures/StaffLink.png", pClass: "whiteRight"},
       { serviceName: "floor", serviceId: "srv-cgs5lp4s3fvk982u914g", serviceNum: "18", link: "redirects/redirect18.html", imgSrc: "pictures/GreenWeb.png", pClass: "whiteRight"},
       { serviceName: "promotion", serviceId: "srv-cgt9s7d269vbmetbe80g", serviceNum: "19", link: "redirects/redirect19.html", imgSrc: "pictures/GreenWeb.png", pClass: "whiteRight"},
       { serviceName: "constitution", serviceId: "srv-cgt9sgl269vbmetbeisg", serviceNum: "20", link: "redirects/redirect20.html", imgSrc: "pictures/GreenWeb.png", pClass: "whiteRight"},
       { serviceName: "push", serviceId: "srv-cgtvqdt269vbmeo52hs0", serviceNum: "21", link: "redirects/redirect21.html", imgSrc: "pictures/RedBadge.png", pClass: "whiteRight"},
       { serviceName: "side", serviceId: "srv-cgtvq2t269vbmeo51ms0", serviceNum: "22", link: "redirects/redirect22.html", imgSrc: "pictures/RedBadge.png", pClass: "whiteRight"},
       { serviceName: "exploration", serviceId: "srv-cgt9ssd269vbmetbfep0", serviceNum: "23", link: "redirects/redirect23.html", imgSrc: "pictures/RedBadge.png", pClass: "whiteRight"},
       { serviceName: "engineer", serviceId: "srv-cgtdttt269vbmettnktg", serviceNum: "24", link: "redirects/redirect24.html", imgSrc: "pictures/RedBadge.png", pClass: "whiteRight"},
       { serviceName: "undertake", serviceId: "srv-cgtvljt269vbmeo46e60", serviceNum: "25", link: "redirects/redirect25.html", imgSrc: "pictures/RedBadge.png", pClass: "whiteRight"},
       { serviceName: "rare", serviceId: "srv-cgtvngqut4mcfrnu96kg", serviceNum: "26", link: "redirects/redirect26.html", imgSrc: "pictures/RedBadge.png", pClass: "whiteRight"},
       { serviceName: "promise", serviceId: "srv-cgtvntaut4mcfrnuccug", serviceNum: "27", link: "redirects/redirect27.html", imgSrc: "pictures/RedBadge.png", pClass: "whiteRight"},
       { serviceName: "dough", serviceId: "srv-cgtvp9d269vbmeo4s8b0", serviceNum: "28", link: "redirects/redirect28.html", imgSrc: "pictures/StaffLink.png", pClass: "whiteRight"},
       { serviceName: "ancestor", serviceId: "srv-cgtvpiaut4mcfrnun8f0", serviceNum: "29", link: "redirects/redirect29.html", imgSrc: "pictures/StaffLink.png", pClass: "whiteRight"},
       { serviceName: "drift", serviceId: "srv-cgtvpql269vbmeo50qgg", serviceNum: "30", link: "redirects/redirect30.html", imgSrc: "pictures/StaffLink.png", pClass: "whiteRight"},
       { serviceName: "nightmare", serviceId: "srv-cgtvr2d269vbmeo56u2g", serviceNum: "31", link: "redirects/redirect31.html", imgSrc: "pictures/GreenWeb.png", pClass: "whiteRight"},
       { serviceName: "desk", serviceId: "srv-cgtvr85269vbmeo57crg", serviceNum: "32", link: "redirects/redirect32.html", imgSrc: "pictures/GreenWeb.png", pClass: "whiteRight"},
       { serviceName: "hero", serviceId: "srv-cgtvrdt269vbmeo59b50", serviceNum: "33", link: "redirects/redirect33.html", imgSrc: "pictures/GreenWeb.png", pClass: "whiteRight"},
       { serviceName: "personality", serviceId: "srv-cgtvrit269vbmeo5a3c0", serviceNum: "34", link: "redirects/redirect34.html", imgSrc: "pictures/GreenWeb.png", pClass: "whiteRight"},
       { serviceName: "army", serviceId: "srv-cgtvroaut4mcfrnv7kmg", serviceNum: "35", link: "redirects/redirect35.html", imgSrc: "pictures/GreenWeb.png", pClass: "whiteRight"},
       { serviceName: "orgy", serviceId: "srv-cgtvrtt269vbmeo5boig", serviceNum: "36", link: "redirects/redirect36.html", imgSrc: "pictures/StaffLink.png", pClass: "whiteRight"},
       { serviceName: "relation", serviceId: "srv-cgtvs3d269vbmeo5cnog", serviceNum: "37", link: "redirects/redirect37.html", imgSrc: "pictures/StaffLink.png", pClass: "whiteRight"},
       { serviceName: "authority", serviceId: "srv-cgtvs8t269vbmeo5dpv0", serviceNum: "38", link: "redirects/redirect38.html", imgSrc: "pictures/StaffLink.png", pClass: "whiteRight"},
       { serviceName: "automatic", serviceId: "srv-cgtvtbd269vbmeo5kfdg", serviceNum: "39", link: "redirects/redirect39.html", imgSrc: "pictures/StaffLink.png", pClass: "whiteRight"}
];
const pages = [
   { linkNum: "0.1", link: "publicLinks.html" },
   { linkNum: "0.2", link: "premiumLinks.html" },
   { linkNum: "0.3", link: "memberLinks.html" },
   { linkNum: "0.4", link: "staffLinks.html" },
];

function setupPublic() {
   services.forEach((service) => {
        if (service.imgSrc == "pictures/BlueInLinkBadge.png") {
          var div = document.createElement('div');
          div.setAttribute("class", "link");
          var x = document.createElement('img');
          x.setAttribute("src", service.imgSrc);
          x.setAttribute("width", "100");
          x.setAttribute("alt", "IntLinkBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onmouseout", "this.style.transition='width 0.5s'; this.style.width='100px';");
          x.setAttribute("onmouseover", "this.style.transition='width 0.5s'; this.style.width='120px';");
          x.setAttribute("onclick", "redirect(" + service.serviceNum + ")");
          
          div.appendChild(x);
          
          var y = document.createElement('p');
          y.innerText = service.serviceName;
          y.setAttribute("class", service.pClass);
          y.setAttribute("align", "center");
          
          div.appendChild(y);
          
          document.getElementById("row1").appendChild(div);
        }
      });
};

function setupPremium() {
   services.forEach((service) => {
        if (service.imgSrc == "pictures/GreenWeb.png") {
          var div = document.createElement('div');
          div.setAttribute("class", "link");
          var x = document.createElement('img');
          x.setAttribute("src", service.imgSrc);
          x.setAttribute("width", "100");
          x.setAttribute("alt", "IntLinkBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onmouseout", "this.style.transition='width 0.5s'; this.style.width='100px';");
          x.setAttribute("onmouseover", "this.style.transition='width 0.5s'; this.style.width='120px';");
          x.setAttribute("onclick", "redirect(" + service.serviceNum + ")");
          
          div.appendChild(x);
          
          var y = document.createElement('p');
          y.innerText = service.serviceName;
          y.setAttribute("class", service.pClass);
          y.setAttribute("align", "center");
          
          div.appendChild(y);
          
          document.getElementById("row1").appendChild(div);
        }
      });
};

function setupMember() {
   services.forEach((service) => {
        if (service.imgSrc == "pictures/RedBadge.png") {
          var div = document.createElement('div');
          div.setAttribute("class", "link");
          var x = document.createElement('img');
          x.setAttribute("src", service.imgSrc);
          x.setAttribute("width", "100");
          x.setAttribute("alt", "IntLinkBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onmouseout", "this.style.transition='width 0.5s'; this.style.width='100px';");
          x.setAttribute("onmouseover", "this.style.transition='width 0.5s'; this.style.width='120px';");
          x.setAttribute("onclick", "redirect(" + service.serviceNum + ")");
          
          div.appendChild(x);
          
          var y = document.createElement('p');
          y.innerText = service.serviceName;
          y.setAttribute("class", service.pClass);
          y.setAttribute("align", "center");
          
          div.appendChild(y);
          
          document.getElementById("row1").appendChild(div);
        }
      });
};

function setupStaff() {
   services.forEach((service) => {
        if (service.imgSrc == "pictures/StaffLink.png") {
          var div = document.createElement('div');
          div.setAttribute("class", "link");
          var x = document.createElement('img');
          x.setAttribute("src", service.imgSrc);
          x.setAttribute("width", "100");
          x.setAttribute("alt", "IntLinkBadge");
          x.setAttribute("class", "border");
          x.setAttribute("onmouseout", "this.style.transition='width 0.5s'; this.style.width='100px';");
          x.setAttribute("onmouseover", "this.style.transition='width 0.5s'; this.style.width='120px';");
          x.setAttribute("onclick", "redirect(" + service.serviceNum + ")");
          
          div.appendChild(x);
          
          var y = document.createElement('p');
          y.innerText = service.serviceName;
          y.setAttribute("class", service.pClass);
          y.setAttribute("align", "center");
          
          div.appendChild(y);
          
          document.getElementById("row1").appendChild(div);
        }
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
            if (service.imgSrc == "pictures/BlueInLinkBadge.png") {
                window.location.href = service.link;
            };
            if (service.imgSrc == "pictures/GreenWeb.png") {
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
