'use client';

import { useState, useEffect } from 'react';
import { LoadingOverlay } from '@mantine/core';
import classes from './NewsList.module.css';
import { NewsCard } from '../NewsCard/NewsCard';

export function NewsList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        /* Yikes! An exposed API key! Since this is an exercise, I'm living
         * that cowboy life. In reality, we could call this on the BE so the FE
         * could consume the data, create a proxy call with Express or
         * any number of sane/secure solutions.
         */
        const response = await fetch(
          'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=aviation+travel&api-key=WLUy700lQIYfGuDVZ54OtsAcWSNAnPfm'
        );
        const data = await response.json();
        setArticles(data.response.docs);
        setLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(
          'Oh no! There seems to be an error with the API loading. Here is where we should make some kind of service worker / fall back page.',
          error
        );
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <LoadingOverlay visible={loading} role="status" />;
  }

  interface MediaItem {
    url: string;
    width: number;
  }

  interface Article {
    image: string;
    headline: {
      main: string;
    };
    section_name: string;
    snippet: string;
    multimedia: MediaItem[];
    source: string;
    web_url: string;
    lead_paragraph: string;
  }

  return (
    <div className={classes.container}>
      {articles.map((article: Article, i) => (
        <NewsCard
          key={i}
          image={article.multimedia[0]}
          title={article.headline.main}
          summary={article.snippet}
          section={article.section_name}
          source={article.source}
          url={article.web_url}
          paragraph={article.lead_paragraph}
        />
      ))}
    </div>
  );
}
