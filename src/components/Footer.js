import React from 'react';
import "./Footer.css";

const Footer = () => {
    let dev = "Gaikko Alves";
    let facul = "INSTED";
    return (
        <footer className="footer">
            <ul>
                <li>
                    <h6>Dev: {dev}</h6>
                </li>
                <li>
                    <h6>Instituição: {facul}</h6>
                </li>
                <li>
                    <h6>Gaikko&copy;</h6>
                </li>
            </ul>
        </footer>
    )
}

export default Footer