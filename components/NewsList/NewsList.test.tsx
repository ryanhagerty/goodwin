import React from 'react';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render, screen } from '../../test-utils';
import { NewsList } from './NewsList';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        response: {
          docs: [
            {
              headline: { main: 'A fantastic article title' },
              snippet: 'Lorem ipsum dolor sit amet',
              section_name: 'Aviation News',
              multimedia: [{ url: 'test-image.jpg', width: 400 }],
              source: 'Goodwin News Inc.',
              web_url: 'https://www.hellogoodwin.com/',
              lead_paragraph: 'Lorem ipsum dolor sit amet',
            },
            {
              headline: { main: 'A fantastic article title 2' },
              snippet: 'Lorem ipsum dolor sit amet 2',
              section_name: 'Aviation News 2',
              multimedia: [{ url: 'test-image-2.jpg', width: 400 }],
              source: 'Goodwin News Inc. 2',
              web_url: 'https://www.hellogoodwin.com/2',
              lead_paragraph: 'Lorem ipsum dolor sit amet 2',
            },
          ],
        },
      }),
  })
) as jest.Mock;

test('renders the NewsList', async () => {
  render(<NewsList />);
  // Loading spinner
  expect(screen.getByRole('status')).toBeVisible();
  await waitFor(() => expect(screen.queryByRole('status')).not.toBeInTheDocument());

  // Check for mock data passed down to NewsCard
  expect(screen.getByText('A fantastic article title')).toBeInTheDocument();
  expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
  expect(screen.getByText('A fantastic article title 2')).toBeInTheDocument();
  expect(screen.getByText('Lorem ipsum dolor sit amet 2')).toBeInTheDocument();
});
