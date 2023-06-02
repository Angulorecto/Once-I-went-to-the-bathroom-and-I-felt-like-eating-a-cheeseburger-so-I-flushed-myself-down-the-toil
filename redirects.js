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
   { linkNum: "", link: "" },
   {},
];
const premiums = [
   { linkNum: "11", link: "redirects/redirect11.html" },
   {},
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
                 } else if (keyr.rank == "Member") {
                    window.location.href = premium.link;
                 } else if (keyr.rank == "Staff") {
                    window.location.href = premium.link;
                 } else if (keyr.rank == "Owner") {
                    window.location.href = premium.link;
                 } else {
                    window.location.href = "index.html"
                 };
              } else {
                 window.location.href = "index.html";
              };
           });
        };
   });
   members.forEach((member) => {
        if (member.linkNum == linkNumber) {
           window.location.href = member.link;
        };
   });
   staff.forEach((staffs) => {
        if (staffs.linkNum == linkNumber) {
           window.location.href = staffs.link;
        };
   });
}
