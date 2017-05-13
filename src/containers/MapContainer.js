import React from 'react'
import './styles/MapContainer.css'
import { connect } from 'react-redux'
import { Map, TileLayer } from 'react-leaflet';
import Control from 'react-leaflet-control';
import UpdateableGeoJSON from '../components/UpdateableGeoJSON'
import RouteInfo from '../components/RouteInfo'
import RouteActions from '../redux/routeRedux'

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
    <Map center={position} zoom={13}
    onContextMenu={(e) => {this.handleContextMenu(e)}}
    onClick={(e) => {this.handleClick(e)}}>
      <TileLayer
        url='http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Control position="topleft" >
        <RouteInfo startPoint={this.props.route.startPoint} endPoint={this.props.route.endPoint} />
      </Control>
      {this.renderGeo()}
    </Map>
  )

  handleContextMenu = async (e) => {
    this.props.setEndPoint([e.latlng.lat, e.latlng.lng])
    this.props.fetchPath()
  }

  handleClick = async (e) => {
    this.props.setStartPoint([e.latlng.lat, e.latlng.lng])
    this.props.fetchPath()
  }

  renderGeo = () => {
    if(this.props.route.path.type==='LineString') return (
      <UpdateableGeoJSON
      data={this.props.route.path}
      style={{}}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    route: state.route
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPath: () => dispatch(RouteActions.fetchPathAttempt()),
    setStartPoint: (startPoint) => dispatch(RouteActions.setStartPoint(startPoint)),
    setEndPoint: (endPoint) => dispatch(RouteActions.setEndPoint(endPoint)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
