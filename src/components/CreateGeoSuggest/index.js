import React from 'react'
import Geosuggest from 'react-geosuggest'

export default class CreateGeoSuggest extends React.Component {
  render() {
    const {
      input,
      name,
      placeholder,
    } = this.props.location.address
    return (
    <Geosuggest
      className="address"
      ref={el => this._geoSuggest = el} // eslint-disable-line
      placeholder={placeholder}
      inputClassName="address"
      name={name}
      initialValue={input.value}
      onSuggestSelect={(suggest) => {
        if (!suggest) return input.onChange(null)
        input.onChange(suggest.label)
        this.props.location.latitude.input.onChange(suggest.location.lat)
        this.props.location.longitude.input.onChange(suggest.location.lng)
        return;
      }}
      {...input}
    />

    )
  }
}