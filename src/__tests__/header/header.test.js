import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../../App.js';

describe('<App/>', ()=> {
  it('is alive at application start', () =>{
    let app = mount(<App />);
    expect(app.find('h1').exists()).toBeTruthy();
  });
    
  it('is alive at application start', () =>{
    let app = mount(<App />);
    let header = app.find('header');
    expect(header.find('h1').exists()).toBeTruthy();
  });

  it('renders correctly', ()=> {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });


});