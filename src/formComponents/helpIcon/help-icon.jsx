import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const HelpIcon = props => (
  <Icon name="help circle outline" data-bdd-selector={`${props.name}HelpIcon`} />
);

HelpIcon.propTypes = {
  name: PropTypes.string,
};

HelpIcon.defaultProps = {
  name: '',
};

export default HelpIcon;
