import React, { useEffect } from 'react';
import './style.css'
// import VideoConf from '../video-conf';

function DraggablePannel() {

    useEffect(() => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.innerHTML = 'function dragElement(e){var n=0,t=0,o=0,u=0;function d(e){(e=e||window.event).preventDefault(),o=e.clientX,u=e.clientY,document.onmouseup=l,document.onmousemove=m}function m(d){(d=d||window.event).preventDefault(),n=o-d.clientX,t=u-d.clientY,o=d.clientX,u=d.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function l(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=d:e.onmousedown=d}dragElement(document.getElementById("mydiv"));'
        document.body.appendChild(script)
    }, [])

    return (
        <>
            <h1>Draggable DIV Element</h1>

            <p>Click and hold the mouse button down while moving the DIV element</p>

            <div id="mydiv">
                <div id="mydivheader">Click here to move</div>
                <p>Move</p>
                <p>this</p>
                <p>DIV</p>
            </div>

        </>
    )
}

export default DraggablePannel;