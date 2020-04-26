


// const {shell,remote} = require('electron')
// const webview = document.getElementById('webview1')
// webview.addEventListener('new-window', (e) => {
//   const protocol = require('url').parse(e.url).protocol
//   if (protocol === 'http:' || protocol === 'https:') {
//     //shell.openExternal(e.url)
//     // window.open(e.url)
//     webview.loadURL(e.url);
//     console.log(e)
//   }
// });

const  webview = document.getElementById('webview1');

function onClick_API(){
 webview.loadURL("https://www.baidu.com")
}
function onClick_163(){
  webview.loadURL("https://www.163.com")
}
