import React, {useState, useEffect} from 'react';

function DigitalClock(){

    const [time, setTime]= useState(new Date());
    useEffect(() => {
     const intervalId = setInterval(() => {
  setTime(new Date());
     }, 1000);

     return () =>{
         clearInterval(intervalId);
     }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = 
        time.getSeconds();
        const meridian = hours >= 12 ? "PM" : "AM";
        hours = hours % 12  || 12 ;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`;


    }
    function padZero(number){
  return (number < 10 ? "0" : "") + number;
    }
 return(<div className="clock-container">
    <div class="clock">
<span>{formatTime()}</span>
    </div>
 
 </div>)
}
export default DigitalClock;
