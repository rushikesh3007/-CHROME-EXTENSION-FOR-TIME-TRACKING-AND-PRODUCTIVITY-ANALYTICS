document.addEventListener("DOMContentLoaded", () => {
    chrome.runtime.sendMessage({ action: "getTimeData" }, (response) => {
      let timeList = document.getElementById("timeList");
      for (let site in response) {
        let li = document.createElement("li");
        li.textContent = `${site}: ${response[site].toFixed(2)} seconds`;
        timeList.appendChild(li);
      }
    });
});
  