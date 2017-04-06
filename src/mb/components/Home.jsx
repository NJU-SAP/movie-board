import React from 'react';

import HomeSection from './HomeSection';

export default function Home(props) {
  const rows = Object.keys(props.loaders).map((key) => {
    const model = props.models[key];
    const loader = props.loaders[key];
    return (
      <HomeSection
        key={key}
        model={model}
        loader={loader}
        topic={key}
      />
    );
  });
  return (
    <div className="mb-page mb-home-page">
      <div className="mb-home">
        { rows }
      </div>
    </div>
  );
}

Home.propTypes = {
  loaders: React.PropTypes.shape({}).isRequired
};
