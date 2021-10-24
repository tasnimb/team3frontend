import React from 'react'

export const GetFlight = ({getFlightPrice}) => {
    return(
        <div className="pSquare">
            <h1>Gangs of London</h1>
             <div className="btn">
                <button type="button" onClick={() => getFlightPrice()} className="btn btn-warning">Select Flight</button>
             </div>
        </div>

    )

}
