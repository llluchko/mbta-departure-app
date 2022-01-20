import './App.css';
import { Component } from 'react';
import { List } from './components/list/list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      departures: [],
      searhField: '',
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://api-v3.mbta.com/schedules?filter%5Bdate%5D=2022-01-22&filter%5Broute_type%5D=2&filter%5Bstop%5D=BNT-0000')
      .then((response) => response.json())
      .then((response) => console.log(response))
      // .then((users) => this.setState({ departures: users }));
  }

  // e is a function parameter
  // javasctipt by default doesn't set the context
  // arrow function automaticly define this (the context) -> we don't need to bind the function

  handleChange = (e) => {
    this.setState({ searhField: e.target.value });
  };

  render() {
    const { departures, searhField } = this.state;
    // const departures = this.state.departures;
    // const searchField = this.state.searchField;
    // setState is async - undefined amount of time - javascript doesn't know about it
    const filteredDepartures = departures.filter((departure) =>
      departure.name.toLowerCase().includes(searhField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>North Station Departure Schedule</h1>
        <SearchBox
          placeholder="search destination"
          handleChange={this.handleChange}
        />
        <List departures={filteredDepartures} />
      </div>
    );
  }
}

export default App;
