import React from 'react';
import renderer from 'react-test-renderer';
import LabelHelpIcon from 'src/formComponents/labelHelpIcon/label-help-Icon.jsx';

describe("LabelHelpIcon", () => {

  let defaultProps = {
    name: 'test label name',
    text: 'label text',
    helpHeader: 'Help',
  };

  const RendererComponent = (props) => {
    return renderer.create(<LabelHelpIcon {...props}><div>Children test</div></LabelHelpIcon>);
  };

  it('component should render as expected', ()=> {
    const component = RendererComponent(defaultProps);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('component should render as expected with helpContent', ()=> {
    defaultProps.helpContent = 'In development';
    const component = RendererComponent(defaultProps);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
