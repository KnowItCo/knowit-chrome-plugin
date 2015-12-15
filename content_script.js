// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.action === 'getSelection') {
        var selection = "";
        if (window.getSelection)
            selection = window.getSelection().toString();
        sendResponse(selection);
    }
});
