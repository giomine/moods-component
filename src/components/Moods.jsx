import React, { useState } from "react";

function Moods(props) {

    var isClicked = false;
    const [clicked, afterClick] = useState(isClicked);

    function updateClick(){
        const clicked = true;
        afterClick(clicked);
    }

    function happyColor(){
        document.getElementById("card").style.backgroundColor = 'teal';
    }

    function okayColor(){
        document.getElementById("card").style.background = "gold";
    }

    function sadColor(){
        document.getElementById("card").style.background = "red";
    }


    return (
        <div className="card" id="card">
            <h1>Today</h1>
            <div>{new Date().toDateString()}</div>

            {!clicked ? (<div><h2>How are you feeling today?</h2>
            <div className="buttonsContainer">
                <button onClick={() => {happyColor(); updateClick()}}  className="happyButton">Happy</button>
                <button onClick={() => {okayColor(); updateClick()}} className="okayButton">Okay</button>
                <button onClick={() => {sadColor(); updateClick()}} className="sadButton">Sad</button>
            </div></div> ) : (<div className="moodContainer">Your mood is {props.mood}</div> )}            
               
        </div>
    )
}

export default Moods;