'use client';

import TeamBreadcrumbMenu from '@/components/TeamBreadcrumbMenu';
import { AdvancedMarker, InfoWindow, Map } from '@vis.gl/react-google-maps';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function MapPage({
  params,
}: {
  params: { leagueCode: string; teamId: string };
}) {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  const latitude = searchParams.get('lat');
  const longitude = searchParams.get('long');
  const clubName = searchParams.get('club');
  return (
    <div className="w-full min-h-screen">
      <TeamBreadcrumbMenu
        leagueCode={params.leagueCode}
        teamId={params.teamId}
        latitude={latitude || ''}
        longitude={longitude || ''}
        clubName={clubName || ''}
      />
      <div className="mt-6">
        <Map
          style={{ height: '100vh' }}
          defaultZoom={10}
          center={{ lat: Number(latitude), lng: Number(longitude) }}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          <AdvancedMarker
            position={{ lat: Number(latitude), lng: Number(longitude) }}
            onClick={() => setOpen(!open)}
          />

          {open && (
            <InfoWindow
              position={{ lat: Number(latitude), lng: Number(longitude) }}
            >
              <div className="p-2 bg-white shadow-md rounded">
                <h1 className="text-lg font-semibold font-serif">{clubName}</h1>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </div>
  );
}
