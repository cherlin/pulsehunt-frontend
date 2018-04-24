import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = (props) => {
  return (
    <div className="navbar-container">
      <div className="logo-area"><Link to="/"><h1>PULSE HUNT</h1></Link></div>
      <div className="nav-area">
        <div className="nav-links">
          <Link to="/add"><button className="navbar-button">ADD WORKOUT</button></Link>
        </div>
        <div className="user-info">{ props.signedInUser ? `Hello, ${props.signedInUser}` : <button className="navbar-button"><Link to="/add">SIGN IN</Link></button>}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  signedInUser: state.user.name,
});

export default connect(mapStateToProps)(NavBar);