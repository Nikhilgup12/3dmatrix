// src/components/Box.js
import React from 'react';
import './index.css';

const Box = ({ color, onClick }) => {
  return (
    <div className="box" style={{ backgroundColor: color }} onClick={onClick}>
    </div>
  );
};

export default Box;
