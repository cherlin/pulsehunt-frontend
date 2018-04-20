import React from 'react';
import './style.css';
import moment from 'moment';

export default class EpisodeListItem extends React.Component {

  render() {
    const { name, trainer, startTime, endTime } = this.props.data;
    const dateTimeFormat = 'YYYY-MM-DD HH:mm'
    return (
      <div className="episode-list-item-container">
        <div><strong>{name}</strong></div>
        <div><strong>By:</strong> {trainer.name}</div>
        <div><strong>START:</strong> {moment(startTime).format(dateTimeFormat)}</div>
        <div><strong>END:</strong> {moment(endTime).format(dateTimeFormat)}</div>
      </div>
    );
  }
}