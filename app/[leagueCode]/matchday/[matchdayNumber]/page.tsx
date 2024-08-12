import Match from '@/components/Match';
import MatchdayArrows from '@/components/MatchdayArrows';
import { getMatchdayMatches } from '@/lib/getMatchdayMatches';
import serieALogo from '@/public/serie-a.png';
import Image from 'next/image';

const leagueNumOfMatchdays: { [key: string]: number } = {
  PL: 38,
  PD: 38,
  BL1: 34,
  SA: 38,
  FL1: 34,
  DED: 38,
  ELC: 46,
};

export default async function MatchdayPage({
  params,
}: {
  params: { matchdayNumber: string; leagueCode: string };
}) {
  const { resultSet, competition, matches } = await getMatchdayMatches(
    params.leagueCode,
    params.matchdayNumber
  );

  const maxMatchWeeks = leagueNumOfMatchdays[params.leagueCode];

  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center space-x-4 mt-6">
        {params.leagueCode === 'SA' ? (
          <Image
            src={serieALogo}
            alt={competition.name}
            className="w-[100px] h-[100px]"
          />
        ) : (
          <img
            src={competition.emblem}
            alt={competition.name}
            className="w-[100px] h-[100px]"
          />
        )}
        <p className="font-serif">
          Matchday {params.matchdayNumber} of {maxMatchWeeks}
        </p>
      </div>
      <MatchdayArrows
        matchdayNumber={Number(params.matchdayNumber)}
        maxMatchWeeks={maxMatchWeeks}
        leagueCode={params.leagueCode}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-4 xl:p-0">
        {matches.map((match) => (
          <Match key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
