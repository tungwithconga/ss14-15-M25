import axios from 'axios';
interface WeatherData {
  temperature: number;
  weathercode: number;
}

async function fetchWeather() {
  const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
    params: {
      latitude: 35.6895,
      longitude: 139.6917,
      current_weather: true,
    },
  });

  const { temperature, weathercode } = response.data.current_weather;
  return {
    temperature,
    weathercode,
  };
}

export default async function WeatherPage() {
  const { temperature, weathercode } = await fetchWeather();

  const weatherDescription = getWeatherDescription(weathercode);

  return (
    <div>
      <h1>Thông tin thời tiết</h1>
      <p>Nhiệt độ hiện tại: {temperature}</p>
      <p>Tình trạng thời tiết: {weatherDescription}</p>
    </div>
  );
}

function getWeatherDescription(weathercode: number): string {
  switch (weathercode) {
    case 0:
      return 'Trời quang';
    case 1:
    case 2:
    case 3:
      return 'Trời có mây';
    case 45:
    case 48:
      return 'Có sương mù';
    case 51:
    case 53:
    case 55:
      return 'Mưa phùn';
    case 61:
    case 63:
    case 65:
      return 'Mưa';
    case 80:
    case 81:
    case 82:
      return 'Mưa rào';
    case 95:
    case 96:
    case 99:
      return 'Bão giông';
    default:
      return 'Không xác định';
  }
}
