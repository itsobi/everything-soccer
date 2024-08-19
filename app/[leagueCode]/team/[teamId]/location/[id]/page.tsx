import GoogleMap from '@/components/GoogleMap';
import TeamBreadcrumbMenu from '@/components/TeamBreadcrumbMenu';
import { Button } from '@/components/ui/button';
import { getTeamLocationInfo } from '@/lib/getTeamLocationInfo';
import { Undo2 } from 'lucide-react';
import Link from 'next/link';

export default async function MapPage({
  params,
}: {
  params: { leagueCode: string; id: string };
}) {
  const { teamInfo, latitude, longitude } = await getTeamLocationInfo(
    params.id
  );

  return (
    <div className="w-full min-h-screen">
      <TeamBreadcrumbMenu leagueCode={params.leagueCode} teamId={params.id} />
      {latitude && longitude ? (
        <div className="mt-6">
          <GoogleMap
            teamInfo={teamInfo}
            latitude={latitude}
            longitude={longitude}
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-7 lg:text-xl text-center space-y-8">
          <h1>
            Sorry, we could not get the location coordinates for {teamInfo.name}
          </h1>
          <Button
            asChild
            className="animate-bounce border rounded-full hover:bg-[#e52534] hover:text-white"
          >
            <Link href={`/${params.leagueCode}/team/${params.id}`}>
              <Undo2 />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
