import React, { useEffect } from 'react';
import './App.css'

function App() {
  const jitsiContainerId = 'jitsi-container-id'

  const start = () => {
    const domain = 'meet.jit.si'
    const options = {
      roomName: 'AzureMeetClient',
      height: 1000,
      parentNode: document.getElementById(jitsiContainerId)
    }

    const api = new window.JitsiMeetExternalAPI(domain, options)
    api.addEventListener('videoConferenceJoined', () => {
      console.log('usuario entrou')
      api.executeCommand('displayName', 'Jean')
    })
  }

  useEffect(() => {
    if (window.JitsiMeetExternalAPI) {
      start()
    } else {
      alert('jitsi ainda nao careregou')
    }
  })

  return (
    <div>
      <div id={jitsiContainerId} className="jitsi" />
    </div>
  );
}

export default App;
