import React from 'react';
import '../Styles/Game.css';

export default function Game({ Title }) {
  return (
    <div className="Game">
      <h1 className="Title">{Title}</h1>
      <div className="Tags">
        <h3>Tags: </h3>
        <p>Test, Test</p>
      </div>
    </div>
  );
}
