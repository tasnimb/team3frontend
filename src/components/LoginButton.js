import React from 'react'

export const LoginButton = ({getLogin}) => {
    return(
        <div className="lSquare">
            <h1>Gangs of London</h1>
             <div className="btn">
                <button type="button" onClick={() => getLogin()} className="btn btn-warning">Login</button>
             </div>
        </div>

    )

}
