import MatchCard from '@/components/MatchCard';
import TeamBreadcrumbMenu from '@/components/TeamBreadcrumbMenu';
import { getUpcomingMatches } from '@/lib/getUpcomingMatches';
import { Match } from '@/types';

type Props = {
  params: {
    leagueCode: string;
    teamId: string;
  };
};

export default async function UpcomingMatches({ params }: Props) {
  const { leagueCode, teamId } = params;

  const matches = await getUpcomingMatches(teamId);

  const competition = matches[0].competition;

  function findDuplicateTeamName(matches: Match[]): string | null {
    const teamCount = matches.reduce((acc, match) => {
      acc[match.homeTeam.shortName] = (acc[match.homeTeam.shortName] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    const duplicateTeam = Object.keys(teamCount).find(
      (teamName) => teamCount[teamName] > 1
    );

    return duplicateTeam || null;
  }

  return (
    <div className="min-h-screen">
      <TeamBreadcrumbMenu leagueCode={leagueCode} teamId={teamId} />
      <div className="flex justify-center items-center mt-6">
        {matches.length === 0 ? (
          <p className="text-center">
            Sorry, we are unable to retrieve the upcoming matches for{' '}
            {findDuplicateTeamName(matches) ?? ''}
          </p>
        ) : (
          <div>
            <h1 className="text-center lg:text-xl font-semibold text-gray-500 py-4">
              Next 6 <i className="font-serif">{matches[0].competition.name}</i>{' '}
              matches for {findDuplicateTeamName(matches) ?? ''}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4">
              {matches.map((match) => (
                <MatchCard
                  key={match.id}
                  match={match}
                  competition={competition}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
