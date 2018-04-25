import React from 'react';
import './style.css';

export default class ListSort extends React.Component {

  render() {
    return (
      <div className="list-sort-container">
        <p className="instruction">SORT BY </p>
        <div className="sorting-buttons">
          <button className="list-sort-button">DISTANCE</button>
          <button className="list-sort-button">DATE & TIME</button>
          <button className="list-sort-button">SWEAT SCORE</button>
        </div>
      </div>
    );
  }
}