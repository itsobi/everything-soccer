import { Article } from '@/lib/getSoccerArticles';

export default function NewsArticle({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded flex flex-col justify-center items-center border shadow hover:scale-105 transition-all duration-300 ease-in-out hover:bg-gray-100/25"
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="object-cover rounded p-4"
        />
      )}
      <div className="flex-col items-center space-y-4 mt-4 p-4 lg:p-8">
        <h4 className="font-semibold text-lg font-serif">{article.title}</h4>
        <p className="line-clamp-3 mb-4">{article.description}</p>

        <div className="flex-col justify-end text-sm font-light text-right text-gray-400">
          <p>{article.author}</p>
          <p className="text-xs">
            {new Date(article.published).toLocaleDateString()}
          </p>
        </div>
      </div>
    </a>
  );
}
