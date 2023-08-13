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
        { serviceName: "budget", serviceId: "srv-cgtvqlt269vbmeo540eg", serviceNum: "4", link: "redirects/redirect4.html"},
        { serviceName: "campaign", serviceId: "srv-cgtvqqt269vbmeo54n9g", serviceNum: "5", link: "redirects/redirect5.html", imgSrc: "pictures/BlueInLinkBadge.png"},
        { serviceName: "head", serviceId: "srv-cgs5i0g2qv20m9ntkj1g", serviceNum: "6", link: "redirects/redirect6.html", imgSrc: "pictures/BlueInLinkBadge.png"},
        { serviceName: "overcharge", serviceId: "srv-cgs5igrk9u53u204dddg", serviceNum: "7", link: "redirects/redirect7.html", imgSrc: "pictures/BlueInLinkBadge.png"},
        { serviceName: "project", serviceId: "srv-cgs5irjk9u53u204focg", serviceNum: "8", link: "redirects/redirect8.html", imgSrc: "pictures/BlueInLinkBadge.png"},
        { serviceName: "ignite", serviceId: "srv-cgs5j6ks3fvk982tlbtg", serviceNum: "9", link: "redirects/redirect9.html", imgSrc: "pictures/BlueInLinkBadge.png"},
        { serviceName: "certian", serviceId: "srv-cgs5jj82qv20m9nukq00", serviceNum: "10", link: "redirects/redirect10.html", imgSrc: "pictures/BlueInLinkBadge.png"},
        { serviceName: "refer", serviceId: "srv-cgs5jqss3fvk982tq8rg", serviceNum: "11", link: "redirects/redirect11.html", imgSrc: "pictures/BlueInLinkBadge.png"},
        { serviceName: "contradiction", serviceId: "srv-cgs5k2rk9u53u204p8l0", serviceNum: "12", link: "redirects/redirect12.html", imgSrc: "pictures/BlueInLinkBadge.png"},
        { serviceName: "assault", serviceId: "srv-cgs5kcss3fvk982u04ag", serviceNum: "13", link: "redirects/redirect13.html", imgSrc: "pictures/BlueInLinkBadge.png"},
        { serviceName: "accent", serviceId: "srv-cgs5kjbk9u53u204sn1g", serviceNum: "14", link: "redirects/redirect14.html", imgSrc: "pictures/BlueInLinkBadge.png"},
        { serviceName: "committee", serviceId: "srv-cgs5krbk9u53u204uaug", serviceNum: "15", link: "redirects/redirect15.html"},
        { serviceName: "contrast", serviceId: "srv-cgs5l34s3fvk982u5k50", serviceNum: "16", link: "redirects/redirect16.html"},
        { serviceName: "ethan", serviceId: "srv-cgs5lbjk9u53u2051ui0", serviceNum: "17", link: "redirects/redirect17.html"},
        { serviceName: "floor", serviceId: "srv-cgs5lp4s3fvk982u914g", serviceNum: "18", link: "redirects/redirect18.html"},
        { serviceName: "promotion", serviceId: "srv-cgt9s7d269vbmetbe80g", serviceNum: "19", link: "redirects/redirect19.html"},
        { serviceName: "constitution", serviceId: "srv-cgt9sgl269vbmetbeisg", serviceNum: "20", link: "redirects/redirect20.html"},
        { serviceName: "push", serviceId: "srv-cgtvqdt269vbmeo52hs0", serviceNum: "21", link: "redirects/redirect21.html"},
        { serviceName: "side", serviceId: "srv-cgtvq2t269vbmeo51ms0", serviceNum: "22", link: "redirects/redirect22.html"},
        { serviceName: "exploration", serviceId: "srv-cgt9ssd269vbmetbfep0", serviceNum: "23", link: "redirects/redirect23.html"},
        { serviceName: "engineer", serviceId: "srv-cgtdttt269vbmettnktg", serviceNum: "24", link: "redirects/redirect24.html"},
        { serviceName: "undertake", serviceId: "srv-cgtvljt269vbmeo46e60", serviceNum: "25", link: "redirects/redirect25.html"},
        { serviceName: "rare", serviceId: "srv-cgtvngqut4mcfrnu96kg", serviceNum: "26", link: "redirects/redirect26.html"},
        { serviceName: "promise", serviceId: "srv-cgtvntaut4mcfrnuccug", serviceNum: "27", link: "redirects/redirect27.html"},
        { serviceName: "dough", serviceId: "srv-cgtvp9d269vbmeo4s8b0", serviceNum: "28", link: "redirects/redirect28.html"},
        { serviceName: "ancestor", serviceId: "srv-cgtvpiaut4mcfrnun8f0", serviceNum: "29", link: "redirects/redirect29.html"},
        { serviceName: "drift", serviceId: "srv-cgtvpql269vbmeo50qgg", serviceNum: "30", link: "redirects/redirect30.html"},
        { serviceName: "nightmare", serviceId: "srv-cgtvr2d269vbmeo56u2g", serviceNum: "31", link: "redirects/redirect31.html"},
        { serviceName: "desk", serviceId: "srv-cgtvr85269vbmeo57crg", serviceNum: "32", link: "redirects/redirect32.html"},
        { serviceName: "hero", serviceId: "srv-cgtvrdt269vbmeo59b50", serviceNum: "33", link: "redirects/redirect33.html"},
        { serviceName: "personality", serviceId: "srv-cgtvrit269vbmeo5a3c0", serviceNum: "34", link: "redirects/redirect34.html"},
        { serviceName: "army", serviceId: "srv-cgtvroaut4mcfrnv7kmg", serviceNum: "35", link: "redirects/redirect35.html"},
        { serviceName: "orgy", serviceId: "srv-cgtvrtt269vbmeo5boig", serviceNum: "36", link: "redirects/redirect36.html"},
        { serviceName: "relation", serviceId: "srv-cgtvs3d269vbmeo5cnog", serviceNum: "37", link: "redirects/redirect37.html"},
        { serviceName: "authority", serviceId: "srv-cgtvs8t269vbmeo5dpv0", serviceNum: "38", link: "redirects/redirect38.html"},
        { serviceName: "automatic", serviceId: "srv-cgtvtbd269vbmeo5kfdg", serviceNum: "39", link: "redirects/redirect39.html"}
 ];
 const pages = [
    { linkNum: "0.1", link: "publicLinks.html" },
    { linkNum: "0.2", link: "premiumLinks.html" },
    { linkNum: "0.3", link: "memberLinks.html" },
    { linkNum: "0.4", link: "staffLinks.html" },
 ];
 const publics = [
    {linkNum: "5", link: "redirects/redirect5.html" },
    {linkNum: "6", link: "redirects/redirect6.html" },
    {linkNum: "7", link: "redirects/redirect7.html" },
    {linkNum: "8", link: "redirects/redirect8.html" },
    {linkNum: "9", link: "redirects/redirect9.html" },
    {linkNum: "10", link: "redirects/redirect10.html" },
    {linkNum: "11", link: "redirects/redirect11.html" },
    {linkNum: "12", link: "redirects/redirect12.html" },
    {linkNum: "13", link: "redirects/redirect13.html" },
    {linkNum: "14", link: "redirects/redirect14.html"},
 ];
 const premiums = [
    { linkNum: "15", link: "redirects/redirect15.html" },
    { linkNum: "16", link: "redirects/redirect16.html" },
    { linkNum: "18", link: "redirects/redirect18.html" },
    { linkNum: "19", link: "redirects/redirect19.html" },
    { linkNum: "20", link: "redirects/redirect20.html" },
 ];
 const members = [
    { linkNum: "1", link: "redirects/redirect1.html" },
    { linkNum: "3", link: "redirects/redirect3.html" },
    { linkNum: "21", link: "redirects/redirect21.html" },
    { linkNum: "22", link: "redirects/redirect22.html" },
    { linkNum: "23", link: "redirects/redirect23.html" },
    { linkNum: "24", link: "redirects/redirect24.html" },
    { linkNum: "25", link: "redirects/redirect25.html" },
    { linkNum: "26", link: "redirects/redirect26.html" },
    { linkNum: "27", link: "redirects/redirect27.html" },
    { linkNum: "28", link: "redirects/redirect28.html" },
 ];
 const staffs = [
    { linkNum: "4", link: "redirects/redirect4.html" },
    { linkNum: "2", link: "redirects/redirect2.html" },
    { linkNum: "17", link: "redirects/redirect17.html" },
 ];
 
 function redirect(linkNumber) {
    pages.forEach((page) => {
         if (page.linkNum == linkNumber) {
            window.location.href = page.link;
         };
    });
    publics.forEach((public) => {
         if (public.linkNum == linkNumber) {
            window.location.href = public.link;
         };
    });
    premiums.forEach((premium) => {
         if (premium.linkNum == linkNumber) {
            if (localStorage.getItem("key")) {
               var lockey = localStorage.getItem("key");
               keys.forEach((keyw) => {
                  if (keyw.key == lockey) {
                     if (keyw.rank == "Premium") {
                        window.location.href = premium.link;
                     };
                     if (keyw.rank == "Member") {
                        window.location.href = premium.link;
                     };
                     if (keyw.rank == "Staff") {
                        window.location.href = premium.link;
                     };
                     if (keyw.rank == "Owner") {
                        window.location.href = premium.link;
                     };
                  };
               });
            } else {
               let input = prompt("Please insert your id key.");
               keys.forEach((keyr) => {
                  if (keyr.key == input) {
                     if (keyr.rank == "Premium") {
                        window.location.href = premium.link;
                     };
                     if (keyr.rank == "Member") {
                        window.location.href = premium.link;
                     };
                     if (keyr.rank == "Staff") {
                        window.location.href = premium.link;
                     };
                     if (keyr.rank == "Owner") {
                        window.location.href = premium.link;
                     };
                  };
               });
            };
         };
            inactivekeys.forEach((inkey) => {
               if (inkey.key == input) {
                  alert("Sorry this key has been deactivated.\nIf you think this was a mistake, please submit a report at:\nhttps://rebrand.ly/keysuspendrepeal");
               };
            });
         });
    members.forEach((member) => {
       if (member.linkNum == linkNumber) {
            if (localStorage.getItem("key")) {
               var lockey = localStorage.getItem("key");
               keys.forEach((keyw) => {
                  if (keyw.key == lockey) {
                     if (keyw.rank == "Member") {
                        window.location.href = premium.link;
                     };
                     if (keyw.rank == "Staff") {
                        window.location.href = premium.link;
                     };
                     if (keyw.rank == "Owner") {
                        window.location.href = premium.link;
                     };
                  };
               });
            } else {
               let input = prompt("Please insert your id key.");
               keys.forEach((keyr) => {
                  if (keyr.key == input) {
                     if (keyr.rank == "Member") {
                        window.location.href = member.link;
                     };
                     if (keyr.rank == "Staff") {
                        window.location.href = member.link;
                     };
                     if (keyr.rank == "Owner") {
                        window.location.href = member.link;
                     };
                  } else {
                     alert("Sorry, that key doesn't exist");
                  };
               });
            };
         };
            inactivekeys.forEach((inkey) => {
               if (inkey.key == input) {
                  alert("Sorry this key has been deactivated.\nIf you think this was a mistake, please submit a report at:\nhttps://rebrand.ly/keysuspendrepeal");
               };
            });
         });
    staffs.forEach((staff) => {
         if (staff.linkNum == linkNumber) {
            if (localStorage.getItem("key")) {
               var lockey = localStorage.getItem("key");
               keys.forEach((keyw) => {
                  if (keyw.key == lockey) {
                     if (keyw.rank == "Staff") {
                        window.location.href = staff.link;
                     };
                     if (keyw.rank == "Owner") {
                        window.location.href = staff.link;
                     };
                  };
               });
            } else {
               let input = prompt("Please insert your id key.");
               keys.forEach((keyr) => {
                  if (keyr.key == input) {
                     if (keyr.rank == "Staff") {
                        window.location.href = staff.link;
                     };
                     if (keyr.rank == "Owner") {
                        window.location.href = staff.link;
                     };
                  } else {
                     alert("Sorry, that key doesn't exist");
                  };
               });
            };
         };
            inactivekeys.forEach((inkey) => {
               if (inkey.key == input) {
                  alert("Sorry this key has been deactivated.\nIf you think this was a mistake, please submit a report at:\nhttps://rebrand.ly/keysuspendrepeal");
               };
            });
         });
        };
