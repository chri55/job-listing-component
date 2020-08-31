import React, { Component } from 'react';

import './filter.styles.scss';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }

  render() {
    const { filters } = this.props;
    const filtersExist = Object.keys(this.props.filters).length === 0 && this.props.filters.constructor === Object;
    return (
      <div className={`${!filtersExist ? '' : 'inactive' } filter-set`}>
        <div className="filters">
          { Object.entries(filters).filter(([k, v]) => {
              if (v) return k 
            }).map(filter => {
              return (
                <div className="filter">
                  <span onClick={this.props.clickFn} className="name">{`${filter[0]}`}</span>
                  <span className="remove">X</span>
                </div>
              );
            })
          }
        </div>
        <div onClick={(e) => this.props.clickClear(e)} className="clear">
          Clear
        </div>
        
      </div>
    );
  }
}

export default Filters;