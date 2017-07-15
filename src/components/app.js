import React, { Component } from 'react';
import SearchBar from './search_bar';


const API_KEY = 'AIzaSyBG0k35sC72spMm4noocemn1UKimfHOvBs';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
