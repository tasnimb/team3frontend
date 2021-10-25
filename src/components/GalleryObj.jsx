import React from 'react'
import '../App.css';
import { useHistory } from "react-router-dom";

const GalleryObj = (props) => {

    let history = useHistory();

    return (
    <>

    <div class="imageWrapper" onClick={() => {history.push("/gallery")} }>
        <img src={props.image} width = "100px" height = "200px" style ={{objectFit:"cover", display:"block", marginLeft:"auto", marginRight:"auto", borderRadius:"7px", border:"2px double white", width:'100%'}} />
        <p className = "cornerLink">{props.title}</p>
    </div>
    </>
    )
}

export default GalleryObj
