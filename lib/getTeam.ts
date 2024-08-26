import { TeamDetails } from '@/types';

export const getTeam = async (teamId: string) => {
  const apiKey = process.env.FOOTBALL_DATA_API_KEY;
  if (!apiKey) {
    throw new Error('FOOTBALL_DATA_API_KEY is not set');
  }
  const response = await fetch(
    `https://api.football-data.org/v4/teams/${teamId}`,
    {
      method: 'GET',
      next: { revalidate: 86400 },
      headers: {
        'X-Auth-Token': apiKey,
      },
    }
  );

  if (!response.ok)
    throw new Error(`Failed to fetch team: ${response.statusText}`);

  const result: TeamDetails = await response.json();

  return {
    result,
  };
};
