import React from "react";
import "./card.css";

export default function Card(props){
    return(
        <div className="card">
            <h3 className="branchname1">{props.branchname}</h3>
            <div className="address1">{props.address}</div>
            <div className="incharge1">{props.branchincharge}</div>
            <div className="number1">{props.contactnumber}</div>
        </div>
    )
}

