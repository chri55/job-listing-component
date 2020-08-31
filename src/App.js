import React, { Component } from 'react';
import Filters from './components/filters/filters.component';
import Header from './components/header/header.component';
import Listing from './components/listing/listing.component';
import data from './data/data.json';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {},
    }
    this.handleClick = this.handleClick.bind(this);
    this.clickClear = this.clickClear.bind(this);
  }

  checkEmptyFilters() {
    const isFalse = (val) => {
      return !val;
    }

    if (Object.values(this.state.filters).every(isFalse)) {
      this.setState({filters: {}});
    }
  }

  handleClick(e) {
    //if (e.preventDefault) e.preventDefault();
    console.log(e.target.innerHTML);
    const filter = e.target.innerHTML;
    if (this.state.filters[filter]) {
      const newFilters = this.state.filters;
      newFilters[filter] = false;
      this.setState({filters: newFilters}, this.checkEmptyFilters);
    } else {
      const newFilters = this.state.filters;
      newFilters[filter] = true;
      this.setState({filters: newFilters}, this.checkEmptyFilters);
    }
  }

  clickClear(e) {
    this.setState({filters: {}})
  }

  render() {
    console.log(data);
    return (
      <div className="App">
        <Header></Header>
        <div className="listings-container">
        <Filters clickClear={this.clickClear} clickFn={this.handleClick} filters={this.state.filters}></Filters>
        {data.filter(listing => {
          const {level, role, languages, tools} = listing;
          if (Object.keys(this.state.filters).length === 0 && 
              this.state.filters.constructor === Object) return listing;
          else {
            if (this.state.filters[level]) return listing;
            if (this.state.filters[role]) return listing;
            if (languages.filter((lang) => {
              if (this.state.filters[lang]) return lang;
            }).length > 0) return listing;
            if (tools.filter((tool) => {
              if (this.state.filters[tools]) return tool;
            }).length > 0) return listing;
          }
        }).map(listing => {
          return (
            <Listing clickFn={this.handleClick} {...listing}></Listing>
          );
        })}
        </div>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://christill.net">Chris Till</a>.
        </div>
      </div>
    );
  }
  
}

export default App;
