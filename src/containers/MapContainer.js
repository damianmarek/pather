import React from 'react'
import './styles/MapContainer.css'
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
const position = [52.2297, 21.0122];

class MapContainer extends React.Component {
  render () {
    return (
      <div className='Map'>
        {this.renderMap()}
      </div>
    )
  }

  renderMap = () => (
  <Map center={position} zoom={13} onContextMenu={(e) => {this.handleContextMenu(e)}}>
    <TileLayer
      url='http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  </Map>
)
}

export default MapContainer
