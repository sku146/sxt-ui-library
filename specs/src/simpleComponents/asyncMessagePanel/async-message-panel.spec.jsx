import React from 'react';
import renderer from 'react-test-renderer';
import AsyncMessagePanel from 'src/simpleComponents/asyncMessagePanel/async-message-panel';

describe("Async Message Panel", () => {

  let defaultProps = {
    name: 'testAsyncMessagePanel',
    msgType: 'error', // success, error, info, warning, plain(with white background), transparent
    pointPosition: 'left',
    pointing: true,
    isRequested: true,
  };

  const RendererComponent = (props) => {
    return renderer.create(<AsyncMessagePanel {...props}>
      <div>test</div>
    </AsyncMessagePanel>);
  };

  it('component should render as expected', ()=> {
    const component = RendererComponent(defaultProps);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('component should render as expected with isRequested FALSE', ()=> {
    defaultProps.isRequested = false;
    const component = RendererComponent(defaultProps);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
