import { Area, Competition, TableEntry } from '@/types';
import { gql } from 'graphql-request';

export const getStandings = async (leagueCode: string, season: string) => {
  const GET_QUERY = gql`
    query MyQuery($leagueCode: String!, $season: String!) {
      standings(leagueCode: $leagueCode, season: $season) {
        area {
          name
          flag
        }
        competition {
          name
          emblem
        }
        standings {
          table {
            playedGames
            points
            position
            draw
            lost
            won
            team {
              id
              shortName
              crest
              name
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(
      'https://multunku.us-east-a.ibm.stepzen.net/api/masked-magpie/__graphql',
      {
        method: 'POST',
        next: { revalidate: 3600 },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
          query: GET_QUERY,
          variables: {
            leagueCode,
            season,
          },
        }),
      }
    );

    if (!response) {
      throw new Error(`Failed to send standings info to StepZen`);
    }

    const standings = await response.json();

    if (!standings.data) {
      throw new Error('No data returned from GraphQL query');
    }

    return {
      location: standings.data.standings.area as Area,
      competition: standings.data.standings.competition as Competition,
      standings: standings.data.standings.standings[0].table as TableEntry[],
    };
  } catch (error) {
    console.error('Error fetching standings:', error);
    throw error;
  }
};
