# -CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS


Description

This Chrome extension helps users track the time spent on different websites and provides detailed productivity analytics. It categorizes websites as productive (e.g., coding platforms, educational sites) or unproductive (e.g., social media, entertainment sites) and generates weekly reports to help users optimize their time.

The extension features a popup UI for real-time tracking, a backend server for storing user data, and a dashboard for analytics visualization. Users can customize their website classifications and receive productivity insights.

Key Features:

Automatic Time Tracking: Logs the duration spent on each website.

Website Categorization: Classifies sites into productive/unproductive.

Data Storage: Saves browsing history to a backend database.

Analytics Dashboard: Displays insights and weekly reports.

Custom Rules: Users can modify website classifications.

Notifications: Alerts users about excessive time on unproductive sites.

Tech Stack

Frontend:

Chrome Extension APIs (Tabs, Storage, Alarms)

JavaScript/React.js (for UI components)

Bootstrap/TailwindCSS (for styling)

Backend:

Node.js with Express.js (for API endpoints)

MongoDB/PostgreSQL (for data storage)

JWT Authentication (for secure data access)

Installation

Prerequisites:

Google Chrome

Node.js & npm

MongoDB/PostgreSQL setup (if using a database backend)

Steps:

Clone the repository:

git clone https://github.com/your-repo/chrome-time-tracker.git
cd chrome-time-tracker

Install dependencies:

cd backend
npm install

Start the backend server:

npm start

Load the extension:

Open Chrome and navigate to chrome://extensions/.

Enable "Developer mode".

Click "Load unpacked" and select the extension folder.


##Deployment

Backend: Deploy on Heroku, AWS, or Railway.

Frontend: Pack extension and submit to the Chrome Web Store.

OUTPUT: ![Image](https://github.com/user-attachments/assets/c5200446-7edc-483d-af8d-80d341851876)
