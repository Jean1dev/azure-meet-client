import React, { useState, useEffect, useCallback } from 'react';

function VideoConf({ nick }) {
    console.log(nick)
    const jistsiContainerId = 'jitsi-container-id'
    const [loading, setLoading] = useState(false)
    const containerStyle = {
        width: '400px',
        // height: '400px'
    }

    const jitsiContainerStyle = {
        display: (loading ? 'none' : 'block'),
        width: '100%',
        height: '100%'
    }

    const start = useCallback(() => {
        const domain = 'meet.jit.si'
        const options = {
            roomName: 'TesteSuquinho',
            height: 400,
            parentNode: document.getElementById(jistsiContainerId),
            interfaceConfigOverwrite: {
                filmStripOnly: false,
                SHOW_JITSI_WATERMARK: false
            },
            configOverwrite: {
                disableSimulcast: false
            }
        }

        const api = new window.JitsiMeetExternalAPI(domain, options)
        api.addEventListener('videoConferenceJoined', () => {
            console.log('um usuario entro')
            setLoading(false)
            api.executeCommand('displayName', nick)
        })
    }, [nick])

    useEffect(() => {
        if (window.JitsiMeetExternalAPI) {
            start()
        } else {
            alert('jitsi nao carregou')
        }
    }, [start])

    return (
        <div id={jistsiContainerId} style={containerStyle}>
            {loading && <h1>Carregando</h1>}
            <div id={jistsiContainerId} style={jitsiContainerStyle}/>
        </div>
    )
}

export default VideoConf;