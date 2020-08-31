import React, { Component } from 'react';

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      set: false,
    }
  }

  isClicked (e) {
    this.props.clickFn(e);
  }

  render() {
    return (
      <div onClick={(e) => this.props.clickFn(e)} className={`tag ${this.props.special}`}>
        {`${this.props.name}`}
      </div>
    );
  }
}

export default Tag;