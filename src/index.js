import React from 'react';
import {render} from 'react-dom';
import {TravelCityCount} from './components/TravelCityCount';
window.React = React;
render(
    <TravelCityCount total={50} event={20} treck={10} goal={100}/>,
    document.getElementById('react-container')
);