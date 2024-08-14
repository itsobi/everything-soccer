export const getCoordinates = async (address: string) => {
  if (!address) {
    throw new Error(`Address is required`);
  }
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_API_KEY}`,
    {
      method: 'GET',
      next: { revalidate: 86400 },
    }
  );

  if (!response) {
    throw new Error(`Failed to send team info to stepzen`);
  }

  const coordinates = await response.json();

  return {
    latitude: coordinates.results[0]?.geometry.location.lat,
    longitude: coordinates.results[0]?.geometry.location.lng,
  };
};
