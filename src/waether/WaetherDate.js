import React from 'react'


export default function WeatherDate(props){

    return(
        <div style = {{border: '1px solid', paddingLeft: '5px'}} > 
            <div> {props.dayt.toDateString()} </div>
            <div> {props.temp.day} </div>
            <div> {props.feels_like.day} </div>
            <div> {props.clouds} </div>
            <div> {props.humidity} </div>
            <div> {props.wind} </div>
        </div>
    );

}