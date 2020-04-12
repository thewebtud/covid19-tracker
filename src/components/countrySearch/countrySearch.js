import React from "react";
import axios from 'axios';
import './countrySearch.css';
import Confirmed from '../../img/done.svg';
import Recovered from '../../img/recovered.svg';
import Death from '../../img/death.svg';

export class countrySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmed: 0,
            recovery: 0,
            death: 0,
            countries: [],
            selectedCountry: 'India',
            selectedCountryISO: 'IN',
            recoveryPerentage: 0
        };
    }

    componentWillMount() {
        axios.get('https://covid19.mathdro.id/api/countries')
            .then(response => {
                this.setState({ countries: response.data.countries });
            });
        this.populateDataForSpecificCountry(this.state.selectedCountry, this.state.selectedCountryISO);
    }

    populateDataForSpecificCountry(selectedCountry, selectedCountryISO) {
        console.log(selectedCountry);
        console.log(selectedCountryISO);
        this.setState({ selectedCountry: selectedCountry });
        this.setState({ selectedCountryISO: selectedCountryISO });
        axios.get('https://covid19.mathdro.id/api/countries/' + selectedCountry)
            .then(response => {
                this.setState({ confirmed: response.data.confirmed.value });
                this.setState({ recovery: response.data.recovered.value });
                this.setState({ death: response.data.deaths.value });
            });
    }

    // handleCountryChange (countryName) {
    //     console.log(countryName);
    //     this.setState({selectedCountry : countryName});
    //     this.populateDataForSpecificCountry();
    // }

    render() {
        return (
            <div>
                <div className="country_search_container">
                    <div>
                        <p className="worldwide_para">Search for Country: </p> <br />
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="country_dropdown_button" data-toggle="dropdown">
                            <img src={`https://www.countryflags.io/${this.state.selectedCountryISO}/shiny/24.png`} />
                            &nbsp;
                            {this.state.selectedCountry}
                        </button>
                        <ul class="dropdown-menu">
                            {this.state.countries.map((country, index) => {
                                return <li key={country.iso2} onClick={this.populateDataForSpecificCountry.bind(this, country.name, country.iso2)}>
                                    <a key={country.iso2}>
                                        <img src={`https://www.countryflags.io/${country.iso2}/shiny/24.png`} />
                                        &nbsp;
                                        {country.name}
                                    </a> </li>
                            })}
                        </ul>
                    </div>
                </div>
                <br /><br />

                <div class="worldwide_info_container">
                    <div className="confirmed">
                        <div>
                            <a className="category_label">Confirmed</a> <br /> <br />
                        </div>
                        <div>
                            <img src={Confirmed} className="rotate" alt="Confirmed cases" />
                        </div>
                        <div>
                            <a className="category_value">{this.state.confirmed}</a>
                        </div>
                    </div>
                    <div className="recovered">

                        <div>
                            <a className="category_label">Recovered</a> <br /> <br />
                        </div>
                        <div>
                            <img src={Recovered} className="rotate" alt="Total recovery" />
                        </div>
                        <div>
                            <a className="category_value">{this.state.recovery}</a>
                        </div>
                    </div>
                    <div className="death">

                        <div>
                            <a className="category_label">Deaths</a> <br /> <br />
                        </div>
                        <div>
                            <img src={Death} className="rotate" alt="Total deaths" />
                        </div>
                        <div>
                            <a className="category_value">{this.state.death}</a>
                        </div>
                    </div>
                </div>
                <br />
                <p className="recovery_percentage_para">Recovery Percentage: {((this.state.recovery / this.state.confirmed) * 100).toPrecision(2)}% </p>
                <br /> <br /> <br />
            </div>
        );
    }
}

export default countrySearch;
