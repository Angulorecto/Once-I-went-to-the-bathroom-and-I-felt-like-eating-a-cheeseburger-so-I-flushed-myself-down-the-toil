const localkey = localStorage.getItem("key");
      const localuser = localStorage.getItem("username");
      var account = document.getElementById("account");

      if (localkey == "") {
        account.innerHTML = "";
      } else {
        account.innerHTML = "Manage Account"
      };
      if (localuser == "") {
        account.innerHTML = "";
      } else {
        account.innerHTML = "Manage Account"
      };

      keys.forEach((key) => {
        account.setAttribute("data-key", btoa(localStorage.getItem("key")));
        const decodedKey = account.getAttribute("data-key");
        if (key.key == decodedKey) {
          if (key.rank == "Premium") {
            document.getElementById("link2").style.display = "inline-block";
            document.getElementById("keyInfo").style.display = "none";
          };
          
          if (key.rank == "Member") {
            document.getElementById("link2").style.display = "inline-block";
            document.getElementById("link3").style.display = "inline-block";
            document.getElementById("keyInfo").style.display = "none";
          };

          if (key.rank == "Staff") {
            document.getElementById("link2").style.display = "inline-block";
            document.getElementById("link3").style.display = "inline-block";
            document.getElementById("link4").style.display = "inline-block";
            document.getElementById("staffArea").style.display = "block";
            document.getElementById("keyInfo").style.display = "none";
          };

          if (key.rank == "Owner") {
            document.getElementById("link2").style.display = "inline-block";
            document.getElementById("link3").style.display = "inline-block";
            document.getElementById("link4").style.display = "inline-block";
            document.getElementById("staffArea").style.display = "block";
            document.getElementById("keyInfo").style.display = "none";
            document.getElementById("keyMgr").style.display = "block";
            document.getElementById("cookieBan").style.display = "block";
            document.getElementById("localBan").style.display = "block";
          };
        };
      });
