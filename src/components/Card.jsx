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
        document.getElementById("card").style.border = 'none';
    }

    function happyColor(){
        document.getElementById("card").style.backgroundColor = 'rgb(57, 201, 186)';
        var currentMood = "happy";
        selectMood(currentMood);
    }

    function okayColor(){
        document.getElementById("card").style.background = "rgb(241, 205, 0)";
        var currentMood = "okay";
        selectMood(currentMood);
    }

    function sadColor(){
        document.getElementById("card").style.background = "rgb(255, 78, 78)";
        var currentMood = "sad";
        selectMood(currentMood);
    }


    function undefinedMood(){
        setTimeout(function() {
            document.querySelector(".loader").setAttribute("id", "loader");
        }, 2000);
    }


    return (
        <div className="container">
            <div className="card" id="card">
                <Date />

                {!clicked ? (<div className="selectionContainer">{undefinedMood()}<div className="loader"></div><h2>How are you feeling today?</h2>
                <div className="buttonsContainer">
                    <button onClick={() => {happyColor(); updateClick()}}  className="happyButton">Happy</button>
                    <button onClick={() => {okayColor(); updateClick()}} className="okayButton">Okay</button>
                    <button onClick={() => {sadColor(); updateClick()}} className="sadButton">Sad</button>
                </div></div>) : (<div className="moodContainer"><MoodText mood={currentMood} /></div> )}            
                
            </div>
        </div>
    )
}

export default Card;