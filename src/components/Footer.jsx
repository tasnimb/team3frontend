import React from 'react'
import { useHistory } from "react-router-dom";

const Footer = () => {
    let history = useHistory();
    return (
        <footer style ={{backgroundColor:"white"}}>

        <p style = {{color:"grey", textAlign:"center", textDecoration:"underline", cursor:"pointer"}}
        onClick={() =>  {history.push("/policy")}}> Privacy policy </p>
      </footer>
    )
}

export default Footer

