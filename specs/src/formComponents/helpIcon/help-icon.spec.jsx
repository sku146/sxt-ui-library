import React from 'react';
import renderer from 'react-test-renderer';
import HelpIcon from 'src/formComponents/helpIcon/help-icon';

describe("Help Icon", () => {

  let defaultProps = {
    name: 'test label name',
  };

  const RendererComponent = (props) => {
    return renderer.create(<HelpIcon {...props} />);
  };

  it('component should render as expected', ()=> {
    const component = RendererComponent(defaultProps);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
