import React from 'react';
import { render, fireEvent, cleanup, getByText } from 'react-testing-library';
import 'jest-dom/extend-expect'; 
import "react-testing-library/cleanup-after-each";

import Display from './Display';
import Controls from '../controls/Controls';
import Dashboard from '../dashboard/Dashboard';

describe('Controls', () => {
  
  it('Renders the component', () => {
    render(<Display />);
  });

  // const appTree = (
  //   <Dashboard >
  //     <Display />
  //     <Controls />
  //   </Dashboard>
  // );

  describe('Display Text', () => {
    
    it('Displays if gate is open/closed and if it is locked/unlocked', () => {
      const { queryByText, rerender } = render(<Display closed={false} />);
  
      expect(queryByText(/closed/i)).toBeNull();
      rerender(<Display closed={true} />);
      expect(queryByText(/open/i)).toBeNull();
    });
    
    it('Displays "Closed" if the closed prop is true and "Open" if otherwise', () => {
      const { queryByText, rerender } = render(<Display closed={true} />);
  
      expect(queryByText(/closed/i)).toBeTruthy();
      rerender(<Display closed={false} />);
      expect(queryByText(/open/i)).toBeTruthy();
    });
  
    it('Displays "Locked" if the locked prop is true and "Unlocked" if otherwise', () => {
      const { getByText, rerender } = render(<Display locked={true} />);    
      
      expect(getByText(/locked/i)).toHaveTextContent('Locked');
      rerender(<Display locked={false} />);
      expect(getByText(/locked/i)).toHaveTextContent('Unlocked');
    });

  });

  describe('Display Colors', () => {

    it('Should use the red-led class when locked or closed.', () => {
      const { getByText, rerender } = render(<Display locked={true} />);
      
      expect(getByText(/locked/i)).toHaveClass('red-led');
      rerender(<Display locked={false} />);
      expect(getByText(/locked/i)).toHaveClass('green-led');
    });
    
    it('Should use the green-led class when unlocked or open.', () => {
      const { getByText, rerender } = render(<Display closed={true} />);
      
      expect(getByText(/closed/i)).toHaveClass('red-led');
      rerender(<Display locked={false} />);
      expect(getByText(/open/i)).toHaveClass('green-led');
    });
    
  });

})