import React from 'react';

export default function HomeRowHead(props) {
  return (
    <div>
      <h2 className="mb-section-header">{props.title}</h2>
    </div>
  );
}

HomeRowHead.propTypes = {
  title: React.PropTypes.string
};

HomeRowHead.defaultProps = {
  title: ''
};
