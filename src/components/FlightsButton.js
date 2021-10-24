import React from 'react'

export const FlightsButton = ({getFlights}) => {
    return(
        <div className="fSquare">
            <h1>Gangs of London</h1>
             <div className="btn">
                <button type="button" onClick={() => getFlights()} className="btn btn-warning">Get Flight</button>
             </div>
        </div>

    )

}
