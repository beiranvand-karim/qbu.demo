/* global describe, it, expect */
import React from "react"
import {CreateQuestionOptionList} from "./"
import {shallow} from "enzyme"
import renderer from 'react-test-renderer'
import {MemoryRouter} from "react-router-dom"

describe('<CreateQuestionOptionList />', () => {
   it('should render without crashing', () => {
      shallow(<CreateQuestionOptionList />)
   });

   it('should matches the snapshot', function () {
      const tree = renderer.create(<MemoryRouter><CreateQuestionOptionList /></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});