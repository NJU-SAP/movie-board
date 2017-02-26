import cn from 'classnames';
import React from 'react';
import 'octicons/build/octicons.css';

export default function Icon(props) {
  return (
    <span
      className={cn('icon', 'octicon', `octicon-${props.iconName}`, props.className)}
      title={props.iconName}
    />
  );
}

Icon.propTypes = {
  className: React.PropTypes.string,
  iconName: React.PropTypes.string.isRequired,
};

Icon.defaultProps = {
  onClick: () => {},
  className: '',
};
