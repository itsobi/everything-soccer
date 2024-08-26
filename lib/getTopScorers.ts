import { Competition, Scorers } from '@/types';

export const getTopScorers = async (leagueCode: string) => {
  const response = await fetch(
    `https://api.football-data.org/v4/competitions/${leagueCode}/scorers`,
    {
      next: { revalidate: 86400 },
      headers: {
        'X-Auth-Token': process.env.FOOTBALL_DATA_API_KEY!,
      },
    }
  );

  const data = await response.json();

  return {
    league: data.competition as Competition,
    topScorers: data.scorers as Scorers[],
  };
};
