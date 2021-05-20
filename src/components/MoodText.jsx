import React from "react";

function MoodText(props){
    return(
        <div className="selectedMood">
            <h2>Your mood is {props.mood}</h2>
        </div>
    )
}

export default MoodText;