import React from 'react';
import '../stylesheets/ui.scss';
import Terrain from 'react-icons/lib/md/terrain';
import City from 'react-icons/lib/md/location-city';
import Calender from 'react-icons/lib/fa/calendar';

const decimalToPercent = (decimal) => {
    return((decimal *100) + '%');
};

const calGoalProgress = (total, goal) => {
    return decimalToPercent(total/goal);
};

export const TravelCityCount = ({total,event,treck,goal}) => (
        <div className="travel-city-count">
            <div className="total-days">
                <span>{total}</span>
                <Calender/>
                <span> days</span>
            </div>
            <div className="event-days">
                <span>{event} </span>
                <City/>
                <span>days</span>
            </div>
            <div className="treck-days">
                <span>{treck} </span>
                <Terrain/>
                <span>hinking day</span>
            </div>
            <div className="goal-cities">
                <span>{calGoalProgress(total, goal)}</span>
            </div>
        </div>
    );

TravelCityCount.propTypes = {
    total: React.PropTypes.number,
    event: React.PropTypes.number,
    treck: React.PropTypes.number,
    goal: React.PropTypes.number
};