import React from 'react'
import './styles/MapContainer.css'
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import api from '../service/pathApi/api'
import UpdateableGeoJSON from '../components/UpdateableGeoJSON'

const position = [52.2297, 21.0122];

class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      path: {},
      startPoint: [52.198720, 20.977803],
      endPoint: [52.295018, 21.004727],
    }
  }

  render () {
    return (
      <div className='Map'>
        {this.renderMap()}
      </div>
    )
  }

  componentDidMount = async () => {
    //const res = await api.path.getPath([52.198720, 20.977803], [52.295018, 21.004727])
    const res = await api.path.getPath(this.state.startPoint, this.state.endPoint)
    console.log(res)
    this.setState({ path: res.data.routes[0].geometry})
  }

  renderMap = () => (
    <Map center={position} zoom={13}
    onContextMenu={(e) => {this.handleContextMenu(e)}}
    onClick={(e) => {this.handleClick(e)}}>
      <TileLayer
        url='http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {this.renderGeo()}
    </Map>
  )

  handleContextMenu = async (e) => {
    this.setState({ endPoint: [e.latlng.lat, e.latlng.lng]})
    const res = await api.path.getPath(this.state.startPoint, this.state.endPoint)
    this.setState({ path: res.data.routes[0].geometry})
  }

  handleClick = async (e) => {
    this.setState({ startPoint: [e.latlng.lat, e.latlng.lng]})
    const res = await api.path.getPath(this.state.startPoint, this.state.endPoint)
    this.setState({ path: res.data.routes[0].geometry})
  }

  renderGeo = () => {
    if(this.state.path.type='LineString') return (
      <UpdateableGeoJSON
      data={this.state.path}
      style={{}}/>
    )
  }
}

export default MapContainer
