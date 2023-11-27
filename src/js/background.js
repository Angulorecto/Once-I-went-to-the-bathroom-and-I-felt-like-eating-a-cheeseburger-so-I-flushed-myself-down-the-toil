const backgrounds = [
        { name: "None", src: "" },
        { name: "Ring of fire", src: "../videos/bg.mp4" },
        { name: "Dust", src: "../videos/bg2.mp4" },
      ];
      const places = [
        { prefix: "Home" },
        { prefix: "404" },
        { prefix: "Account" },
        { prefix: "Pricing" },
        { prefix: "PublicLinks" },
        { prefix: "PremiumLinks" },
        { prefix: "MemberLinks" },
        { prefix: "StaffLinks" },
      ];
      backgrounds.forEach((background) => {
        places.forEach((place) => {
          let clone = document.createElement("option");
          clone.setAttribute("class", "whiteRight");
          clone.innerHTML = background.name;
          document.getElementById(place.prefix + "Vid").appendChild(clone);
        });
      });
      function changeBackground() {
        places.forEach((place) => {
          let l = document.getElementById(place.prefix + "Vid");
          backgrounds.forEach((background) => {
            if (l.value == background.name) {
              localStorage.setItem(place.prefix + "BG", background.name);
            }
          });
        });
        location.reload();
      }

      function setBackground() {
        places.forEach((place) => {
          let l = document.getElementById(place.prefix + "VidSrc");
          backgrounds.forEach((background) => {
            if (localStorage.getItem(place.prefix + "BG") == background.name) {
              l.setAttribute("src", background.src));
            }
          });
        });
      }

      places.forEach((place) => {
        let area = document.getElementById(place.prefix + "Vid");
        area.value = localStorage.getItem(place.prefix + "BG");
      });
