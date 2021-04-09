import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';

it('expect to render Card Component', () => {
    expect(shallow(<Card/>).length).toEqual(1)
})
it('expect to render Snapshot of Card Component', () => {
    expect(shallow(<Card/>)).toMatchSnapshot();
})

