import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../../App.js';

describe('<App/>', ()=> {
  it('is alive at application start', () =>{
    let app = mount(<App />);
    expect(app.find('label').exists()).toBeTruthy();
  });

  //   it('changes state on click', ()=> {
  //     let app = mount(<Main />);
  //     let button = app.find('button');
  //     button.simulate('click');
  //     expect(app.state('isPlacingOrder')).toBe(true);
  //   });

  it('renders correctly', ()=> {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });


});