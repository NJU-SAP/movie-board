import React from 'react';

export default function HomeRowHead(props) {
  return (
    <div className="mb-home-row-head">
      <h2>{props.title}</h2>
    </div>
  );
}

HomeRowHead.propTypes = {
  title: React.PropTypes.string
};

HomeRowHead.defaultProps = {
  title: ''
};
