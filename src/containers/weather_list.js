import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Sparklines } from 'react-sparklines';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temperature = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Sparklines data={temperature} width={180} height={120}></Sparklines>
                </td>
                <td>
                    <Sparklines data={pressure} width={180} height={120}></Sparklines>
                </td>
                <td>
                    <Sparklines data={humidity} width={180} height={120}></Sparklines>
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
