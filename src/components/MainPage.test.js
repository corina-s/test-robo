import React from 'react';
import {shallow} from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(()=>{
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  let wrapper = shallow(<MainPage { ...mockProps}/>)
})
it('renders MainPage without crashing', () => {
  
  expect(wrapper).toMatchSnapshot()
})
it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: false
  }
  let wrapper2 = shallow(<MainPage {...mockProps2}/>)
  // expect(wrapper2.instance().filterRobots()).toEqual([])
  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 3,
    name: 'John',
    email: 'john@gmail.com'
  }])
})
it('filters robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false
  }
  let filteredRobots = []
  let wrapper3 = shallow(<MainPage {...mockProps3}/>)
  // expect(wrapper2.instance().filterRobots()).toEqual([])
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots)
})
