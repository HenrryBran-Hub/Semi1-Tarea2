import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import './App.css';

function App() {
  const webcamRef = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={450}
          height={450}
          style={{ borderRadius: '10px' }}
        />
        <h1>
            <p className='titulo'>Henrry David Bran Velásquez</p>
            <p className='titulo'>201314439</p>
        </h1>
      </header>
    </div>
  );
}

export default App;
