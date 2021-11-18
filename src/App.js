import './App.css';
import React from 'react';
import Weather from './waether/waether.js'
import WeatherDate from './waether/WaetherDate'
import Headers from './Headers';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: ''
    };
  }  
  componentDidMount() {
    fetch("http://api.openweathermap.org/data/2.5/onecall?lat=49.8383&lon=24.0232&units=metric&exclude=minutely,hourly,alerts&appid=9f3ed292c8fb588881e5a42f4e2093a1")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        // Примітка: важливо обробляти помилки саме тут,
        // а не в блоці catch (), щоб не перехоплювати
        // виключення з помилок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Помилка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Завантаження...</div>;
    } else {
      return (
        <div className='content'>
        <Headers > </Headers>
        <Weather temp={data.current.temp} clouds={data.current.clouds} wind={data.current.wind_speed}
         feels_like={data.current.feels_like} humidity={data.current.humidity} ></Weather>
        <ul className='WaetherAllDate'>
           <div> <div>День</div> <div>Темпаратура</div> <div>Відчуття</div> <div>Хмарність</div> <div>Вологість</div> <div> Швидкість</div> </div>
            {data.daily.map(day => (
              <li key = {day.dt} style={{'list-style-type': 'none'}}>
              <WeatherDate  dayt = {new Date(day.dt*1000)} temp={day.temp} clouds={day.clouds} wind={day.wind_speed}
              feels_like={day.feels_like} humidity={day.humidity} ></WeatherDate>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  // погода зараз
//  http://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=9f3ed292c8fb588881e5a42f4e2093a1  
// погода на 7 днів        
//  http://api.openweathermap.org/data/2.5/onecall?lat=49.8383&lon=24.0232&appid=9f3ed292c8fb588881e5a42f4e2093a1

//lat: 49.8383
//lon: 24.0232





  // const dete = 'Y'

  // fetch('http://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=9f3ed292c8fb588881e5a42f4e2093a1')
  // .then(function(resp) {return resp.json()})
  // .then(function(data) {
  //   console.log(data);
  //   dete : data.name
  // })
  // .catch(function(){

  // });

  // // const dete = data.name

  // return (
  //   
  // );
}

export default App;
