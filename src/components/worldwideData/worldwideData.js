import React from "react";
import CoronaMaskLogo from '../../img/coronalogo.svg';
import axios from 'axios';
import './worldwideData.css';
import Confirmed from '../../img/done.svg';
import Recovered from '../../img/recovered.svg';
import Death from '../../img/death.svg';

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
                this.setState({ confirmed: response.data.confirmed.value });
                this.setState({ recovery: response.data.recovered.value });
                this.setState({ death: response.data.deaths.value });
            })
    }

    render() {

        return (
            <div>
                <div className="worldwide_top_logo_container">
                    <img src={CoronaMaskLogo} className="rotate" alt="Go Corona.. Corona Go" />
                </div>
                <div>
                    <p className="worldwide_para">Global Data </p>
                </div>

                <br /><br />
                <div class="worldwide_info_container">
                    <div className="confirmed">
                        <div>
                            <a className="category_label">Confirmed</a> <br /> <br />
                        </div>
                        <div>
                            <img src={Confirmed} className="rotate" id="rotating_three_logo" alt="Confirmed cases" />
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
                            <img src={Recovered} className="rotate" id="rotating_three_logo" alt="Total recovery" />
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
                            <img src={Death} className="rotate" id="rotating_three_logo" alt="Total deaths" />
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

export default Worldwide;
