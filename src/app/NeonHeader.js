import React from 'react';
import './Neon.css';
import logo from './eq.png';

const NeonHeader = ({ text }) => {
    return (
        <div class="container">
        <div class="neonText">{text} 
        <img src={logo}>
        </img>
        </div>
    </div>
    );
}
export default NeonHeader;
