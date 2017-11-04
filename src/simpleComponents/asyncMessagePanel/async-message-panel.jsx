import React from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';
import { Label, Dimmer, Loader } from 'semantic-ui-react';

const AsyncMessagePanel = props => (
  <Label
    basic
    className={`message-${props.msgType} position-${props.pointPosition}`}
    pointing={props.pointing}
    data-bdd-selector={`${props.name}${startCase(props.msgType)}Msg`}
  >
    <Dimmer active={props.isRequested} inverted>
      <Loader inverted />
    </Dimmer>
    {props.children}
  </Label>
);

AsyncMessagePanel.propTypes = {
  name: PropTypes.string,
  msgType: PropTypes.string,
  children: PropTypes.node,
  pointPosition: PropTypes.string,
  pointing: PropTypes.bool,
  isRequested: PropTypes.bool,
};

AsyncMessagePanel.defaultProps = {
  name: '',
  msgType: 'error', // success, error, info, warning, plain(with white background), transparent
  children: null,
  pointPosition: 'center',
  pointing: true,
  isRequested: true,
};

export default AsyncMessagePanel;
