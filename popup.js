document.getElementById("viewDashboard").addEventListener("click", function () {
    chrome.tabs.create({ url: "dashboard.html" });
});