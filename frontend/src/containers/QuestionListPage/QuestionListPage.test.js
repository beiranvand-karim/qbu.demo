/* global describe, it, expect, jest */
import React from 'react'
import {shallow} from 'enzyme'
import {QuestionListPage} from './'

describe('<QuestionListPage />',() => {
   it('should render without crashing', () => {
      shallow(<QuestionListPage />)
   });
});