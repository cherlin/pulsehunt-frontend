import React from 'react';
import { Field, Fields, reduxForm } from 'redux-form';
import CreateGeoSuggest from '../CreateGeoSuggest';
import './style.css';

let AddEpisodeForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className="add-episode-form-container">
      <div className="form-group">
        <label htmlFor="name">Name of Workout Session (*)</label>
        <Field name="name" component="input" type="text" placeholder="Ruffie Workout" required/>
      </div>
      <div className="form-group">
        <label htmlFor="address">Address (*)</label>
        <Fields names={['location.address', 'location.latitude', 'location.longitude']} component={CreateGeoSuggest} placeholder="Enter Location" required/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description (*)</label>
        <Field name="description" component="textarea" type="text" rows="4" placeholder="A sweaty session to start of the weekend, using your body and your classmates as resistance. Bring yourself and a good mood, and we'll take care of the rest" />
      </div>
      <div className="form-group">
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="date">Date (*)</label>
            <Field name="date" component="input" type="date" required/>
          </div>
          <div className="form-group">
            <label htmlFor="startTime">Start (*)</label>
            <Field name="startTime" component="input" type="time" required/>
          </div>
          <div className="form-group">
            <label htmlFor="endTime">End (*)</label>
            <Field name="endTime" component="input" type="time" required/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="sweatScore">Sweat Score</label>
        <Field name="sweatScore" component="input" type="range" min="1" max="10" value="5"/>
      </div>
      <div className="form-group">
        <label htmlFor="tags">Tags (comma separated)</label>
        <Field name="tags" component="input" type="text" />
      </div>
      <button type="submit">Create new Workout Episode</button>
    </form>
  )
}

AddEpisodeForm = reduxForm({
  // a unique name for the form
  form: 'addEpisode'
})(AddEpisodeForm)

export default AddEpisodeForm;