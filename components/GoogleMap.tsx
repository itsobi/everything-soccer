'use client';

import { TeamLocationInfo } from '@/lib/getTeamLocationInfo';
import { AdvancedMarker, InfoWindow, Map } from '@vis.gl/react-google-maps';
import { useState } from 'react';

type Props = {
  teamInfo: TeamLocationInfo;
  latitude: string;
  longitude: string;
};

export default function GoogleMap({ teamInfo, latitude, longitude }: Props) {
  const [open, setOpen] = useState(false);

  return (
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
          <div className="p-2 bg-white shadow-md rounded flex flex-col space-y-2">
            <img
              src={teamInfo.crest}
              alt={teamInfo.name}
              className="w-[35px] h-[35px]"
            />

            <h4 className="font-semibold">{teamInfo.name}</h4>

            <p>{teamInfo.venue}</p>
            <p>{teamInfo.address}</p>
          </div>
        </InfoWindow>
      )}
    </Map>
  );
}
