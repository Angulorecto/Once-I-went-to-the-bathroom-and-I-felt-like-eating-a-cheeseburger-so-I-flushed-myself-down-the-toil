const sandboxes = [
  {src: "https://codesandbox.io/p/github/AnguloRecto2/interstellar/main?workspaceId=8fe142b0-d5eb-4938-b53a-1edafd427e66", name: "Alt"},
  {src: "https://codesandbox.io/p/github/Insider-Interstellar-Network/Interstellars/main?workspaceId=8fe142b0-d5eb-4938-b53a-1edafd427e66", name: "Insider0"},
  {src: "https://codesandbox.io/p/github/Insider-Interstellar-Network/Interstellar0.5/main?workspaceId=8fe142b0-d5eb-4938-b53a-1edafd427e66", name: "Insider0.5"},
  {src: "", name: "Insider1"},
  {src: "", name: "Insider1.5"},
  {src: "", name: "Insider2"},
  {src: "", name: "Insider3"},
  {src: "", name: "Insider4"},
  {src: "", name: "Insider5"},
  {src: "", name: "Insider6"},
  {src: "", name: "Insider7"},
  {src: "", name: "Insider8"},
  {src: "", name: "Insider9"},
  {src: "", name: ""},
];
function codesandbox(src) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src", src);
  iframe.height = "1";
  iframe.width = "1";
}
