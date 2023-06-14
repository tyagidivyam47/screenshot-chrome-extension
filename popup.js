document.addEventListener('DOMContentLoaded', function () {
    var captureButton = document.getElementById('capture');
    captureButton.addEventListener('click', captureScreenshot);
});

function captureScreenshot() {
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (screenshotUrl) {
        // Do something with the screenshot URL (e.g., save or display)
        var url = screenshotUrl;

        var image = new Image();
        image.src = url;
        document.getElementById('container').appendChild(image);
        console.log("Screenshot Captured");
    });
}
