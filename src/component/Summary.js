import React from "react";
import data from '../data.json';
import '../css/Summary.scss'

const Summary = () => {
    const summaryScore = "summaryScore"
    return(
        <div className="containerSummary">
            <h3>Summary</h3>
            <div className="wrapperSummary">
                {data.map(({category,score,icon})=>
                    <div className={`${summaryScore} ${category}`}>
                        <div className="floatL">
                            <img alt='' src={icon}/>
                            <p>{category}</p>
                        </div>
                        <span>{score} <span> / 100</span></span>
                    </div>
                )}
            <button className="btn">Continue</button>
            </div>
        </div>
        ) 
}
export default Summary