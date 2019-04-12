import React from 'react';
import { render, fireEvent, cleanup, getByText } from 'react-testing-library';
import 'jest-dom/extend-expect'; 
import "react-testing-library/cleanup-after-each";

import Dashboard from './Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';

describe('Controls', () => {
  
  it('Renders the component', () => {
    render(<Dashboard />);
  });

  // const appTree = (
  //   <Dashboard >
  //     <Display />
  //     <Controls />
  //   </Dashboard>
  // );

  // it('Displays if gate is open/closed and if it is locked/unlocked', () => {
  //   // const { getByText } = render(appTree);
  //   const { getByText } = render(<Display locked={false} closed={false} />);

  //   getByText(/open/i);

  // });
  
  // it('Displays "Closed" if the closed prop is true and "Open" if otherwise', () => {
  //   // Test stuff
  // });

  // it('Displays "Locked" if the locked prop is true and "Unlocked" if otherwise', () => {
  //   // Test stuff
  // });

  // it('Should use the red-led class when locked or closed.', () => {
  //   // Test stuff
  // });

  // it('Should use the green-led class when unlocked or open.', () => {
  //   // Test stuff
  // });
  

})
