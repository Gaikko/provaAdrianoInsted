import React, { useState } from "react";
import "./ApiWeather.css";

const ApiWeather = ({ ph }) => {
  const [cidade, setCidade] = useState();
  const SerachInput = (e) => {
    e.preventDefault();
    let appid = "91afb389b6c1f75e125ed8e51d786ada";
    let currentValue = document.querySelector("input[name=serachInput]").value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=${appid}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { name, main, sys, weather } = data;
        if (sys !== undefined) {
          if (weather !== undefined) {
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
            setCidade(
              `<div class='conteudo'>
              <p>Temperatura: ${main.temp} ºC</p>
              <div class='infoTemp'>
              <h9 class='sens'>Sensação Térmica: ${main.feels_like} ºC</h9>
              <h9 class='min'>Mínima: ${main.temp_min} ºC</h9>
              <h9 class='max'>Máxima: ${main.temp_max} ºC</h9>
              </div>
              <p class='humidity'>Umidade: ${main.humidity}%</p>
              <p>País: ${sys.country}</p>
              <p>Cidade: ${name} </p>
              <h8 class='descricao'>Tempo: ${weather[0]["main"]}</h8>
              <h9 class='descricao'>Descrição: ${weather[0]["description"]}<img class='iconetemp' src="${icon}"/></h9>
            </div>`
            );
          }
        } else {
          setCidade("");
        }
      });
  };
  return (
    <div>
      <hr></hr>
      <form onSubmit={(e) => SerachInput(e)}>
        <input name="serachInput" type="text" placeholder={ph}></input>
        <input type="submit" value="Pesquisar..." onClick={SerachInput}></input>
      </form>
      <hr></hr>
      <div>
        {cidade !== "" ? (
          <div dangerouslySetInnerHTML={{ __html: cidade }} />
        ) : (
          <div className="error">Pesquise por uma cidade acima!</div>
        )}
      </div>
    </div>
  );
};

export default ApiWeather;
