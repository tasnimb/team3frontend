import React from 'react'

export const LoginButton = ({getLoggedIn}) => {
    return(
        <div className="lSquare">
            <h1>Gangs of London</h1>
             <div className="btn">
                <button type="button" onClick={() => getLoggedIn()} className="btn btn-warning">Login</button>
             </div>
        </div>

    )

}
