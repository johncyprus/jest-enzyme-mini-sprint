import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr} from '../testUtils';
import SearchBar from './SearchBar';

const defaultProps = {
    images: []
};

const setup = () => {
    return shallow(<SearchBar {...defaultProps} />);
};

test('should render component without error', () => {

});