import { validateCity } from "./validator";
import { getWeather } from "./weatherapi";

export function UIController() {
  const cityInput = document.getElementById("cityinput");
  const errorDisplay = document.getElementById("errortext");
  const submitButton = document.getElementById("submitbutton");
  const cityName = document.getElementById("city");
  //const icon = document.getElementById("icon");
  const temperature = document.getElementById("temp");
  const currentConditon = document.getElementById("condition");
  const humidity = document.getElementById("humidity");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const city = cityInput.value;
    const { valid, message } = validateCity(city);
    clearError();

    if (!valid) {
      showError(message);
      return;
    }

    submitButton.disabled = true;
    displayWeather(city);
    submitButton.disabled = false;
  });

  const displayWeather = async (location) => {
    const data = await getWeather(location);

    if (!data) {
      showError("Unable to find city.");
      return;
    }

    cityName.textContent = data.resolvedAddress;
    temperature.textContent = `${data.currentConditions.temp} °C`;
    currentConditon.textContent = data.currentConditions.conditions;
    humidity.textContent = `${data.currentConditions.humidity}% Relative Humidity`;
  };

  const showError = (err) => {
    errorDisplay.textContent = err;
    errorDisplay.classList.add("show");
  };

  const clearError = () => {
    errorDisplay.textContent = "";
    errorDisplay.classList.remove("show");
  };

  const initialize = () => {
    console.log("UI Initialized");
    clearError();
    displayWeather("london");
  };

  return { initialize };
}
