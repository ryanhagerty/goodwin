import React from 'react';
import { render, screen } from '../../test-utils';
import { NewsArticle } from './NewsArticle';

describe('NewsArticle', () => {
  const mockArticle = {
    title: 'A fantastic article headline',
    image: {
      url: 'test-image.jpg',
      width: 400,
    },
    source: 'Goodwin News Inc.',
    url: 'https://www.hellogoodwin.com/',
    paragraph: 'Lorem ipsum dolor sit amet',
  };

  it('renders article with data', () => {
    render(
      <NewsArticle
        title={mockArticle.title}
        image={mockArticle.image}
        source={mockArticle.source}
        url={mockArticle.url}
        paragraph={mockArticle.paragraph}
      />
    );

    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
    expect(screen.getByText(mockArticle.paragraph)).toBeInTheDocument();
    expect(
      screen.getByText(`Read the full article at: ${mockArticle.source}`, {
        trim: true,
        collapseWhitespace: true,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        'An image related to travel and aviation. For more image information, please visit the article source.'
      )
    ).toBeInTheDocument();
  });
});
