import type { UserRegisterRequest } from "../types/auth.types";

async function requestLogin(
  url: string,
  userData: UserRegisterRequest,
  signal?: AbortSignal,
) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      signal,
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { requestLogin };
