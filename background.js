let activeTab = null;
let activeStartTime = null;
let siteData = {};

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    trackTime(tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        trackTime(tab.url);
    }
});

function trackTime(url) {
    if (!url || !url.startsWith("http")) return;

    const hostname = new URL(url).hostname;

    if (activeTab) {
        const timeSpent = (Date.now() - activeStartTime) / 1000;
        siteData[activeTab] = (siteData[activeTab] || 0) + timeSpent;
        chrome.storage.local.set({ siteData });
    }

    activeTab = hostname;
    activeStartTime = Date.now();
}

chrome.windows.onFocusChanged.addListener((windowId) => {
    if (windowId === chrome.windows.WINDOW_ID_NONE) {
        trackTime(null);
    }
});