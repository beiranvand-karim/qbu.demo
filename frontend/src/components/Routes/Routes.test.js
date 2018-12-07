import {MemoryRouter} from "react-router-dom"
import {mount, shallow} from "enzyme"
import React from 'react'
import {Provider} from 'react-redux'
import {store} from "../../store"
import {Routes} from "./index"
import Home from "../Home"
import {CreateQuestion} from "../../containers/CreateQuestion"
import renderer from "react-test-renderer"


describe('<Routes />', () => {

   let wrapper = (path) => mount(
      <MemoryRouter initialEntries={[path]}>
         <Provider store={store}>
            <Routes />
         </Provider>
      </MemoryRouter>
   );

   it('should render without crashing', () => {
      shallow(<Home/>)
   });

   it('should route to /', () => {
      const path = '/';
      const comp = wrapper(path);
      expect(comp.find(Home)).toHaveLength(1);
      expect(comp.find(CreateQuestion)).toHaveLength(0);
   });

   it('should route to /home', () => {
      const path = '/home';
      const comp = wrapper(path);
      expect(comp.find(Home)).toHaveLength(1);
      expect(comp.find(CreateQuestion)).toHaveLength(0);
   });


   it('should route to /createQuestion', () => {
      const path = '/createQuestion';
      const comp = wrapper(path);
      expect(comp.find(Home)).toHaveLength(0);
      expect(comp.find(CreateQuestion)).toHaveLength(1);
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><Routes/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});
