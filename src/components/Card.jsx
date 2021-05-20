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


    function undefinedMood(){
        setTimeout(function() {
            document.querySelector(".loader").setAttribute("id", "loader");
        }, 2000);
    }


    return (
        <div className="container">
            <div className="card" id="card">
                <h1>Today</h1>
                <Date />

                {!clicked ? (<div>{undefinedMood()}<div className="loader"></div><h2>How are you feeling today?</h2>
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