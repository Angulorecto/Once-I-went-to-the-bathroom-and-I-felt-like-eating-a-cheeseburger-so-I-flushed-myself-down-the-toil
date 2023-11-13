const elmtsSrc = [
  { type: "Storage", id: "homeVideoSrc" },
  { type: "Storage", id: "404VideoSrc" },
  { type: "Storage", id: "accountVideoSrc" },
  { type: "Storage", id: "publicVideoSrc" },
  { type: "Storage", id: "premiumVideoSrc" },
  { type: "Storage", id: "memberVideoSrc" },
  { type: "Storage", id: "staffVideoSrc" },
  { type: "Element", id: "homeVidSrc" },
  { type: "Element", id: "404vidsrc" },
  { type: "Element", id: "accountVidSrc" },
  { type: "Element", id: "publicVidSrc" },
  { type: "Element", id: "premiumVidSrc" },
  { type: "Element", id: "memberVidSrc" },
  { type: "Element", id: "staffVidSrc" },
]

const videos = [
  { name: "Ring of fire", src: "../videos/bg.mp4" },
  { name: "Dust", src: "../videos/bg2.mp4" },
]

const keywords = [
  { word: "public" },
  { word: "premium" },
  { word: "member" },
  { word: "staff" },
]

function changeVideo() {
  videos.forEach((video) => {
    elmtsSrc.forEach((elmt) => {
      if (elmt.type == "Input") {
        if (document.getElementById(elmt.id).value == video.name) {
          keywords.forEach((keyword) => {
            if (elmt.id.includes(keyword.word) == true) {
              elmtsSrc.forEach((elmt) => {
                if (elmt.type == "Storage") {
                  if (elmt.id.includes(keyword.word) == true) {
                    localStorage.setItem(elmt.id, video.name);
                  }
                }
              });
            }
          });
        }
      }
    });
  });
}

elmtsSrc.forEach((elmt) => {
  if (elmt.type == "Storage") {
    var id = localStorage.getItem(elmt.id);
  } else {
    var element = document.getElementById(elmt.id);
  }
  videos.forEach((video) => {
    if (id == video.name) {
      element.src = video.src;
    }
  }
}
