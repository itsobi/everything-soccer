import { getMatchdayMatches } from '@/lib/getMatchdayMatches';

export default async function MatchdayPage({
  params,
}: {
  params: { matchdayNumber: string; leagueCode: string };
}) {
  const { resultSet, competition, matches } = await getMatchdayMatches(
    params.leagueCode,
    params.matchdayNumber
  );

  return (
    <div className="h-screen">
      <p>League code {params.leagueCode}</p>
      <p>Matchday number {params.matchdayNumber}</p>
    </div>
  );
}
