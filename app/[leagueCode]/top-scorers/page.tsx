import LeagueBreadcrumbMenu from '@/components/LeagueBreadcrumbMenu';
import { getTopScorers } from '@/lib/getTopScorers';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import Image from 'next/image';
import serieALogo from '@/public/serie-a.png';

type Props = {
  params: { leagueCode: string };
};

export default async function TopScorersPage({
  params: { leagueCode },
}: Props) {
  const { league, topScorers } = await getTopScorers(leagueCode);

  return (
    <div className="min-h-screen">
      <LeagueBreadcrumbMenu leagueCode={leagueCode} />

      <div className="px-4 lg:px-0">
        <div className="flex items-center justify-between lg:mb-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-lg lg:text-2xl font-semibold">{league.name}</h1>
            <div className="h-8 border" />
            {leagueCode === 'SA' ? (
              <Image
                src={serieALogo}
                alt={league.name}
                className="w-[50px] h-[50px]"
              />
            ) : (
              <img
                src={league.emblem}
                alt={league.name}
                className="w-[50px] h-[50px]"
              />
            )}
          </div>
        </div>

        <div
          className={`border rounded p-2 bg-white shadow-md ${
            leagueCode === 'FL1' || ('SA' && 'mt-4')
          }`}
        >
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="text-left font-semibold">Name</TableHead>
                <TableHead className="text-left font-semibold">Goals</TableHead>
                <TableHead className="text-left font-semibold">
                  Position
                </TableHead>
                <TableHead className="text-left font-semibold">Team</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topScorers.map((scorer) => (
                <TableRow key={scorer.player.id}>
                  <TableCell>{scorer.player.name}</TableCell>
                  <TableCell>{scorer.goals}</TableCell>
                  <TableCell>{scorer.player.section}</TableCell>
                  <TableCell className="flex items-center lg:hidden">
                    <img
                      src={scorer.team.crest}
                      alt={scorer.team.name}
                      className="w-[30px] h-[30px] mx-2"
                    />
                    <Link
                      href={`/${leagueCode}/team/${scorer.team.id}`}
                      className="text-blue-400 hover:underline cursor-pointer"
                      prefetch={false}
                    >
                      {scorer.team.shortName === 'Wolverhampton'
                        ? 'Wolves'
                        : scorer.team.shortName}
                    </Link>
                  </TableCell>
                  <TableCell className="hidden lg:inline-flex items-center">
                    <img
                      src={scorer.team.crest}
                      alt={scorer.team.name}
                      className="w-[30px] h-[30px] mx-2"
                    />
                    <Link
                      href={`/${leagueCode}/team/${scorer.team.id}`}
                      className="text-blue-400 hover:underline cursor-pointer"
                      prefetch={false}
                    >
                      {scorer.team.name}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
