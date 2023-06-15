document.addEventListener('DOMContentLoaded', function() {
    var screenshotPreview = document.getElementById('screenshot-preview');
  
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.action === 'showScreenshot') {
        screenshotPreview.src = request.screenshotUrl;
        screenshotPreview.addEventListener('click', function(event) {
          var circleMark = document.createElement('div');
          circleMark.classList.add('circle-mark');
          circleMark.style.left = (event.clientX - 10) + 'px';
          circleMark.style.top = (event.clientY - 10) + 'px';
          document.body.appendChild(circleMark);
        });
      }
    });
  });
  