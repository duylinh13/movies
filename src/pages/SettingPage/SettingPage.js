// import React from "react";

// const PageNotFound = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: "40px",
//         flexDirection: "column",
//       }}
//     >
//       <h2>404</h2>
//       <h1>PageNotFound</h1>
//     </div>
//   );
// };

// export default PageNotFound;
import React from "react";

import "./SettingPage.css";

const SettingPage = () => {
  const userSettings = {
    darkMode: true,
    notifications: false,
    language: "English",
    playbackQuality: "High",
    autoPlay: true,
  };

  const handleSaveSettings = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="setting-page">
      <h1>Settings</h1>
      <div className="setting-content">
        <div className="setting-group">
          <h2>Appearance</h2>
          <div className="setting-option">
            <label>Dark Mode</label>
            <input
              type="checkbox"
              checked={userSettings.darkMode}
              onChange={() => {}}
            />
          </div>
        </div>

        <div className="setting-group">
          <h2>Notifications</h2>
          <div className="setting-option">
            <label>Enable Notifications</label>
            <input
              type="checkbox"
              checked={userSettings.notifications}
              onChange={() => {
                // Implement logic to toggle notifications
              }}
            />
          </div>
        </div>

        <div className="setting-group">
          <h2>Language</h2>
          <div className="setting-option">
            <label>Select Language</label>
            <select
              value={userSettings.language}
              onChange={(e) => {
                // Implement logic to update language preference
              }}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              {/* Add more language options */}
            </select>
          </div>
        </div>

        <div className="setting-group">
          <h2>Playback Quality</h2>
          <div className="setting-option">
            <label>Select Playback Quality</label>
            <select
              value={userSettings.playbackQuality}
              onChange={(e) => {
                // Implement logic to update playback quality preference
              }}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
              {/* Add more quality options */}
            </select>
          </div>
        </div>

        <div className="setting-group">
          <h2>AutoPlay</h2>
          <div className="setting-option">
            <label>AutoPlay Videos</label>
            <input
              type="checkbox"
              checked={userSettings.autoPlay}
              onChange={() => {
                // Implement logic to toggle auto-play preference
              }}
            />
          </div>
        </div>
      </div>
      <button className="save-button" onClick={handleSaveSettings}>
        Save Settings
      </button>
    </div>
  );
};

export default SettingPage;
