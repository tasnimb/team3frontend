import React from 'react'

export const RegisterButton = ({getRegistered}) => {
    return(
        <div className="rSquare">
            <h1>Gangs of London</h1>
             <div className="btn">
                <button type="button" onClick={() => getRegistered()} className="btn btn-warning">Register</button>
             </div>
        </div>

    )

}