import React from 'react';
import LocationPicker from '../LocationPicker';
import DatePicker from '../DatePicker';
import FilterPicker from '../FilterPicker';
import './style.css';

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">

      <LocationPicker />
      <DatePicker />
      <FilterPicker />

    </div>
  );
}

export default Dashboard;