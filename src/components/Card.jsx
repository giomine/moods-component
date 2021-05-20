import React, { useState } from "react";
import Date from "./Date";
import MoodText from "./MoodText";

function Card() {

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

    // for undefined, set a timer to 5 seconds and if a button isn't clicked, show loading spinner. should also still be able to click buttons.
    function undefinedMood(){
        setTimeout(function() {
            alert("You haven't picked a mood yet!");
        }, 1000);
    }


    return (
        <div className="card" id="card">
            <h1>Today</h1>
            <Date />

            {!clicked ? (<div>{undefinedMood()}<h2>How are you feeling today?</h2>
            <div className="buttonsContainer">
                <button onClick={() => {happyColor(); updateClick()}}  className="happyButton">Happy</button>
                <button onClick={() => {okayColor(); updateClick()}} className="okayButton">Okay</button>
                <button onClick={() => {sadColor(); updateClick()}} className="sadButton">Sad</button>
            </div></div>) : (<div className="moodContainer"><MoodText mood={currentMood} /></div> )}            
               
        </div>
    )
}

export default Card;