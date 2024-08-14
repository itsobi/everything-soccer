'use client';

import { TeamLocationInfo } from '@/lib/getTeamLocationInfo';
import { AdvancedMarker, InfoWindow, Map } from '@vis.gl/react-google-maps';
import { useState } from 'react';

const position = { lat: 53.54, lng: 10 };

type Props = {
  teamInfo: TeamLocationInfo;
  latitude: number;
  longitude: number;
};

export default function GoogleMap({ teamInfo, latitude, longitude }: Props) {
  const [open, setOpen] = useState(false);
  console.log(latitude, longitude);

  if (!latitude && !longitude) {
    return (
      <div className="flex justify-center mt-7">
        <h1>Sorry, we could not get the coordinates for {teamInfo.name}</h1>
      </div>
    );
  } else {
    return (
      <Map
        style={{ height: '100vh' }}
        defaultZoom={10}
        center={{ lat: latitude, lng: longitude }}
        mapId={process.env.NEXT_PUBLIC_MAP_ID}
      >
        <AdvancedMarker
          position={{ lat: latitude, lng: longitude }}
          onClick={() => setOpen(!open)}
        />

        {open && (
          <InfoWindow position={{ lat: latitude, lng: longitude }}>
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
}
