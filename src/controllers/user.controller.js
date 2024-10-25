import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, fullName, password } = req.body;
  /*
  function validateField(fieldName) {
    if (fieldName === "") {
      throw new ApiError(400, `${fieldName} is required`);
    }
  }
  validateField(username);
  validateField(email);
  validateField(fullName);
  validateField(password);
  */

  if (
    [username, email, fullName, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
});

export { registerUser };
