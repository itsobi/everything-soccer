export const getCoordinates = async (address: string) => {
  if (!address) {
    throw new Error(`Address is required`);
  }
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${address}&format=json
`,
    {
      method: 'GET',
      next: { revalidate: 86400 },
    }
  );

  if (!response) {
    throw new Error(`Failed to fetch coordinates`);
  }

  const coordinates = await response.json();

  if (coordinates.length === 0) {
    return { message: `No coordinates found for ${address}` };
  }

  const { lat, lon } = coordinates[0];

  return { latitude: lat, longitude: lon };
};
