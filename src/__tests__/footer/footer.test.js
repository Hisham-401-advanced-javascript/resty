import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../../App.js';

describe('<App/>', ()=> {
  it('is alive at application start', () =>{
    let app = mount(<App />);
    expect(app.find('p').exists()).toBeTruthy();
  });

  it('is alive at application start', () =>{
    let app = mount(<App />);
    let footer = app.find('footer');
    expect(footer.find('p').exists()).toBeTruthy();
  });

  it('renders correctly', ()=> {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });


});