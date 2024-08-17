import { Article } from '@/lib/getSoccerArticles';
import { Button } from './ui/button';
import Link from 'next/link';

export default function NewsArticle({ article }: { article: Article }) {
  return (
    <div className="rounded flex flex-col justify-center items-center border shadow">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-[250px] object-contain p-4"
        />
      )}
      <div className="flex-col items-center space-y-4 p-4 lg:p-8">
        <h4 className="font-semibold text-lg font-serif">{article.title}</h4>
        <p className="line-clamp-3 mb-4">{article.description}</p>

        <div className="flex-col justify-end text-sm font-light text-right text-gray-400">
          <p>{article.author}</p>
          <p className="text-xs">
            {new Date(article.published).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="p-2 w-full">
        <Button
          asChild
          className="border w-full rounded text-white bg-black hover:bg-[#e52534]"
        >
          <Link
            href={article.url}
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </Link>
        </Button>
      </div>
    </div>
  );
}
