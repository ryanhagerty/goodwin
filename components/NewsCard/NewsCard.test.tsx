import React from 'react';
import { render, screen } from '../../test-utils';
import { NewsCard } from './NewsCard';

describe('NewsCard', () => {
  const mockCard = {
    title: 'A fantastic article title',
    summary: 'Lorem ipsum dolor sit amet',
    section: 'Aviation News',
    image: {
      url: 'test-image.jpg',
      width: 400,
    },
    source: 'Goodwin News Inc.',
    url: 'https://www.hellogoodwin.com/',
    paragraph: 'Lorem ipsum dolor sit amet',
  };

  it('renders a news card with data', () => {
    render(
      <NewsCard
        title={mockCard.title}
        summary={mockCard.summary}
        section={mockCard.section}
        image={mockCard.image}
        source={mockCard.source}
        url={mockCard.url}
        paragraph={mockCard.paragraph}
      />
    );

    expect(screen.getByText(mockCard.title)).toBeInTheDocument();
    expect(screen.getByText(mockCard.summary)).toBeInTheDocument();
    expect(screen.getByText(mockCard.section)).toBeInTheDocument();
    expect(
      screen.getByAltText(
        'An image related to travel and aviation. For more image information, please visit the article source.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Read More')).toBeInTheDocument();
  });
});
