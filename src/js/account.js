const backgrounds = [
        { name: "None", src: "" },
        { name: "Ring of fire", src: "../videos/bg.mp4" },
        { name: "Dust", src: "../videos/bg2.mp4" },
      ];
      const places = [
        { prefix: "Home" },
        { prefix: "404" },
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

      places.forEach((place) => {
        let area = document.getElementById(place.prefix + "Vid");
        area.value = localStorage.getItem(place.prefix + "BG");
      });
      
      var key = localStorage.getItem("key") || "No key";
      var username = localStorage.getItem("username") || "No name";
      var keyarea = document.getElementById("key1");
      var userarea = document.getElementById("username1");
      userarea.innerHTML = username;
      keyarea.innerHTML = key;
      if (key == "No key") {
        document.getElementById("button").style.display = "none";
      }
      function removeKey() {
        localStorage.setItem("key", "");
        location.reload();
      }
