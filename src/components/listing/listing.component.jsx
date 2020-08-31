import React from 'react';
import Icon from '../icon/icon.component';
import Tag from '../tag/tag.component';

import './listing.styles.scss';

function Listing(props) {
  console.log("props: " );
  console.log(props);
  return (
    <div className={`active listing ${props.featured ? 'featured-upper' : ''}`}>
      <div className="row top">
        <Icon className="logo" src={`${props.logo}`} alt={`${props.company}`}></Icon>
      </div>
      <div className="row">
        <div className="inner-row">
          <div className="company">
            {`${props.company}`}
          </div>
          {props.new ? (
            <div className="new"><span>NEW!</span></div>
          ) : null}
          {props.featured ? (
            <div className="featured"><span>FEATURED</span></div>
          ) : null}
        </div>
        <div className="inner-row">
          <div className="position">
            {`${props.position}`}
          </div>
        </div>
        <div className="inner-row">
          <div className="meta posted-at">
            {`${props.postedAt}`}
          </div>
          <span className="spacer">•</span>
          <div className="meta contract">
            {`${props.contract}`}
          </div>
          <span className="spacer">•</span>
          <div className="meta location">
            {`${props.location}`}
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="row bottom">
        <Tag clickFn={props.clickFn} className="tag" special="role" name={`${props.role}`}></Tag>
        <Tag clickFn={props.clickFn} className="tag" special="level" name={`${props.level}`}></Tag>
        {props.languages.map(lang => (
          <Tag clickFn={props.clickFn} className="tag" special="lang" name={`${lang}`}></Tag>
        ))}
        {props.tools.map(tool => (
          <Tag clickFn={props.clickFn} className="tag" special="tool" name={`${tool}`}></Tag>
        ))}
      </div>
    </div>
  );
};

export default Listing;