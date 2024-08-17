import TeamBreadcrumbMenu from '@/components/TeamBreadcrumbMenu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getCurrentAge } from '@/lib/getCurrentAge';
import { getTeam } from '@/lib/getTeam';
import { Clipboard } from 'lucide-react';

export default async function TeamPage({
  params,
}: {
  params: { leagueCode: string; teamId: string };
}) {
  const { result } = await getTeam(params.teamId);
  const encodedCoachName = encodeURIComponent(result.coach.name);

  return (
    <div className="min-h-screen flex-col space-y-8 px-6 xl:px-0">
      <TeamBreadcrumbMenu
        leagueCode={params.leagueCode}
        teamId={params.teamId}
      />
      <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg lg:text-2xl font-semibold">{result.name}</h1>
          <div className="h-8 border" />
          <img
            src={result.crest}
            alt={result.name}
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className="flex flex-col items-center text-sm lg:text-base space-x-1">
          <div className="flex items-center space-x-1">
            <Clipboard className="rotate-45" />
            <a
              href={`https://www.google.com/search?q=${encodedCoachName}`}
              className="text-blue-400 hover:underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              {result.coach.name}
            </a>
          </div>
        </div>
      </div>

      <div className="border rounded p-2 bg-white shadow-md">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold text-left">Age</TableHead>
              <TableHead className="font-semibold text-right">
                Position
              </TableHead>
              <TableHead className="font-semibold text-right">
                Nationality
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {result.squad?.map((player) => (
              <TableRow key={player.id}>
                <TableCell>{player.name}</TableCell>
                <TableCell className="text-left">
                  {getCurrentAge(player.dateOfBirth)}
                </TableCell>
                <TableCell className="text-right">{player.position}</TableCell>
                <TableCell className="text-right">
                  {player.nationality}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
