import './App.css';

import { Component } from 'react';
import { List } from './components/list/list.component';
import { SearchBox } from './components/search-box/search-box.component';

const config = {
  apiKey: 'c13c4600c22a4786a7f7c57956252b9d',
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      trains: [],
      searhField: '',
    };
  }

  componentDidMount() {
    fetch(`https://api-v3.mbta.com/schedules?page%5Blimit%5D=50&sort=departure_time&filter%5Broute_type%5D=2&filter%5Bstop%5D=BNT-0000&api_key=${config.apiKey}`)
      .then((response) => response.json())
      .then((json) => this.setState({ trains: json.data }))
      // preset url params - page 50 limit, sort=departure time, route_type = 2 (2 - Rail. Used for intercity or long-distance travel.), stop = North Station (BNT-0000);
      // potential imrpovements -> set date from UI; create custom object only with needed data 
   }

  handleChange = (e) => {
    this.setState({ searhField: e.target.value });
  };

  render() {
    const { trains, searhField } = this.state;
 
    const filteredTrains = trains.filter((train) =>
      train.relationships.trip.data.id.toLowerCase().includes(searhField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>North Station Departure Schedule</h1>
        <SearchBox
          placeholder="search destination"
          handleChange={this.handleChange}
        />
        <List trains={filteredTrains} />
      </div>
    );
  }
}

export default App;
