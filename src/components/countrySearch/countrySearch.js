import React from "react";
import axios from 'axios';
import './countrySearch.css';

export class countrySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmed: 0,
            recovery: 0,
            death: 0
        };
    }

    componentWillMount() {
        // axios.get('https://covid19.mathdro.id/api')
        // .then(response => {
        //     console.log(response.data);
        //     this.setState({confirmed: response.data.confirmed.value});
        //     this.setState({recovery: response.data.recovered.value});
        //     this.setState({death: response.data.deaths.value});
        // })
    }

    render() {
       
        return (
           <div>
               <div className="country_search_container">
                   <div>
                   <p className = "worldwide_para">Search for Country: </p> <br/>
                   </div>
                   <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select Country
                    </button>
                    <ul class="dropdown-menu">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
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
           </div>
        );
    }
}

export default countrySearch;
