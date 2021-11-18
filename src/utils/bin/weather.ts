import { getWeather } from '../../api';

const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');

  if (!city) {
    return 'Usage: weather [city]. Example: weather San Donà di Piave';
  }

  const weather = await getWeather(city);

  return weather;
};

export default weather;
