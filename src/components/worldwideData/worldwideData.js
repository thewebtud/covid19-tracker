import React from "react";
import CoronaMaskLogo from '../../img/coronalogo.svg';
import axios from 'axios';
import './worldwideData.css';

export class Worldwide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmed: 0,
            recovery: 0,
            death: 0
        };
    }

    componentWillMount() {
        axios.get('https://covid19.mathdro.id/api')
        .then(response => {
            console.log(response.data);
            this.setState({confirmed: response.data.confirmed.value});
            this.setState({recovery: response.data.recovered.value});
            this.setState({death: response.data.deaths.value});
        })
    }

    render() {
       
        return (
           <div>
               <div className = "worldwide_top_logo_container">
                   <img src = {CoronaMaskLogo} className="rotate" alt = "Go Corona.. Corona Go" />
               </div>
               <div>
                   <p className = "worldwide_para">Data from whole world: </p>
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
               <br/> <br/> <br/>
           </div>
        );
    }
}

export default Worldwide;
