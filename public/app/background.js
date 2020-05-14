// function call() {
// Called when the user clicks on the browser action
/*global chrome*/
chrome.browserAction.onClicked.addListener(() => {
   // Send a message to the active tab
   chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'getHeadlines' });
   });
});
// }
// call();

// chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//    chrome.tabs.sendMessage(tabs[0].id, { type: 'getHeadlines' });
// });