export const getUpcomingMatches = async (teamId: string) => {
  const response = await fetch(
    `https://api.football-data.org/v4/teams/${teamId}/matches?status=SCHEDULED&limit=6`,
    {
      next: { revalidate: 86400 },
      headers: {
        'X-Auth-Token': process.env.FOOTBALL_DATA_API_KEY!,
      },
    }
  );

  const data = await response.json();

  return data.matches as Match[];
};
