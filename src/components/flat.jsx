import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const src = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg"
    return (
      <img src={ src } alt='' className='flat'/>
    );
  }
}

export default Flat;
