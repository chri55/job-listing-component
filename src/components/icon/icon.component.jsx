import React from 'react';

import './icon.styles.scss';

function Icon (props) {
  return (
    <div className="icon">
      <img src={`${props.src}`} alt={`${props.alt}`}/>
    </div>
  )
}

export default Icon;