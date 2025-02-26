# -CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

COMPANY: CODTECH IT SOLUTIONS

NAME: Rushikesh Ghogare

INTERN ID: CT6WLJF

DOMAIN: Full Stack Web Development

DURATION: 6 WEEKS

MENTOR: NEELA SANTHOSH


# Time Tracker Chrome Extension

## Description

The **Time Tracker** Chrome Extension is a productivity tool designed to help users monitor the time they spend on different websites while browsing. This extension records and stores time spent on each domain, providing valuable insights into browsing habits. It is particularly useful for individuals looking to track work hours, manage online distractions, and improve overall productivity.

## Features

- Tracks time spent on each website.
- Records browsing history locally using Chrome's storage API.
- Provides a summary of time spent on various domains.
- Simple and lightweight, running in the background without affecting performance.
- Secure and privacy-friendly: no data is shared with external servers.

## Installation

1. Download or clone this repository.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer Mode" in the top right corner.
4. Click "Load Unpacked" and select the folder containing the extension files.
5. The extension will be installed and available in the Chrome toolbar.

## How It Works

1. The background script listens for tab changes and records time spent on active websites.
2. When a tab is changed or closed, the elapsed time is stored against the respective domain.
3. Users can view their browsing history and time logs through the extension's popup interface.

## Files and Structure

- `manifest.json` - Defines the extension's metadata and permissions.
- `background.js` - Tracks active tab time and stores data.
- `popup.html` - Displays recorded time logs.
- `popup.js` - Handles UI logic and data retrieval.
- `icon.png` - The extension icon.

## Permissions

- `tabs`: Allows the extension to access active tab URLs.
- `storage`: Enables local storage of time-tracking data.

## Future Enhancements

- Export data to CSV for detailed analysis.
- Add daily and weekly time reports.
- Implement category-wise time tracking.
- Provide user notifications when exceeding time limits on specific websites.

## License

This project is licensed under the MIT License. Feel free to modify and distribute it as needed.

## Contribution

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Make your changes and commit them.
4. Open a pull request.

## Contact

For any inquiries, please create an issue on the repository.



OUTPUT: ![Image](https://github.com/user-attachments/assets/d901474a-833a-427d-b625-a07055da63e7)
