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
   { linkNum: "0.1", page: "publicLinks.html"},
   { linkNum: "0.2", page: "premiumLinks.html"},
   { linkNum: "0.3", page: "memberLinks.html"},
   { linkNum: "0.4", page: "staffLinks.html"},
];

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
                if (localStorage.getItem("key") != " ") {
                    keys.forEach((key) => {
                        if (localStorage.getItem("key") == key.key) {
                            if (key.rank == "Premium") {
                               localStorage.setItem("hash",service.hash);
                               window.location.href = "load.html";
                            } else if (key.rank == "Member") {
                               localStorage.setItem("hash",service.hash);
                               window.location.href = "load.html";
                            } else if (key.rank == "Staff") {
                               localStorage.setItem("hash",service.hash);
                               window.location.href = "load.html";
                            } else if (key.rank == "Owner") {
                               localStorage.setItem("hash",service.hash);
                               window.location.href = "load.html";
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
                              localStorage.setItem("hash",service.hash);
                              window.location.href = "load.html";
                           } else if (key.rank == "Member") {
                              localStorage.setItem("hash",service.hash);
                              window.location.href = "load.html";
                           } else if (key.rank == "Staff") {
                              localStorage.setItem("hash",service.hash);
                              window.location.href = "load.html";
                           } else if (key.rank == "Owner") {
                              localStorage.setItem("hash",service.hash);
                              window.location.href = "load.html";
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
            if (service.rank == "member") {
                if (localStorage.getItem("key") != " ") {
                    keys.forEach((key) => {
                        if (localStorage.getItem("key") == key.key) {
                           if (key.rank == "Member") {
                              localStorage.setItem("hash",service.hash);
                              window.location.href = "load.html";
                           } else if (key.rank == "Staff") {
                              localStorage.setItem("hash",service.hash);
                              window.location.href = "load.html";
                           } else if (key.rank == "Owner") {
                              localStorage.setItem("hash",service.hash);
                              window.location.href = "load.html";
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
                               localStorage.setItem("hash",service.hash);
                              window.location.href = "load.html";
                            } else if (key.rank == "Staff") {
                               localStorage.setItem("hash",service.hash);
                              window.location.href = "load.html";
                            } else if (key.rank == "Owner") {
                               localStorage.setItem("hash",service.hash);
                              window.location.href = "load.html";
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
