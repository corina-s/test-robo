import React from 'react';
import {shallow} from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(()=>{
  const mockProps = {}
})
it('expect to render MainPage Component', () => {
  const mockStore = {
    robots: [],
    searchField: ''
  }
  expect(shallow(<MainPage store={mockStore}/>)).toMatchSnapshot()
})
