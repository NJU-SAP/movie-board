import cn from 'classnames';
import React from 'react';
import 'octicons/octicons/octicons.css';

export default function Icon(props) {
  return (
    <span
      className={cn('icon', 'octicon', `octicon-${props.iconName}`, props.className)}
      title={props.iconName}
      onClick={props.onClick}
    />
  );
}

Icon.propTypes = {
  className: React.PropTypes.string,
  iconName: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

Icon.defaultProps = {
  onClick: () => {},
  className: '',
};
