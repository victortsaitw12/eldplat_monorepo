import API_Path from "./apiPath";

export async function login(
  email: string,
  password: string
): Promise<{ accessToken: string }> {
  try {
    const response = await fetch(`${API_Path["getAuth"]}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        accountNo: email,
        password
      })
    });
    const data = await response.text();
    if (data) {
      localStorage.setItem("accessToken", data);
      return { accessToken: data };
    }
  } catch (error) {
    console.log(error);
  }
  return { accessToken: "" };
}
