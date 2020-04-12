import React from "react";
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './indianStateWise.css'

export class indianStateWise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indianState:'',
            confirmed: 0,
            recovered: 0,
            death: 0,
            stateData: []
            
        };
    }

    componentWillMount() {
        axios.get('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise')
        .then(response => {
            console.log(response.data.data.statewise);
            this.setState({stateData: response.data.data.statewise});
        });
        
    }

    render() {
        return (
           <div className="statewise_outer_div">
               <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>State </th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.stateData.map((eachState, index)=>(
                                 <tr>
                                 <td>{index+1}</td>
                                 <td>{eachState.state}</td>
                                 <td>{eachState.confirmed}</td>
                                 <td>{eachState.recovered}</td>
                                 <td>{eachState.deaths}</td>
                                 </tr>
                            ))}
                           
                        </tbody>
                </Table>
           </div>
        );
    }
}

export default indianStateWise;
