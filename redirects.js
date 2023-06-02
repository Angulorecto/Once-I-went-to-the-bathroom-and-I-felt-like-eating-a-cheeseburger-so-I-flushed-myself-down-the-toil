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
   if (linkNumber == 0.1) {
      window.location.href = "publicLinks.html";
   }
   if (linkNumber == 0.2) {
      window.location.href = "premiumLinks.html";
   }
   if (linkNumber == 0.3) {
      window.location.href = "memberLinks.html";
   }
   if (linkNumber == 0.4) {
      window.location.href = "staffLinks.html";
   }
   if (linkNumber == 1) {
      let key = prompt("Please insert your id key.");
      if (key == "") {
         window.location.href = "index.html";
      } else if (key != "Icy8X8ZSM4") {
         window.location.href = "index.html";
      } else {
         window.location.href = "redirects/redirect1.html";
      }
   }
   if (linkNumber == 2) {
      let key = prompt("Please insert your id key.");
      if (key == "") {
         window.location.href = "index.html";
      } else if (key != "Icy8X8ZSM4") {
         window.location.href = "index.html";
      } else {
         window.location.href = "redirects/redirect2.html";
      }
   }
   if (linkNumber == 3) {
      let key = prompt("Please insert your id key.");
      if (key == "") {
         window.location.href = "index.html";
      } else if (key != "Icy8X8ZSM4") {
         window.location.href = "index.html";
      } else {
         window.location.href = "redirects/redirect3.html";
      }
   }
   if (linkNumber == 4) {
     window.location.href = "redirects/redirect4.html";
   }
  if (linkNumber == 5) {
    window.location.href = "redirects/redirect5.html";
  }
  if (linkNumber == 6) {
    window.location.href = "redirects/redirect6.html";
  }
  if (linkNumber == 7) {
    window.location.href = "redirects/redirect7.html";
  }
  if (linkNumber == 8) {
    window.location.href = "redirects/redirect8.html";
  }
  if (linkNumber == 9) {
    window.location.href = "redirects/redirect9.html";
  }
  if (linkNumber == 10) {
    window.location.href = "https://certain-snap-venture-research.onrender.com/";
  }
  if (linkNumber == 11) {
    window.location.replace("https://refer-perforate-extreme-loop.onrender.com/");
  }
  if (linkNumber == 12) {
    window.location.replace("https://contradiction-movement-state-ghostwriter.onrender.com/");
  }
  if (linkNumber == 13) {
    window.location.replace("https://assault-oppose-virtue-tree.onrender.com/");
  }
  if (linkNumber == 14) {
    window.location.replace("https://accent-threshold-farewell.onrender.com/");
  }
  if (linkNumber == 15) {
    window.location.replace("https://committee-myth-repeat.onrender.com/");
  }
  if (linkNumber == 16) {
    window.location.replace("https://contrast-adventure-pause.onrender.com/");
  }
  if (linkNumber == 17) {
    window.location.replace("https://ethan-is-cool.onrender.com/");
  }
  if (linkNumber == 18) {
    window.location.replace("https://floor-confuse-sample.onrender.com/");
  }
  if (linkNumber == 19) {
    window.location.replace("https://promotion-suppress-mine.onrender.com/");
  }
  if (linkNumber == 20) {
    window.location.replace("https://constitution-commemorate-navy.onrender.com/");
  }
  if (linkNumber == 21) {
    window.location.replace("https://exploration-federation-unfortunate.onrender.com/");
  }
  if (linkNumber == 22) {
    window.location.replace("https://engineer-aunt-technology.onrender.com/");
  }
  if (linkNumber == 23) {
    window.location.replace("https://undertake-recruit-instrument.onrender.com/");
  }
  if (linkNumber == 24) {
    window.location.replace("https://rare-penetrate-authorise.onrender.com/");
  }
  if (linkNumber == 25) {
    window.location.replace("https://promise-rugby-grudge.onrender.com/");
  }
  if (linkNumber == 26) {
    window.location.replace("https://dough-lemon-despair.onrender.com/");
  }
  if (linkNumber == 27) {
    window.location.replace("https://ancestor-vein-proposal.onrender.com/");
  }
  if (linkNumber == 28) {
    window.location.replace("https://drift-widen-courtesy.onrender.com/");
  }
  if (linkNumber == 29) {
    window.location.replace("https://side-finished-tumble.onrender.com/");
  }
  if (linkNumber == 30) {
    window.location.replace("https://push-owner-patient.onrender.com/");
  }
}
