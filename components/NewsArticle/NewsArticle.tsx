import Link from 'next/link';
import { Title, Text, Image, Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

declare type NewsArticleProps = {
  title: string;
  image: {
    url: string;
    width: number;
  };
  source: string;
  url: string;
  paragraph: string;
};

export const NewsArticle: React.FC<NewsArticleProps> = ({
  title,
  image,
  source,
  url,
  paragraph,
}) => (
  <section>
    <header>
      <Title my={30}>{title}</Title>
    </header>
    <article>
      {/* Because this is repeated in the parent NewsCard,
       * we should abstract the image out into its own
       * component
       */}
      {image ? (
        <Image
          src={`https://static01.nyt.com/${image.url}`}
          width={image.width}
          height="400"
          alt="An image related to travel and aviation. For more image information, please visit the article source."
          mb={20}
        />
      ) : (
        <Image
          src="https://picsum.photos/id/364/600/400"
          height="400"
          alt="An image an airplane near a terminal at the airport in rainy weather"
          mb={20}
        />
      )}
      <Text size="lg" mb={30}>
        {paragraph}
      </Text>
      <Button size="lg" component={Link} href={url} rightSection={<IconExternalLink size={20} />}>
        Read the full article at: {source}
      </Button>
    </article>
  </section>
);
