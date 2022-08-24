import React from "react";
import { useState } from "react";
import axios from "axios";

const WeatherNow = () => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState();
  const apiKey = process.env.REACT_APP_APIKEY;

  const apiCall = async (e) => {
    e.preventDefault();
    const loc = e.target.elements.loc.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
    const req = axios.get(url);
    const res = await req;
    setWeather({
      descp: res.data.weather[0].description,
      temp: res.data.main.temp,
      city: res.data.name,
      humidity: res.data.main.humidity,
      press: res.data.main.pressure,
    });

    setCity(res.data.name);
  };

  let k = weather.temp;
  let C = k - 273.15;

  const Weath = () => {
    return (
      <div>
        <div class="text-xs">
          informação do clima para a cidade {city}
          <hr></hr>
        </div>
        <div class="text-center text-gray-500">
          <div class="text-left">clima : {weather.descp}</div>
          <div class="text-left">Temperatura : {C.toFixed(2)} &#8451;</div>
          <div class="text-left">Humidade :{weather.humidity} %</div>
          <div class="text-left">Pressão : {weather.press} mb</div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div class="w-full max-w-xs">
        <p class="text-center text-gray-500 text-xs">Informação do tempo</p>
        <form
          onSubmit={apiCall}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              cidade
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="city"
              name="loc"
            ></input>
          </div>
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Pesquisar
          </button>
        </form>
        {weather && <Weath />}
      </div>
    </>
  );
};

export default WeatherNow;
