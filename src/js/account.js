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
        var home = document.getElementById("HomeVid");
        var v404 = document.getElementById("404Vid");
        backgrounds.forEach((background) => {
          if (home.value == background.name) {
            localStorage.setItem("HomeBG", background.name);
          } else if (v404.value == background.name) {
            localStorage.setItem("404BG", background.name);
          }
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
