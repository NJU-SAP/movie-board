import React from 'react';

import HomeRowContent from './HomeRowContent';
import HomeRowHead from './HomeRowHead';

export default function HomeRow(props) {
  return (
    <div className="mb-home-row">
      <HomeRowHead title={props.model.title} />
      <HomeRowContent movies={props.model.subjects} />
    </div>
  );
}

HomeRow.propTypes = {
  model: React.PropTypes.shape({
    count: React.PropTypes.isRequired,
    subjects: React.PropTypes.array,
    title: React.PropTypes.string
  }).isRequired
};
