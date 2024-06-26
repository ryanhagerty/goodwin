'use client';

import { useState } from 'react';
import { useFetch } from '@mantine/hooks';
import { LoadingOverlay, Text } from '@mantine/core';
import { NewsList } from '../NewsList/NewsList';
import { SearchBar } from '../SearchBar/SearchBar';
import { Article, DataResponse } from '../types/types';

export const NewsContainer: React.FC = () => {
  const [searchKeywords, setKeywords] = useState('aviation travel');

  const { data, loading, error, refetch } = useFetch<DataResponse>(
    /* Yikes! An exposed API key! Since this is an exercise, I'm living
     * that cowboy life. In reality, we could call this on the BE so the FE
     * could consume the data, create a proxy call with Express or
     * any number of sane/secure solutions.
     */
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchKeywords}&api-key=WLUy700lQIYfGuDVZ54OtsAcWSNAnPfm`
  );
  const articles = data?.response?.docs;
  const articlesArray: Article[] = articles ?? [];
  const relatedKeywords = ['Aviation', 'Travel', 'Airlines', 'Flights', 'Airports'];

  return (
    <>
      <section>
        {/* NOTE: There is a bug with the loading boolean
         * from useFetch when passed as a prop. Since this is a demo,
         * that's fine, but I would probably revert to regular fetch
         * rather than Mantine's 'use-hook'
         */}
        <LoadingOverlay visible={loading} role="status" />
        <SearchBar keywords={relatedKeywords} setKeywords={setKeywords} refetch={refetch} />
      </section>
      <section>
        <NewsList articles={articlesArray} />
        {error && (
          <Text size="lg" ta="center" c="red">
            Oh no! There seems to be an error with the API loading. Here is where we should make
            some kind of service worker / fall back page.
          </Text>
        )}
      </section>
    </>
  );
};
