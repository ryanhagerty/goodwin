'use client';

import { useState, useEffect } from 'react';
import { LoadingOverlay, Text } from '@mantine/core';
import { NewsList } from '../NewsList/NewsList';
import { SearchBar } from '../SearchBar/SearchBar';

export const NewsContainer: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [loadingError, setError] = useState(false);
  const searchKeywords = 'aviation travel';

  const fetchArticles = async (keywords: string) => {
    try {
      /* Yikes! An exposed API key! Since this is an exercise, I'm living
       * that cowboy life. In reality, Next.js offers many solutions to this
       * along with other secure options such as SSR, an Express proxy, etc.
       */
      const response = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keywords}&api-key=${process.env.NEXT_PUBLIC_NYTIMES_API_KEY}`
      );
      const data = await response.json();
      setArticles(data.response.docs);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(searchKeywords);
  }, []);

  if (loading) {
    return <LoadingOverlay visible={loading} role="status" />;
  }

  return (
    <>
      <section>
        <LoadingOverlay visible={loading} role="status" />
        <SearchBar refetch={fetchArticles} loading={setLoading} />
      </section>
      <section>
        <NewsList articles={articles} />
        {loadingError && (
          <Text size="lg" ta="center" c="red">
            Oh no! There seems to be an error with the API loading. Here is where we should make
            some kind of service worker / fall back page.
          </Text>
        )}
      </section>
    </>
  );
};
