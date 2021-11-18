import React from 'react'



export default function Weather(props){

    return(
        <div className = 'WeatherNow'>
            <div> Погода зараз </div>
            <div className= 'WaetherDat'>
                <div> темпаратура {props.temp} </div>
                <div> відчутна темпаратура {props.feels_like} </div>
                <div> хмарність {props.clouds} </div>
                <div> вологість {props.humidity} </div>
                <div> швидкість вітру {props.wind} </div> 
            </div>
        </div>
    );

}