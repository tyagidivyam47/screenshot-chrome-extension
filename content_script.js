// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   if (changeInfo.status === "complete") {
//   // Take a screenshot of the current tab
//   chrome.tabs.captureVisibleTab(tabId, function(screenshotData) {
//   // Save the screenshot to the user's computer
//   var screenshotFile = new File(screenshotData, "screenshot.png");
//   screenshotFile.save();
//   }})