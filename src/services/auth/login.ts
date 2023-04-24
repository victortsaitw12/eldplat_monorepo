const login = async (
  email: string,
  password: string
): Promise<{ accessToken: string }> => {
  try {
    const response = await fetch(
      "https://localhost:7188/Gateway_Authorize/Login/api/Login/1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          accountNo: email,
          password
        })
      }
    );
    const data = await response.text();
    if (data) {
      localStorage.setItem("accessToken", data);
      return { accessToken: data };
    }
  } catch (error) {
    console.log(error);
  }
  return { accessToken: "" };
};

const logout = async (): Promise<void> => {
  console.log("logout");
};

export { login };
