import React from 'react';
import "./Footer.css";

const Footer = () => {
    let dev = "Gaikko Alves";
    let facul = "INSTED";
    return (
        <footer className="footer">
            <ul className='ulft'>
                <li className='lift'>
                    <p>Dev: {dev}</p>
                </li>
                <li className='lift'>
                    <p>Instituição: {facul}</p>
                </li>
                <li className='lift'>
                    <p>Gaikko&copy;</p>
                </li>
            </ul>
        </footer>
    )
}

export default Footer