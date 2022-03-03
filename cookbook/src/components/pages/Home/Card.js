import React from "react";

function Card(props) {
    return (
        <div className="hCard">
            <div className="hCard_Body">
                <img src={props.img}/>
                <h2 className="hCard_Title">{props.title}</h2>
                <p className="hCard_Des">{props.des}</p>
            </div>
            <button className="hCard_Button"> View Recipe </button>
        </div>
    )
}

export default Card;