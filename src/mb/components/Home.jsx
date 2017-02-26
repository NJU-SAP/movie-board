import React from 'react';

import HomeRow from './HomeRow';

export default class Home extends React.Component {
  static propTypes = {
    models: React.PropTypes.shape({}).isRequired,
    loaders: React.PropTypes.shape({}).isRequired
  }

  render() {
    const rows = Object.keys(this.props.models).map((key) => {
      const model = this.props.models[key];
      const loader = this.props.loaders[key];
      return <HomeRow key={key} model={model} loader={loader} />;
    });
    return (
      <div className="mb-home">
        { rows }
      </div>
    );
  }
}
