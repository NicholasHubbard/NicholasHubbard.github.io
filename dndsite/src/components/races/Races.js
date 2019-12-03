import React, { Component } from 'react';

class Races extends Component {
    constructor() {
        super();
        this.state = {
            races: [],
        }
    }

    componentDidMount() {
        fetch('http://www.dnd5eapi.co/api/races/?results=9')
        .then(results => {
            return results.json();
        }).then(data => {
            let races = data.results.map((race) => {
                return(
                    <div key={race.results}>
                        <p>{race.name}</p>
                    </div>
                )
            })
            this.setState({races: races});
            console.log("state", this.state.races);
        })
    }

    render() {
        return (
            <div className="container2">
                <h1>Dungeons and Dragons List of Races</h1>
                <div className="container1">
                    {this.state.races}
                </div>  
            </div>
            
        )
    }
}

export default Races;