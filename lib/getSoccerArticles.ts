export type Article = {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  image: string | null;
  language: string;
  category: string[];
  published: string;
};

export const getSoccerArticles = async () => {
  const response = await fetch(
    'https://api.currentsapi.services/v1/search?language=en&keywords=soccer',
    {
      method: 'GET',
      next: { revalidate: 86400 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${process.env.CURRENTS_API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  const articlesWithImage = data.news.filter(
    (news: Article) => news.image !== null
  );
  const articlesWithoutImage = data.news.filter(
    (news: Article) => news.image === null
  );

  const sortedArticles: Article[] = [
    ...articlesWithImage,
    ...articlesWithoutImage,
  ];

  return sortedArticles;
};
