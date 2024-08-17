import GoogleMap from '@/components/GoogleMap';
import TeamBreadcrumbMenu from '@/components/TeamBreadcrumbMenu';
import { getCoordinates } from '@/lib/getCoordinates';
import { getTeamLocationInfo } from '@/lib/getTeamLocationInfo';

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
      <div className="mt-6">
        <GoogleMap
          teamInfo={teamInfo}
          latitude={latitude}
          longitude={longitude}
        />
      </div>
    </div>
  );
}
