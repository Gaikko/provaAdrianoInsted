import React, { useState } from 'react'
import './ApiWeather.css';

const ApiWeather = ({ ph }) => {
  const [cidade, setCidade] = useState("");
  const SerachInput = (e) => {
    e.preventDefault();
    console.log(cidade);
    let appid = "91afb389b6c1f75e125ed8e51d786ada";
    let currentValue = document.querySelector('input[name=serachInput]').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=${appid}&units=metric`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const { name, main, sys, weather } = data;
        console.log({data});
        if (sys !== undefined) {
          if (weather !== undefined) {
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
            setCidade(
              `<div>
              <div>
              <p>Temperatura: ${main.temp} ºC</p>
              <h9 class='sens'>Sensação Térmica: ${main.feels_like} ºC</h9>
              <h9 class='min'>Mínima: ${main.temp_min} ºC</h9>
              <h9 class='max'>Máxima: ${main.temp_max} ºC</h9>
              </div>
            <p>País: ${sys.country}</p>
            <p>Cidade: ${name}</p>
            <div>
            <h8>Tempo: ${weather[0]['main']}</h8><br/>
            <div class='descricao'>
            <h9>Descrição: ${weather[0]['description']}</h9><img class='iconetemp' src="${icon}"/>
            </div>
            </div>
            </div>`
            );
          }
        }
        else {
          setCidade("");
        }
      })
    console.log(currentValue);
    //alert(currentValue);

  }
  return (
    <div>
      <hr></hr>
      <form onSubmit={(e) => SerachInput(e)}>
        <input name='serachInput' type="text" onClick={SerachInput} placeholder={ph}></input>
        <input type="submit" value="Pesquisar..."></input>
      </form>
      <hr></hr>
      <div>
        {
          (cidade !== "") ?
            <div dangerouslySetInnerHTML={{ __html: cidade }} /> :
            <div className='error'>Pesquise por uma cidade acima!</div>
        }
      </div>
    </div>
  )
}

export default ApiWeather