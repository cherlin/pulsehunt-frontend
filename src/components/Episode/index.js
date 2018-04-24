import React from 'react';
import { connect } from 'react-redux';
import { episodeFetchSuccess } from '../../actions';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './style.css';

class Episode extends React.Component {

  constructor(props) {
    super(props)
    this.fetchEpisode(this.props.match.params.id)
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.id && nextProps.match.params.id !== this.props.match.params.id) {
      this.fetchEpisode(nextProps.match.params.id);
    }
  }

  fetchEpisode = (episodeId) => {
    fetch(`http://localhost:3001/episode/${episodeId}`)
      .then(episode => episode.json())
      .then(episode => {
        this.props.episodeFetchSuccess(episode);
      })
      .catch(err => console.log(err));
  }
  
  render() {
    
    if (!this.props.singleEpisode.name) { return 'Loading' }
    else {
      const {name, trainer, startTime, endTime, description, tags, photo} = this.props.singleEpisode;
      const styles = photo ? { 'backgroundImage': `linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.6)), url(http://res.cloudinary.com/cherlin/image/upload/c_thumb,g_center,h_200,q_auto:good,w_600/${photo})`, 'backgroundSize': 'cover' } : { backgroundColor: 'black'};
      return (
        <div className="episode-container">
          <header className="episode-header" style={styles}>
            <div className="close-episode-card"><Link to="/">CLOSE</Link></div>
            <h1>{name}</h1>
            <p className="trainer">{trainer.name}</p>
          </header>
          <div className="body-container">
            <div className="time">
              <div className="timepoint date">{moment(startTime).format('dddd Do of MMMM')}</div>
              <div className="timepoint start-end">{moment(startTime).format('HH:mm')} - {moment(endTime).format('HH:mm')}</div>
              <div className="timepoint duration">DURATION: {moment(moment(endTime).diff(moment(startTime))).subtract(1, 'hour').format('H:mm')}</div>
            </div>
            <div className="tags">
              TAGS <ul className="tagslist">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </div>
            <div className="episode-content">
              <div className="episode-desc">{description}</div>
              <div className="episode-actions">
                <button className="attend-button">I WANT TO ATTEND THIS!</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    singleEpisode: state.episodes.singleEpisode,
  };
};

const mapDispatchToProps = (dispatch) => ({
  episodeFetchSuccess: (episode) => dispatch(episodeFetchSuccess(episode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Episode);