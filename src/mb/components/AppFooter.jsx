import React from 'react';

import Icon from './Icon';

export default function AppFooter() {
  return (
    <div className="mb-app-footer">
      <a className="about" href="https://github.com/NJU-SAP/movie-board" target="_blank">
        <Icon iconName="mark-github" />
        Fork on Github
      </a>
    </div>
  );
}
