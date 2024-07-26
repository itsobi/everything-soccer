import NewsArticle from '@/components/NewsArticle';
import { getSoccerArticles } from '@/lib/getSoccerArticles';

export default async function Home() {
  const articles = await getSoccerArticles();

  return (
    <>
      {articles ? (
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <NewsArticle key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p>Sorry, there was an issue grabbing the latest sports articles.</p>
      )}
    </>
  );
}
