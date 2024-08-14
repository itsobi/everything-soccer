export const getCoordinates = async (address: string) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_API_KEY}`,
    {
      method: 'GET',
      next: { revalidate: 86400 },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch cordinates: ${response.statusText}`);
  }

  const cordinates = await response.json();

  return {
    latitude: cordinates.results[0].geometry.location.lat,
    longitude: cordinates.results[0].geometry.location.lng,
  };
};
