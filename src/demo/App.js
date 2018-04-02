import React from 'react';
import Rating from '../lib';

const App = () => (
  <div style={{ padding: 40 }}>
    <p>A simple rating</p>
    <Rating rating={4.25} />
    <p>Interactive rating:</p>
    <Rating rating={4.5} interactive onRatingChanged={(r) => console.log(r)} />
    <p>Customize colors:</p>
    <Rating rating={4.5} interactive onRatingChanged={(r) => console.log(r)} hoverColor="#00f" filledColor="#f00" clearColor="#0f0" borderColor="#000"/>
    <p>Star count</p>
    <Rating rating={7.7} count={10}/>
  </div>
);

export default App;
