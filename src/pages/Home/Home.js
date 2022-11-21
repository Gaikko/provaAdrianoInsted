import React from 'react'
import './Home.css'

const Home = ({ btnIr }) => {
    function clicar() {
        alert("Lamento, esta função não deu certo! :(");   
    }

    return (
        <div>
            <h1>Prova - Adriano</h1>
            <h2>MultiPlataforma P2</h2>
            <input type="button" value={btnIr} onClick={clicar}/>
        </div>
    )
}

export default Home