export function validateCity(input) {
  if (input.trim() === "") {
    return { valid: false, message: "Please enter a city name." };
  }

  if (input.trim().length < 3) {
    return {
      valid: false,
      message: "City name must be at least 3 characters long.",
    };
  }

  const regex = /^[a-zA-Z\s'-]+$/;
  if (!regex.test(input.trim())) {
    return {
      valid: false,
      message: "City name cannot contain special characters.",
    };
  }

  return { valid: true };
}
