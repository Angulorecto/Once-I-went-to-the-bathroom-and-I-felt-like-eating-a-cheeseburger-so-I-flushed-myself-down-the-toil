const keys = [
   { rank: "Staff", name: "Static", key: "Static" },
   { rank: "Owner", name: "Ethan", key: "Icy13" },
   { rank: "Staff", name: "Matthew", key: "Math01" },
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
   { linkNum: "17", link: "redirects/redirect17.html" },
   { linkNum: "18", link: "redirects/redirect18.html" },
   { linkNum: "19", link: "redirects/redirect19.html" },
   { linkNum: "20", link: "redirects/redirect20.html" },
];
const members = [
   { linkNum: "1", link: "redirects/redirect1.html" },
   { linkNum: "3", link: "redirects/redirect3.html" },
];
const staff = [
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
   });
   members.forEach((member) => {
      if (member.linkNum == linkNumber) {
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
              };
           });
        };
   });
   staff.forEach((staffs) => {
        if (premium.linkNum == linkNumber) {
           let input = prompt("Please insert your id key.");
           keys.forEach((keyr) => {
              if (keyr.key == input) {
                 if (keyr.rank == "Staff") {
                    window.location.href = staffs.link;
                 };
                 if (keyr.rank == "Owner") {
                    window.location.href = staffs.link;
                 };
              };
           });
        };
   });
}
