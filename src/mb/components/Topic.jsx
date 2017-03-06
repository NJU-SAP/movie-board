import React from 'react';

export default class Topic extends React.Component {
  static propTypes = {
    model: React.PropTypes.shape({
      subjects: React.PropTypes.array
    }),
    loadTopic: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    model: {
      subjects: []
    }
  };

  componentDidMount() {
    if (!this.props.model) {
      this.props.loadTopic();
    }
  }

  render() {
    return (
      <h2>Topic page is under construction</h2>
    );
  }
}
