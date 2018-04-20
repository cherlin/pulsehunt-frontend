import React from 'react';
import { connect } from 'react-redux';
import EpisodeListItem from '../EpisodeListItem';
import './style.css';

class EpisodeList extends React.Component {
  
  render() {
    return (
      <div className="episodelist-container">
        {this.props.episodes.filtered && this.props.episodes.filtered.map(episode => <EpisodeListItem key={episode._id} data={episode} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes,
  };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeList);