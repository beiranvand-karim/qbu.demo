import React from 'react'
import ReactDOM from 'react-dom'
import App from './'
import {MemoryRouter} from "react-router-dom"
import renderer from "react-test-renderer"

describe('<App />', () => {

   it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App/>, div);
      ReactDOM.unmountComponentAtNode(div);
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><App/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });

});

