import React, {useState} from 'react';
import './App.css';

function App() {
    const [lightSwitch, toggleLightSwitch] = useState(false);
    console.log(lightSwitch)
  return (
    <main className={lightSwitch ? "on" : "off"}>
      <section>
        <div className="dot"></div>
        <button type="button" onClick={() => toggleLightSwitch(!lightSwitch)}>{lightSwitch ? "Turn off" : "Turn on"}</button>
      </section>
    </main>
  );
}

export default App;
