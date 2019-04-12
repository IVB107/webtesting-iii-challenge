import React from 'react';
import { render, fireEvent, cleanup, getByText } from 'react-testing-library';
import 'jest-dom/extend-expect'; 
import "react-testing-library/cleanup-after-each";

import Dashboard from './Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';

describe('Dashboard', () => {
  
  it('Renders the component', () => {
    render(<Dashboard />);
  });

  it('Shows the controls and display', () => {
    const { getByText } = render(<Dashboard />);

    getByText(/open/i);
    getByText(/unlocked/i);
    getByText(/close gate/i);
    getByText(/lock gate/i)
  })
  
})
