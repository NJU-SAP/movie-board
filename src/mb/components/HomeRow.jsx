import React from 'react';

import HomeRowContent from './HomeRowContent';
import HomeRowHead from './HomeRowHead';

export default class HomeRow extends React.Component {
  componentDidMount() {
    if (!this.props.model.title) {
      this.props.loader();
    }
  }

  render() {
    return (
      <div className="mb-home-row">
        <HomeRowHead title={this.props.model.title} />
        <HomeRowContent movies={this.props.model.subjects} />
      </div>
    );
  }
}

HomeRow.propTypes = {
  loader: React.PropTypes.func.isRequired,
  model: React.PropTypes.shape({
    count: React.PropTypes.isRequired,
    subjects: React.PropTypes.array,
    title: React.PropTypes.string
  }).isRequired
};
