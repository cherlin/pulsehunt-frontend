import React from 'react';
import Dashboard from '../../components/Dashboard';
import Map from '../../components/Map';
import EpisodeList from '../../components/EpisodeList';
import './style.css';

export default class MapView extends React.Component {
  render() {
    return (
      <div className="mapview-container">
        <Dashboard />
        <Map />
        <EpisodeList />
      </div>
    );
  }
}