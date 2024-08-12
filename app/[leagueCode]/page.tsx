import { getStandings } from '@/lib/getStandings';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import Link from 'next/link';
import MatchdaySelector from '@/components/MatchdaySelector';

export default async function LeagueHomePage({
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
      <div className="flex items-center justify-between lg:mb-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold font-serif">
            {competition.name}
          </h1>
          <div className="h-8 border" />
          <img
            src={location.flag}
            alt={location.name}
            className="w-[50px] h-[50px]"
          />
        </div>

        <div className="hidden lg:inline-flex">
          <MatchdaySelector leagueCode={params.leagueCode} />
        </div>
      </div>
      <div className="flex justify-end mb-4 lg:hidden">
        <MatchdaySelector leagueCode={params.leagueCode} />
      </div>
      <div className="border rounded p-2 bg-white shadow-md mb-8">
        <Table className="w-full">
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
                  <Link
                    href={`/${params.leagueCode}/team/${standing.team.id}`}
                    className="text-blue-400 hover:underline cursor-pointer"
                  >
                    {standing.team.shortName}
                  </Link>
                </TableCell>
                <TableCell className="hidden lg:inline-flex items-center">
                  {standing.position}.{' '}
                  <img
                    src={standing.team.crest}
                    alt={standing.team.name}
                    className="w-[30px] h-[30px] mx-2"
                  />
                  <Link
                    href={`/${params.leagueCode}/team/${standing.team.id}`}
                    className="text-blue-400 hover:underline cursor-pointer"
                  >
                    {standing.team.name}
                  </Link>
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
    </div>
  );
}
