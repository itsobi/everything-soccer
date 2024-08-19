import Link from 'next/link';

export default function MatchCard({
  match,
  competition,
}: {
  match: Match;
  competition: Competition;
}) {
  return (
    <div className="border p-2">
      <div className="flex flex-col space-y-2 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={match.homeTeam.crest}
              alt={match.homeTeam.name}
              className="w-[30px] h-[30px] mx-2"
            />
            <Link
              href={`/${competition.code}/team/${match.homeTeam.id}`}
              className="text-blue-400 hover:underline cursor-pointer"
              prefetch={false}
            >
              {match.homeTeam.shortName === 'Wolverhampton'
                ? 'Wolves'
                : match.homeTeam.shortName}
              {''}
            </Link>
          </div>
          {match.score.fullTime.home && (
            <p
              className={`font-semibold ${
                match.score.winner === 'HOME_TEAM' && 'text-green-500'
              }`}
            >
              {match.score.fullTime.home}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={match.awayTeam.crest}
              alt={match.awayTeam.name}
              className="w-[30px] h-[30px] mx-2"
            />
            <Link
              href={`/${competition.code}/team/${match.awayTeam.id}`}
              className="text-blue-400 hover:underline cursor-pointer"
              prefetch={false}
            >
              {match.awayTeam.shortName === 'Wolverhampton'
                ? 'Wolves'
                : match.awayTeam.shortName}
              {''}
            </Link>
          </div>
          {match.score.fullTime.away && (
            <p
              className={`font-semibold ${
                match.score.winner === 'AWAY_TEAM' && 'text-green-500'
              }`}
            >
              {match.score.fullTime.away}
            </p>
          )}
        </div>
      </div>
      <div className="text-right text-xs text-gray-500">
        <p>
          {new Date(match.utcDate).toLocaleString(undefined, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </div>
  );
}
