import classes from './NewsList.module.css';
import { NewsCard } from '../NewsCard/NewsCard';
import { Article, NewsListProps } from '../types/types';

export const NewsList: React.FC<NewsListProps> = ({ articles }) => (
  <div className={classes.container}>
    {articles?.map((article: Article, i) => (
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
