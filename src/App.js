import React from "react";


import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js"

const API_KEY = "4343a674f0cae5df1c85b4585f27fbe9";

class App extends React.Component {

  state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined

  }


  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country},uk&appid=${API_KEY}&units=metric`);


    const data = await api_call.json();


    if (city && country) {

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {

      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please fill in the Input fields"
      });







    }
  }


  render() {


    return (

      <div>

        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">


<Titles/>

              </div>
            <div className = "col-xs-7 form-container">



              <Titles />
          <Form getWeather={this.getWeather} />
          <Weather

            temperature={this.state.temperature}

            city={this.state.city}

            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}



          />



            </div>
          </div>
        </div>
      </div>
      </div>

      </div>
    );



  }
};



              export default App;
