const productiveSites = ["stackoverflow.com", "github.com"];
const unproductiveSites = ["facebook.com", "youtube.com"];

chrome.storage.local.get("siteData", (data) => {
    const siteData = data.siteData || {};
    const tableBody = document.getElementById("dataTable");

    for (let site in siteData) {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerText = site;
        cell2.innerText = siteData[site].toFixed(2);
        cell3.innerText = productiveSites.includes(site)
            ? "Productive"
            : unproductiveSites.includes(site)
            ? "Unproductive"
            : "Neutral";
    }
});