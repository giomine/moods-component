import React, { useState } from "react";
import Date from "./Date";
import NewMood from "./NewMood";

function Moods() {

    var isClicked = false;
    const [clicked, afterClick] = useState(isClicked);

    const [currentMood, selectMood] = useState("");

    function updateClick(){
        const clicked = true;
        afterClick(clicked);
    }

    function happyColor(){
        document.getElementById("card").style.backgroundColor = 'teal';
        var currentMood = "happy";
        selectMood(currentMood);
    }

    function okayColor(){
        document.getElementById("card").style.background = "gold";
        var currentMood = "okay";
        selectMood(currentMood);
    }

    function sadColor(){
        document.getElementById("card").style.background = "red";
        var currentMood = "sad";
        selectMood(currentMood);
    }


    return (
        <div className="card" id="card">
            <h1>Today</h1>
            <Date />

            {!clicked ? (<div><h2>How are you feeling today?</h2>
            <div className="buttonsContainer">
                <button onClick={() => {happyColor(); updateClick()}}  className="happyButton">Happy</button>
                <button onClick={() => {okayColor(); updateClick()}} className="okayButton">Okay</button>
                <button onClick={() => {sadColor(); updateClick()}} className="sadButton">Sad</button>
            </div></div> ) : (<div className="moodContainer"><NewMood mood={currentMood} /></div> )}            
               
        </div>
    )
}

export default Moods;