import React from 'react';

import HomeRow from './HomeRow';

export default class Home extends React.Component {
  static propTypes = {
    models: React.PropTypes.shape({}).isRequired
  }

  render() {
    const rows = Object.keys(this.props.models).map((key) => {
      const model = this.props.models[key];
      return <HomeRow key={key} model={model} />;
    });
    return (
      <div className="mb-home">
        { rows }
      </div>
    );
  }
}
