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

  // const teamInfo: TeamInfo = {
  //   id: result.id,
  //   name: result.name,
  //   shortName: result.shortName,
  //   tla: result.tla,
  //   crest: result.crest,
  //   address: result.address,
  //   website: result.website,
  //   founded: result.founded,
  //   clubColors: result.clubColors,
  //   venue: result.venue,
  // };

  // const squad = result.squad.reduce<Record<Position, Squad[]>>(
  //   (acc, player) => {
  //     const key = player.position as Position;

  //     if (!acc[key]) {
  //       acc[key] = [];
  //     }

  //     acc[key].push(player);

  //     return acc;
  //   },
  //   initialSquadValues
  // );

  return {
    result,
  };
};
