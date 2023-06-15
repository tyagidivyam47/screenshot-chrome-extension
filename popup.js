document.addEventListener('DOMContentLoaded', function() {
    var captureButton = document.getElementById('capture');
    captureButton.addEventListener('click', captureScreenshot);
  });
  
  function captureScreenshot() {
    chrome.windows.getCurrent(function(mainWindow) {
      var screenWidth = screen.width;
      var newWidth = Math.round(screenWidth * 0.8);
  
      chrome.windows.update(mainWindow.id, { width: newWidth, left: screenWidth - newWidth }, function() {
        chrome.windows.create({ type: 'popup', url: 'screen2.html', width: newWidth }, function(newWindow) {
          chrome.tabs.captureVisibleTab(mainWindow.id, { format: 'png' }, function(screenshotUrl) {
            // Send the screenshot URL to the new window
            chrome.tabs.sendMessage(newWindow.tabs[0].id, { action: 'showScreenshot', screenshotUrl: screenshotUrl });
          });
        });
      });
    });
  }
  