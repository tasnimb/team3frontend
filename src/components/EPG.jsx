import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";



const EPG = () => {
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });



    return (
    <div>
        <div style = {{paddingTop:"10px"}}>
        </div>

        <table className = "tableStyle">
                <tr style = {{color:"white"}}>
                    <th className = "ShowsH"></th>
                    <th className = "ShowsH">10:00</th>
                    <th className = "ShowsH">11:00</th>
                    <th className = "ShowsH">12:00</th>
                    <th className = "ShowsH">13:00</th>
                    <th className = "ShowsH">14:00</th>
                </tr>
                <tr>
                    <td className = "ShowsH">Channel 1</td>
                    <td className = "ShowsInd">Show 1</td>
                    <td className = "ShowsInd">Show 2</td>
                    <td colSpan="2" className = "ShowsInd">Show 3</td>
                    <td className = "ShowsInd">Show 3</td>
                </tr>
                <tr>
                    <td className = "ShowsH">Channel 2</td>
                    <td className = "ShowsInd">Show 1</td>
                    <td colSpan="3" className = "ShowsInd">Movie 1</td>
                    <td className = "ShowsInd">Show 2</td>
                </tr>
                <tr>
                    <td className = "ShowsH">Channel 3</td>
                    <td colSpan="2" className = "ShowsInd">Movie 1</td>
                    <td className = "ShowsInd">Show 1</td>
                    
                    <td className = "ShowsInd">Show 2</td>
                    <td className = "ShowsInd">Show 3</td>
            
                </tr>
                <tr>
                    <td className = "ShowsH">Channel 4</td>
                    <td className = "ShowsInd">Show 1</td>
                    <td className = "ShowsInd"> Show 2</td>
                    <td className = "ShowsInd">Show 3</td>
                    <td className = "ShowsInd">Show 4</td>
                    <td className = "ShowsInd">Show 5</td>
                </tr>
                <tr>
                    <td className = "ShowsH">Channel 5</td>
                    <td className = "ShowsInd">Show 1</td>
                    <td colSpan="3" className = "ShowsInd">Movie 1</td>
                    <td className = "ShowsInd">Show 2</td>
                </tr>
        </table>
        <nav className="navbar" style={{ height: '65px'}}>
        </nav>

        </div>
    )

}

export default EPG;