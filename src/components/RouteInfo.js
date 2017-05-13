import React from 'react'
import './styles/RouteInfo.css'
import { Statistic } from 'semantic-ui-react'

class RouteInfo extends React.Component {
  render () {
    return (
      <div className='RouteInfo'>
        <Statistic size='mini'>
          <Statistic.Value>{this.props.startPoint[0]}</Statistic.Value>
          <Statistic.Label>Start point lat</Statistic.Label>
          <Statistic.Value>{this.props.startPoint[1]}</Statistic.Value>
          <Statistic.Label>Start point lng</Statistic.Label>
          <Statistic.Value>{this.props.endPoint[0]}</Statistic.Value>
          <Statistic.Label>End point lat</Statistic.Label>
          <Statistic.Value>{this.props.endPoint[1]}</Statistic.Value>
          <Statistic.Label>End point lng</Statistic.Label>
        </Statistic>
      </div>
    )
  }
}

export default RouteInfo
