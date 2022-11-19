import React from 'react'

const ApiWeather = () => {
    function SerachInput() {
        let currentValue = document.querySelector('input[name=serachInput]').value;
        console.log(currentValue);
        //alert(currentValue);
        
    }
  return (
    <div>
        <hr></hr>
         { /* placeholder={props.ph} ----- Não Trouxe a place do App.js */ }
         <form onSubmit={(e) => SerachInput(e)}>
         <input name='serachInput' type="text" onKeyUp={SerachInput} placeholder="Pesquise a Cidade..."></input>
         <input type="submit" value="Pesquisar..."></input>
         </form>
        <hr></hr>
    </div>
  )
}

export default ApiWeather