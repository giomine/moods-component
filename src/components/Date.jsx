import React from "react";

function todaysDate(){

    var date = new Date();
    var day = date.getDay();
    // var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const nth = function(d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
      }





    return (
        <div className="dateContainer">
          <h2>Today</h2>
        {`
            ${day}${nth(day)}
            ${month[date.getMonth()]}
            ${date.getFullYear()}
        `}
        </div>
    )
}

export default todaysDate;



/* {new Date().toDateString()} */