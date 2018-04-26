import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { uploadedPhotoSuccess, pickEpisodePhoto, createEpisodeSuccess, createNewEpisode } from '../../actions';
import Dropzone from 'react-dropzone';
import AddEpisodeForm from '../../components/AddEpisodeForm';
import './style.css';

class AddEpisode extends React.Component {

  onDrop = (acceptedFiles, rejectedFiles) => {
    const data = new FormData();
    data.append('photo', acceptedFiles[0]);
    data.append('trainer', '5adc8d0e3f2dcd259ad50d67' );

    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: data,
    })
    .then(res => res.json())
    .then(res => {
      this.props.uploadedPhotoSuccess(res.photos);
    })
    .catch(err => console.error(err));
  }

  submit = values => {
    this.saveForm(values);
  }

  togglePic = (e) => {
      this.props.pickEpisodePhoto(e.target.id);
  }

  saveForm = (values) => {
    const startTime = `${values.date}T${values.startTime}`;
    const endTime = `${values.date}T${values.endTime}`;
    const payload = {
      name: values.name,
      description: values.description,
      trainer: this.props.user._id,
      startTime,
      endTime,
      location: {
        address: values.location.address,
        coordinates: [values.location.longitude, values.location.latitude]
      },
      sweatScore: Number(values.sweatScore),
      tags: values.tags.split(','),
      photo: this.props.pickedPhoto || ''
    }

    fetch('http://localhost:3001/episode', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => this.props.createEpisodeSuccess(res._id))
    .catch(err => console.log(err));
  }

  render () {

    return (
        <div className="add-episode-container">
        <div className="add-episode-content">
          <div className="form-part">
            <h2>Workout Details</h2>
            { !this.props.uploadSuccess ? <AddEpisodeForm onSubmit={this.submit} /> : 
              <div>
                Congrats! You just created a <Link to={`/episode/${this.props.uploadSuccess}`}>workout episode</Link>. Want to <a onClick={this.props.createNewEpisode}>create another one</a>?
              </div>
            }
          </div>
          <div className="image-part">
            <h2>Pick a picture or upload a new one</h2>
            <div className="image-grid">
              { this.props.user.photos.length ? this.props.user.photos.map(photo => {
                return <img onClick={this.togglePic} alt="Descriptive text" id={photo} key={photo} className={this.props.pickedPhoto === photo ? 'image-item picked' : 'image-item'} 
                src={`http://res.cloudinary.com/cherlin/image/upload/c_thumb,g_center,h_200,q_auto:good,w_600/${photo}`} />
              }) : 'No images uploaded yet!' }
            </div>
            <Dropzone onDrop={files => this.onDrop(files)} multiple={false} className="dropzone" activeStyle={{ 'backgroundColor': 'green' }}>
              <div>CLICK AND SELECT<br /><br /> or<br/><br/> DROP YOUR FILE HERE</div>
            </Dropzone>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  pickedPhoto: state.app.addEpisode.pickedPhoto,
  uploadSuccess: state.app.addEpisode.uploadSuccess
});

const mapDispatchToProps = (dispatch) => ({
  uploadedPhotoSuccess: (photos) => dispatch(uploadedPhotoSuccess(photos)),
  pickEpisodePhoto: (photoId) => dispatch(pickEpisodePhoto(photoId)),
  createEpisodeSuccess: (episodeId) => dispatch(createEpisodeSuccess(episodeId)),
  createNewEpisode: () => dispatch(createNewEpisode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEpisode);