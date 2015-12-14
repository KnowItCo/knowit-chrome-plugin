var knowItHandler = function() {
    console.log("knowItHandler");
}

chrome.contextMenus.create({
    title: "KnowIt!",
    contexts:["selection", "page", "link", "image"],
    onclick: knowItHandler,
});
