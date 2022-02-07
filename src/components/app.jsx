import React, { Component } from 'react';

import Flat from './flat.jsx';
import FlatList from './flat_list.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedflats: flats[0],
      flats
    }

  }

  render() {
    return (
      <div>
        <div className='flat-list'>
          <FlatList flats = {this.state.flats} />
        </div>
        <div className='map-container'>
        </div>
      </div>
    )
  }
}

export default App;
