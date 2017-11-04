import React from 'react';
import renderer from 'react-test-renderer';
import MessagePanel from 'src/simpleComponents/messagePanel/message-panel';

describe("Message Panel", () => {

  let defaultProps = {
    name: 'testMessagePanel',
    msgType: 'error', // success, error, info, warning, plain(with white background), transparent
    pointPosition: 'left',
    pointing: true,
  };

  const RendererComponent = (props) => {
    return renderer.create(<MessagePanel {...props}><div>test</div></MessagePanel>);
  };

  it('component should render as expected', ()=> {
    const component = RendererComponent(defaultProps);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
