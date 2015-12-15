var URL = "http://www.knowit.co";

/* Create a context-menu */
chrome.contextMenus.create({
    id: "knowit",
    title: "KnowIt!",
    contexts:["selection", "page", "link", "image"]
});

/* Register a listener for the `onClicked` event */
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (tab) {
        chrome.tabs.sendMessage(tab.id, {action: 'getSelection'}, function(selection) {
            chrome.tabs.create({ url: URL + "/create?text=" + selection });
        });
    }
});
