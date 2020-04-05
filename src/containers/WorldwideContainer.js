import React, { Component } from 'react';
import WorldwideData from '../components/worldwideData/worldwideData';
import CountrySearch from '../components/countrySearch/countrySearch';
import './worldwideContainer.css';

const worldwideContainer = () => {
    return( 
    <div className="worldwide_top_container">
        <WorldwideData/>
        <CountrySearch/>
    </div>
    )
}
export default worldwideContainer;
