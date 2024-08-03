import { getStandings } from '@/lib/getStandings';

import {
  Table,
  TableBody,
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
  const { location, competition, standings } = await getStandings(
    params.leagueCode,
    '2024'
  );

  return (
    <div className="px-6 xl:px-0">
      <div className="flex items-center justify-center mb-4">
        <img
          src={location.flag}
          alt={location.name}
          className="w-[50px] h-[50px] mx-2 rounded"
        />
        <h1 className="font-semibold font-serif">{competition.name}</h1>
      </div>
      <Table className="w-full">
        {/* TODO: make this dynamic based on the league code */}
        {/* <caption>2024/25 English Premier League Table</caption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="text-left font-semibold">Team</TableHead>
            <TableHead className="text-left font-semibold">Points</TableHead>
            <TableHead className="text-left font-semibold">Played</TableHead>
            <TableHead className="text-left font-semibold">Won</TableHead>
            <TableHead className="text-left font-semibold">Draw</TableHead>
            <TableHead className="text-left font-semibold">Lost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {standings.map((standing) => (
            <TableRow key={standing.team.id}>
              <TableCell className="flex items-center lg:hidden">
                {standing.position}.{' '}
                <img
                  src={standing.team.crest}
                  alt={standing.team.name}
                  className="w-[30px] h-[30px] mx-2"
                />
                {standing.team.shortName}
              </TableCell>
              <TableCell className="hidden lg:inline-flex items-center">
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
