import { Competition, Match, ResultSet } from '@/types';

export const getMatchdayMatches = async (
  leagueCode: string,
  matchday: string
) => {
  const apiKey = process.env.FOOTBALL_DATA_API_KEY;
  if (!apiKey) {
    throw new Error('FOOTBALL_DATA_API_KEY is not set');
  }

  const response = await fetch(
    `https://api.football-data.org/v4/competitions/${leagueCode}/matches?matchday=${matchday}`,
    {
      method: 'GET',
      next: { revalidate: 3600 },
      headers: {
        'X-Auth-Token': apiKey,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch matchday matches: ${response.statusText}`);
  }

  const matches = await response.json();

  return {
    resultSet: matches.resultSet as ResultSet,
    competition: matches.competition as Competition,
    matches: matches.matches as Match[],
  };
};
