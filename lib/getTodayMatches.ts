import { Match } from '@/types';

export const getTodayMatches = async (leagueCode: string) => {
  const response = await fetch('https://api.football-data.org/v4/matches', {
    next: { revalidate: 43200 },
    headers: {
      'X-Auth-Token': process.env.FOOTBALL_DATA_API_KEY!,
    },
  });

  const data = await response.json();

  const leagueMatches = data.matches.filter(
    (match: Match) => match.competition.code === leagueCode
  );

  return leagueMatches as Match[];
};
