import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Flat from './flat.jsx';
import FlatList from './flat_list.jsx'
import flats from '../../data/flats.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    }
  }

  selectFlat = (index) => {
    this.setstate({selectedflats: flats[index]})
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className='map-container'>
        </div>
      </div>
    )
  }
}

export default App;
