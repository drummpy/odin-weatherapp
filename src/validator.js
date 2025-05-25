export function validateCity(input) {
  if (input.trim() === "") {
    return { valid: false, message: "Please enter a city name." };
  }

  if (input.trim().length < 3) {
    return {
      valid: false,
      message: "City name too short.",
    };
  }

  const regex = /^[a-zA-Z\s'-]+$/;
  if (!regex.test(input.trim())) {
    return {
      valid: false,
      message: "Cannot contain special characters.",
    };
  }

  return { valid: true };
}
