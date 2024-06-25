'use client';

import { useState } from 'react';
import { Card, Image, Title, Text, Badge, Button, Modal } from '@mantine/core';
import { NewsArticle } from '../NewsArticle/NewsArticle';

declare type NewsCardProps = {
  title: string;
  summary: string;
  section: string;
  image: {
    url: string;
    width: number;
  };
  source: string;
  url: string;
  paragraph: string;
};

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  summary,
  section,
  image,
  source,
  url,
  paragraph,
}) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <article style={{ width: '100%', margin: '20px auto' }}>
        <Card shadow="md" padding="lg" style={{ height: '100%' }}>
          <Card.Section mb={15}>
            {image ? (
              <Image
                src={`https://static01.nyt.com/${image.url}`}
                width={image.width}
                height="400"
                /* The NYTimes doesn't offer alt tag info for their
                 * media API, which is bonkers to me. As a fallback,
                 * let's add a generic description instead of
                 * repeating text like the title for screenreaders.
                 */
                alt="An image related to travel and aviation. For more image information, please visit the article source."
              />
            ) : (
              /* Let's provide a fallback generic image just to make
               * the layout look better
               */
              <Image
                src="https://picsum.photos/id/364/600/400"
                height="400"
                alt="An image an airplane near a terminal at the airport in rainy weather"
              />
            )}
          </Card.Section>
          <Badge color="blue" variant="dark" mb={15}>
            {section}
          </Badge>
          <Title order={2} mb={15}>
            {title}
          </Title>
          <Text size="md" mb={15} style={{ lineHeight: 1.5 }}>
            {summary}
          </Text>
          <Button
            onClick={() => setOpened(true)}
            variant="dark"
            color="blue"
            fullWidth
            style={{ marginTop: 'auto' }}
          >
            {/* Here is where we would put a more accessibility compliant
             * description other than 'Read More'
             */}
            Read More
          </Button>
        </Card>
      </article>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="xl"
        padding="xl"
        title="All The News That's Fit to Fly ✈️"
      >
        <NewsArticle title={title} image={image} source={source} url={url} paragraph={paragraph} />
      </Modal>
    </>
  );
};
