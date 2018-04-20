import React from 'react';
import './style.css';

export default class EpisodeListItem extends React.Component {

  render() {
    const { name, trainer, startTime, endTime } = this.props.data;
    return (
      <div className="episode-list-item-container">
        <div>{name}</div>
        <div>{trainer.name}</div>
        <div>{startTime}</div>
        <div>{endTime}</div>
      </div>
    );
  }
}