import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './index.css';

const theme = createTheme({
  palette: {
    type: 'dark', // Dark theme
    primary: {
      main: '#6B46C1', // Purple accent color
    },
    background: {
      default: '#222', // Dark background color (adjust to your preference)
      paper: '#333', // Darker background for paper elements (adjust as needed)
    },
  },
});

function App() {
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleVoiceChange = (e) => {
    setSelectedVoice(e.target.value);
  };

  const handleSpeak = () => {
    // Implement TTS logic using IBM Watson here
    // Play the generated speech
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-semibold text-purple-500">FlexTTS</h1>
          <div className="mt-4">
            <textarea
              value={text}
              onChange={handleTextChange}
              placeholder="Enter text..."
              className="w-full p-2 mb-4 rounded-lg bg-gray-800 text-white"
              rows="4"
            ></textarea>
            <select
              value={selectedVoice}
              onChange={handleVoiceChange}
              className="w-full p-2 mb-4 rounded-lg bg-gray-800 text-white"
            >
              <option value="" disabled>
                Select a voice...
              </option>
              {/* Populate options with available voices */}
            </select>
            <button
              onClick={handleSpeak}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Speak
            </button>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
