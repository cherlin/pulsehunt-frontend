import React from 'react';
import './style.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class EpisodeListItem extends React.Component {

  render() {
    const { _id, name, trainer, startTime, endTime, photo } = this.props.data;
    const dateTimeFormat = 'YYYY-MM-DD HH:mm'
    return (
      <article className="episode-list-item-container">
          <div className="episode-image"><Link to={`/episode/${_id}`}><img alt={name} src={`http://res.cloudinary.com/cherlin/image/upload/c_thumb,g_center,h_100,q_auto:good,w_100/${photo}`} /></Link></div>
          <div className="episode-meta">
            <div><h2><Link to={`/episode/${_id}`}>{name}</Link></h2></div>
            <div><strong>By</strong> {trainer.name}</div>
            <div><strong>START:</strong> {moment(startTime).format(dateTimeFormat)}</div>
            <div><strong>END:</strong> {moment(endTime).format(dateTimeFormat)}</div>
          </div>
      </article>
    );
  }
}