import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon,lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td><Map lat={lat} lon={lon} /></td>
                <td>
                    <Chart data={temps} color="red" units="K" />
                </td>
                <td>
                    <Chart data={pressures} color="blue" units="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="orange" units="%" />
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

// null because this container is not passing application state to its props
export default connect(mapStateToProps)(WeatherList)
