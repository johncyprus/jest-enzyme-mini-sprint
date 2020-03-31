import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr} from '../testUtils';
import App from './App';

const defaultProps = {
    images: []
};

const setup = () => {
    return shallow(<App {...defaultProps} />);
};

test('should render component without error', () => {
    
});