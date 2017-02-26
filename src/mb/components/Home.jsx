import React from 'react';

import HomeRow from './HomeRow';

export default function Home(props) {
  const rows = Object.keys(props.loaders).map((key) => {
    const model = props.models[key];
    const loader = props.loaders[key];
    return <HomeRow key={key} model={model} loader={loader} />;
  });
  return (
    <div className="mb-home">
      { rows }
    </div>
  );
}

Home.propTypes = {
  models: React.PropTypes.shape({}).isRequired,
  loaders: React.PropTypes.shape({}).isRequired
};
