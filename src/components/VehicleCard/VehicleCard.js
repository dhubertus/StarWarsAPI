import React from 'react'
import PropTypes from 'prop-types';

export const VehicleCard = ({ singleVehicle, handleToggle, favoriteClass, favorites }) => {
  let favoriteCssClass = favoriteClass(singleVehicle.name, favorites)
  return (
    <section id={singleVehicle.name} className={`vehicle-card ${favoriteCssClass}`} onClick={() => {handleToggle(singleVehicle)}}>
      <h2>{singleVehicle.name}</h2>
      <h4>{singleVehicle.model}</h4>
      <h4>{singleVehicle.class}</h4>
      <h4>{singleVehicle.numberOfPassengers}</h4>
    </section>
  )
}

VehicleCard.PropTypes = {
  singleVehicle: PropTypes.object,
  handleToggle: PropTypes.func,
  favoriteClass: PropTypes.string,
  favorites: PropTypes.array
}
