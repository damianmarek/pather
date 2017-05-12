import PropTypes from 'prop-types'
import { GeoJSON }  from 'react-leaflet';

class GeoJSONUpdatable extends GeoJSON {
  componentWillUpdate(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.leafletElement.clearLayers();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.leafletElement.addData(this.props.data);
    }
  }
}

GeoJSONUpdatable.displayName = 'GeoJsonUpdatable';

GeoJSONUpdatable.propTypes = {
  data: PropTypes.object.isRequired
};
// GeoJsonUpdatable.defaultProps = {};

export default GeoJSONUpdatable;
