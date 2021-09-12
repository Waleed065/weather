import React from 'react';
import "./css/ForecastContainer.css"
import TodaysForecastContainer from './TodaysForecastContainer';
import WeeklyForecastContainer from './WeeklyForecastContainer';

export default function ForecastContainer() {
    return (
        <div id="forecast-container">
            <TodaysForecastContainer />
            <WeeklyForecastContainer />
        </div>
    )
}
