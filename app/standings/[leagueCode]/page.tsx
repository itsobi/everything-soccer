import { getStandings } from '@/lib/getStandings';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default async function StandingsPage({
  params,
}: {
  params: { leagueCode: string };
}) {
  const { competition, standings } = await getStandings(
    params.leagueCode,
    '2024'
  );

  return (
    <div className="flex justify-center items-center w-full">
      <Table className="w-full">
        {/* TODO: make this dynamic based on the league code */}
        {/* <caption>2024/25 English Premier League Table</caption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Team</TableHead>
            <TableHead className="text-left">Points</TableHead>
            <TableHead className="text-left">Played</TableHead>
            <TableHead className="text-left">Won</TableHead>
            <TableHead className="text-left">Draw</TableHead>
            <TableHead className="text-left">Lost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {standings.map((standing) => (
            <TableRow key={standing.team.id}>
              <TableCell className="flex items-center">
                {standing.position}.{' '}
                <img
                  src={standing.team.crest}
                  alt={standing.team.name}
                  className="w-[30px] h-[30px] mx-2"
                />
                {standing.team.name}
              </TableCell>
              <TableCell>{standing.points}</TableCell>
              <TableCell>{standing.playedGames}</TableCell>
              <TableCell>{standing.won}</TableCell>
              <TableCell>{standing.draw}</TableCell>
              <TableCell>{standing.lost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
