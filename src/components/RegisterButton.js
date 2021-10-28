import React from 'react'

export const RegisterButton = ({getRegister}) => {
    return(
        <div className="rSquare">
            <h1>Gangs of London</h1>
             <div className="btn">
                <button type="button" onClick={() => getRegister()} className="btn btn-warning">Register</button>
             </div>
        </div>

    )

}