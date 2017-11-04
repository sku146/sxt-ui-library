import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';
import HelpIcon from '../helpIcon';

const LabelHelpIcon = props => (
  <div className="label-help-icon">
    <label
      className="css-label"
      data-bdd-selector={`${props.name}Label`}
      htmlFor={props.name}
    >
      {props.text}
    </label>
    {props.helpContent &&
    <Popup
      key={`help-${props.name}`}
      trigger={<HelpIcon name={props.name} />}
      header={props.helpHeader}
      content={props.helpContent}
      on="click"
      hideOnScroll
      data-bdd-selector={`${props.name}Help`}
    />
    }
    {props.children}
  </div>
);

LabelHelpIcon.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  helpContent: PropTypes.node,
  helpHeader: PropTypes.string,
  children: PropTypes.node,
};

LabelHelpIcon.defaultProps = {
  name: '',
  text: '',
  helpContent: null,
  helpHeader: '',
  children: null,
};

export default LabelHelpIcon;
