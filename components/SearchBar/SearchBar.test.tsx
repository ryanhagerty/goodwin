import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '../../test-utils';
import { SearchBar } from './SearchBar';
import { SearchBarProps } from '../types/types';

const mockProps: SearchBarProps = {
  loading: Boolean,
  refetch: jest.fn(),
};

describe('SearchBar component', () => {
  it('should update input value and trigger search correctly', () => {
    render(<SearchBar {...mockProps} />);
    const input = screen.getByPlaceholderText('Airlines and airplanes');
    const searchButton = screen.getByText('Search');

    // Finds autocomplete and simulates typing
    fireEvent.change(input, { target: { value: 'aviation' } });

    // Checks our input value to correspond with above
    expect(input).toHaveValue('aviation');

    // Finds search button and clicks
    fireEvent.click(searchButton);
    expect(mockProps.loading).toBeTruthy();
    expect(mockProps.refetch).toHaveBeenCalled();
  });
});
