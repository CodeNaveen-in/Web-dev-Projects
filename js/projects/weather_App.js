export default function render(container) {

  const style = document.createElement("style");
  style.textContent = `
    .weather-app {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      font-family: Arial, sans-serif;
      width: 500px;
      margin: auto;
    }

    .weather-result {
      text-align: center;
      margin-top: 10px;
      font-size: 18px;
    }
  `;
  document.head.append(style);

  const wrapper = document.createElement("div");
  wrapper.classList.add("card", "section");

  const title = document.createElement("h2");
  title.textContent = "Mini Weather App";

  const app = document.createElement("div");
  app.classList.add("weather-app");

  const input = document.createElement("input");
  input.placeholder = "Enter city name";

  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Get Weather";

  const result = document.createElement("div");
  result.classList.add("weather-result");
  result.style.fontSize = "3rem"

  app.append(input, button, result);
  wrapper.append(title, app);
  container.append(wrapper);

  // Helper: get coords from city name
  async function getCoords(city) {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const data = await res.json();
    return data.results ? data.results[0] : null;
  }

  // Fetch and show weather
  button.addEventListener("click", async () => {
    const city = input.value.trim();
    if (!city) {
      result.textContent = "Please enter a city name!";
      return;
    }

    result.textContent = "Fetching weather...";
    const coords = await getCoords(city);

    if (!coords) {
      result.textContent = "City not found!";
      return;
    }

    const { latitude, longitude } = coords;

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    const weatherInfo = weatherData.current_weather;
    result.innerHTML = `
      <strong>${coords.name}, ${coords.country}</strong><br>
      🌡️ Temp: ${weatherInfo.temperature}°C<br>
      ⚡ Wind: ${weatherInfo.windspeed} km/h<br>
      📍 Weather Code: ${weatherInfo.weathercode}
    `;
  });
}
