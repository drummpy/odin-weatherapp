export async function getWeather(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=65SXAJHLF8RPX8AYSA438AZG7&unitGroup=metric`;
  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log("Failed to fetch weather: ", error);
    return false;
  }
}
