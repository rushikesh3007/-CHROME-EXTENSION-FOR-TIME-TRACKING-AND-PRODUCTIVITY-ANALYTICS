chrome.runtime.sendMessage({ action: "getTimeData" }, (response) => {
    console.log("Time spent on sites:", response);
});
