import LeagueBreadcrumbMenu from '@/components/LeagueBreadcrumbMenu';
import MatchCard from '@/components/MatchCard';
import { getTodayMatches } from '@/lib/getTodayMatches';

type CompetitionKey = 'PL' | 'PD' | 'BL1' | 'SA' | 'FL1' | 'DED' | 'ELC';
const leagueCodeMappingsServer: { [key in CompetitionKey]: string } = {
  PL: 'Premier League',
  PD: 'La Liga',
  BL1: 'Bundesliga',
  SA: 'Serie A',
  FL1: 'Ligue 1',
  DED: 'Eredivisie',
  ELC: 'Championship',
};

type Props = {
  params: { leagueCode: string };
};

export default async function MatchesTodayPage({
  params: { leagueCode },
}: Props) {
  const matchesToday = await getTodayMatches(leagueCode);

  return (
    <div className="min-h-screen">
      <LeagueBreadcrumbMenu leagueCode={leagueCode} />

      {matchesToday.length === 0 ? (
        <p className="py-8 text-center">
          There are no {leagueCodeMappingsServer[leagueCode as CompetitionKey]}{' '}
          matches today.
        </p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 px-4 lg:px-0 py-8">
          {matchesToday.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              competition={match.competition}
            />
          ))}
        </div>
      )}
    </div>
  );
}
