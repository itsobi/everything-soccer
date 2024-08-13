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
import { Clipboard, LandPlot } from 'lucide-react';

type TeamInfo = {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
};

type Position = 'Goalkeeper' | 'Defence' | 'Midfield' | 'Offence';

const initialSquadValues: Record<Position, Squad[]> = {
  Goalkeeper: [],
  Defence: [],
  Midfield: [],
  Offence: [],
};

export default async function TeamPage({
  params,
}: {
  params: { leagueCode: string; teamId: string };
}) {
  const { result } = await getTeam(params.teamId);

  const encodedName = encodeURIComponent(result.coach.name);
  const encodedAddress = encodeURIComponent(result.address);

  console.log(encodedAddress);

  return (
    <div className="min-h-screen flex-col space-y-8 px-6 xl:px-0">
      <TeamBreadcrumbMenu
        leagueCode={params.leagueCode}
        teamId={params.teamId}
        address={encodedAddress}
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold font-serif">{result.name}</h1>
          <div className="h-8 border" />
          <img
            src={result.crest}
            alt={result.name}
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className="hidden md:inline-flex flex-col items-center font-serif space-x-1">
          <div className="flex items-center space-x-1">
            <Clipboard className="rotate-45" />
            <a
              href={`https://www.google.com/search?q=${encodedName}`}
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
              <TableHead className="font-semibold">Age</TableHead>
              <TableHead className="font-semibold">Position</TableHead>
              <TableHead className="font-semibold">Nationality</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {result.squad?.map((player) => (
              <TableRow key={player.id}>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.position}</TableCell>
                <TableCell>{getCurrentAge(player.dateOfBirth)}</TableCell>
                <TableCell>{player.nationality}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
