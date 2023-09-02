import React, { useState, useEffect } from 'react';

function SettingsWindow() {
  const [inputDevices, setInputDevices] = useState([]);
  const [outputDevices, setOutputDevices] = useState([]);
  const [selectedInputDevice, setSelectedInputDevice] = useState('');
  const [selectedOutputDevice, setSelectedOutputDevice] = useState('');

  useEffect(() => {
    // Fetch available audio devices and update state (use IPC)
    // You'll need to establish IPC communication with the main process
  }, []);

  const handleSaveSettings = () => {
    // Send selected input and output devices to the main process (use IPC)
    // Store these settings for future use
  };

  return (
    <div>
      <h2>Audio Settings</h2>
      <div>
        <label>Select Input Device:</label>
        <select
          value={selectedInputDevice}
          onChange={(e) => setSelectedInputDevice(e.target.value)}
        >
          {inputDevices.map((device) => (
            <option key={device.id} value={device.id}>
              {device.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Output Device:</label>
        <select
          value={selectedOutputDevice}
          onChange={(e) => setSelectedOutputDevice(e.target.value)}
        >
          {outputDevices.map((device) => (
            <option key={device.id} value={device.id}>
              {device.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
}

export default SettingsWindow;
