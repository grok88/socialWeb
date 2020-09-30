import React from 'react';
import SamuraiApp from "./App";
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SamuraiApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
