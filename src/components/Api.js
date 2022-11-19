import React from 'react'

const Api = (props) => {
  function town() {
    let ph = document.querySelector('input[name=teste]').value;
    console.log(ph);
  }

  return (
    <div>Api
        <br/>
        <input type="text" placeholder={props.Tph} id='teste' name='teste' onKeyUp={town}></input>
    </div>
  )
}

export default Api