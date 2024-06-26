// Here is where we could store our exported types.
// I'm putting them all here for ease of reference/consistency
export type Article = {
  headline: {
    main: string;
  };
  section_name: string;
  snippet: string;
  multimedia: {
    url: string;
    width: number;
  }[];
  source: string;
  web_url: string;
  lead_paragraph: string;
};

export type NewsListProps = {
  articles: Article[];
};

export type NewsCardProps = {
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

export type NewsArticleProps = {
  title: string;
  image: {
    url: string;
    width: number;
  };
  source: string;
  url: string;
  paragraph: string;
};

export interface DataResponse {
  response: {
    docs: [Article];
  };
}

export type SearchBarProps = {
  keywords: string[];
  setKeywords: React.Dispatch<React.SetStateAction<string>>;
  refetch: () => void;
};
