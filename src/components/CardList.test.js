import React from 'react';
import {shallow} from 'enzyme';
import CardList from './CardList';

it('expect to render Snapshot of Card Component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Jon Snow',
            username: 'Jon',
            email: "j@j.com"
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})