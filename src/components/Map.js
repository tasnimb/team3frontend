import React from 'react'

export const Map = (inBound, outBound) => {
    return(
        <div className="mapSquare">
            <h1>Gangs of London Route</h1>
            <iframe
                title="Google Map"
                width="600"
                height="450"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBbMF8RmakgiAM7bUmKab0M_pclQTitGfs&origin=Terminal+5,London+UK&destination=Telemark+Norway&mode=flying">
            </iframe>
        </div>

    )

}





