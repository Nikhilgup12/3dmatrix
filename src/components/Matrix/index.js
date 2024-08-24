// src/components/Matrix.js
import React, { useState } from 'react';
import Box from '../Box';
import './index.css';

const Matrix = () => {
  const initialColors = Array(9).fill('#F0F0F0'); 
  const [colors, setColors] = useState(initialColors);
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (clickOrder.includes(index)) return; 

    const newColors = [...colors];
    newColors[index] = '#4CAF50'; 
    setColors(newColors);
    setClickOrder([...clickOrder, index]);

    if (clickOrder.length === 8) {
      setTimeout(() => {
        changeToOrange();
      }, 300);
    }
  };

  const changeToOrange = () => {
    const newColors = [...colors];
    clickOrder.forEach((index, i) => {
      setTimeout(() => {
        newColors[index] = '#FF5722'; 
        setColors([...newColors]);
      }, i * 300); 
    });
  };

  return (
    <div className="matrix">
      {colors.map((color, index) => (
        <Box key={index} color={color} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Matrix;
