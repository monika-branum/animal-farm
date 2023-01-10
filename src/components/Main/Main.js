import React from 'react';
import './Main.css';
import background from '../../background.png';
import { animals } from '../../data.js';
import Animal from '../Animal/Animal.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal
          key={animal.name}
          name={animal.name}
          type={animal.type}
          top={animal.top}
          left={animal.left}
          says={animal.says}
        />
      ))}
    </main>
  );
}
