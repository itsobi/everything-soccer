import { NextResponse } from 'next/server';

export async function GET(req: Request): Promise<Response> {
  //   const response = await fetch(
  //     `https://api.football-data.org/v4/competitions/PL/standings?season=2024`,
  //     {
  //       next: { revalidate: 21600 },
  //       method: 'GET',
  //       headers: {
  //         'X-Auth-Token': 'b02f8d541652468eb60a325766dfe942',
  //       },
  //     }
  //   );

  //   if (!response.ok) {
  //     throw new Error(`Failed to fetch data: ${response.statusText}`);
  //   }

  //   const data = await response.json();

  //   return new Response(JSON.stringify(data), {
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //   });

  return NextResponse.json({ msg: 'Hello from server' });
}
