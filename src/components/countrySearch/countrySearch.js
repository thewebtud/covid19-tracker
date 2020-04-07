import React from "react";
import axios from 'axios';
import './countrySearch.css';

export class countrySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmed: 0,
            recovery: 0,
            death: 0,
            countries: [],
            selectedCountry: 'India',
            recoveryPerentage: 0
        };
    }

    componentWillMount() {
        axios.get('https://covid19.mathdro.id/api/countries')
        .then(response => {
            this.setState({countries: response.data.countries});
        });
        this.populateDataForSpecificCountry(this.state.selectedCountry);
    }

    componentWillUpdate() {

    }

    populateDataForSpecificCountry(selectedCountry) {
        this.setState({selectedCountry: selectedCountry});
        axios.get('https://covid19.mathdro.id/api/countries/'+selectedCountry)
        .then(response => {
            this.setState({confirmed: response.data.confirmed.value});
            this.setState({recovery: response.data.recovered.value});
            this.setState({death: response.data.deaths.value});
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
                   <p className = "worldwide_para">Search for Country: </p> <br/>
                   </div>
                   <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.state.selectedCountry}
                    </button>
                    <ul class="dropdown-menu">
                        {this.state.countries.map((country, index) => {
                            return <li key={country.iso2} onClick={this.populateDataForSpecificCountry.bind(this, country.name)}><a key={country.iso2}>{country.name}</a></li>
                        })}
                    </ul>
                    </div>
                </div>
                   <br/><br/>

                   <div class="worldwide_info_container">
                   <div className="confirmed">
                       <a className="category_label">Confirmed</a> <br/> <br/>
                       <a className="category_value">{this.state.confirmed}</a>
                   </div>
                   <div className="recovered">
                       <a className="category_label">Recovered</a> <br/> <br/>
                       <a className="category_value">{this.state.recovery}</a>
                    </div>  
                   <div className="death">
                       <a className="category_label">Deaths</a> <br/> <br/>
                       <a className="category_value">{this.state.death}</a>
                    </div>
               </div>
               <br/>    
               <p className="recovery_percentage_para">Recovery Percentage: {((this.state.recovery / this.state.confirmed) * 100).toPrecision(2)}% </p>
               <br/> <br/> <br/>
           </div>
        );
    }
}

export default countrySearch;
