import React from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';
import { Label } from 'semantic-ui-react';

const MessagePanel = props => (
  <Label
    basic
    className={`message-${props.msgType} position-${props.pointPosition}`}
    pointing={props.pointing}
    data-bdd-selector={`${props.name}${startCase(props.msgType)}Msg`}
  >
    {props.children}
  </Label>
);

MessagePanel.propTypes = {
  name: PropTypes.string,
  msgType: PropTypes.string,
  children: PropTypes.node,
  pointPosition: PropTypes.string,
  pointing: PropTypes.bool,
};

MessagePanel.defaultProps = {
  name: '',
  msgType: 'error', // success, error, info, warning, plain(with white background), transparent
  children: null,
  pointPosition: 'center',
  pointing: true,
};

export default MessagePanel;
