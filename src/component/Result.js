import React from "react";
import '../css/Result.scss'

const Result = () => {
    return(
        <div className="containerCard">
            <div className="card">
                <h1>Your Result</h1>
                <div className="roundedScore">
                    <p><span>76</span>of 100</p>
                </div>
                <h2>Great</h2>
                <p className="scoreText">You scored higher than 65% of the people who have taken these test.</p>
            </div>
        </div>
    )
}

export default Result;