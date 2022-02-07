import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map(flat => {
      return <Flat id={flat.id} key={flat.id} />
    })
  };

  render() {
    return (
      <div className='flat-list'>
        {this.renderList()}
      </div>
    );
  }
}

export default Flatlist;
