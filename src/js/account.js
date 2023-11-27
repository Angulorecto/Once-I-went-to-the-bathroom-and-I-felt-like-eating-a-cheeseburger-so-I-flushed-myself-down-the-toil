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

      function advanced() {
        var area = document.getElementById("advancedArea");
        var checked = area.children[1].children[0].value;
        if (checked == true) {
          localStorage.setItem("advanced","true");
        } else {
          localStorage.setItem("advanced","false");
        }
      };
