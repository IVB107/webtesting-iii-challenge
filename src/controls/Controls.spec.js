import React from 'react';
import { render, fireEvent, cleanup, getByText } from 'react-testing-library';
import 'jest-dom/extend-expect'; 
import "react-testing-library/cleanup-after-each";

import Controls from './Controls';
import Display from '../display/Display';
import Dashboard from '../dashboard/Dashboard';

describe('Controls', () => {
  
  it('Renders the component', () => {
    render(<Controls />);
  });

  it('Provides buttons to toggle the closed and locked states', () => {
    const { getByText } = render(<Controls />);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });

  it('changes button text to reflect the state the door will be in if clicked', () => {
    const { getByText } = render(<Controls />);
    
    getByText(/close gate/i);
  });
  
  it('Should toggle the closed sign if the gate is closed', () => {
    const { queryByText, getByText, rerender } = render(<Controls closed={true}/>);
    
    expect(queryByText(/close gate/i)).toBeNull();
    rerender(<Controls closed={false}/>);
    expect(queryByText(/open gate/i)).toBeNull();
  });

  it('Should disable the locked toggle button when the gate is open', () => {
    const { queryByText, getByText, rerender } = render(<Controls closed={false}/>);

    expect(queryByText(/lock gate/i).disabled).toBeTruthy();
    rerender(<Controls closed={true}/>);
    expect(queryByText(/lock gate/i).disabled).toBeFalsy();
  })

})