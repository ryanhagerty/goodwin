import { Title, Text, Image } from '@mantine/core';

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
      <Text size="md" mb={15}>
        Read the full article here: <a href={url}>{source}</a>
      </Text>
    </article>
  </section>
);
