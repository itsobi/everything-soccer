import { gql } from 'graphql-request';
import { getCoordinates } from './getCoordinates';

export type TeamLocationInfo = {
  address: string;
  clubColors: string;
  crest: string;
  founded: number;
  name: string;
  website: string;
  venue: string;
};

export const getTeamLocationInfo = async (teamId: string) => {
  const GET_QUERY = gql`
    query MyQuery($teamId: String!) {
      team(teamId: $teamId) {
        address
        clubColors
        crest
        founded
        name
        website
        venue
      }
    }
  `;

  try {
    const response = await fetch(
      'https://multunku.us-east-a.ibm.stepzen.net/api/masked-magpie/__graphql',
      {
        method: 'POST',
        next: { revalidate: 86400 },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
          query: GET_QUERY,
          variables: {
            teamId,
          },
        }),
      }
    );

    if (!response) {
      throw new Error(`Failed to send team info to stepzen`);
    }

    const team = await response.json();
    const teamInfo = team.data.team as TeamLocationInfo;

    // Fetch coordinates
    const { latitude, longitude } = await getCoordinates(teamInfo.address);

    return {
      teamInfo,
      latitude,
      longitude,
    };
  } catch (error) {
    throw new Error(`getTeamLocationInfo error: ${error}`);
  }
};
