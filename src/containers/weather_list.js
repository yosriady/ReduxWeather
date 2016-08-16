import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
    renderWeather(city) {
        const name = city.city.name;

        return (
            <tr key={name}>
                <td>{name}</td>
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
