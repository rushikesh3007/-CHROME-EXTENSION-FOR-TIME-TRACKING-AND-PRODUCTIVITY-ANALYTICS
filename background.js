let siteTimes = {};
let activeTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  if (activeTab) {
    let endTime = Date.now();
    let timeSpent = (endTime - startTime) / 1000;
    siteTimes[activeTab] = (siteTimes[activeTab] || 0) + timeSpent;
  }

  let tab = await chrome.tabs.get(activeInfo.tabId);
  
  // Ensure tab URL exists and is valid
  if (tab.url && tab.url.startsWith("http")) {
    activeTab = new URL(tab.url).hostname;
    startTime = Date.now();
  } else {
    activeTab = null; // Ignore invalid or chrome:// pages
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getTimeData") {
    sendResponse(siteTimes);
  }
});