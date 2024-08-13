'use client';

import TeamBreadcrumbMenu from '@/components/TeamBreadcrumbMenu';
import { AdvancedMarker, Map } from '@vis.gl/react-google-maps';
import { useSearchParams } from 'next/navigation';

const position = { lat: 53.54, lng: 10 };

export default function MapPage({
  params,
}: {
  params: { leagueCode: string; teamId: string };
}) {
  const searchParams = useSearchParams();

  const address = searchParams.get('address');
  return (
    <div className="w-full min-h-screen">
      <TeamBreadcrumbMenu
        leagueCode={params.leagueCode}
        teamId={params.teamId}
        address={address || ''}
      />
      <div className="mt-6">
        <Map
          style={{ height: '100vh' }}
          defaultZoom={10}
          center={position}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          <AdvancedMarker position={position} />
        </Map>
      </div>
    </div>
  );
}
