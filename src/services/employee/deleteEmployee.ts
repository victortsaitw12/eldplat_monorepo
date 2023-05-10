export const deleteEmployee = async (user_no: string): Promise<void> => {
  console.log("user_no", user_no);
  try {
    const response = await fetch(
      `https://localhost:7088/ATR/DeleteAccount/api/DeleteAccount/1?user_no=${user_no}`,
      {
        method: "POST",
        body: JSON.stringify({
          user_no: user_no
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzA0MTIwMDAxIiwiTmFtZSI6IlNob2hlaSIsIkNvbXBhbnlfTm8iOiJCSDQ5MjAyMzAyMDIwMDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi6Kq_5bqm576k57WEIiwiZXhwIjoxNjg1MDY2NjYwLCJpc3MiOiJsb2NhbGhvc3Q6NzA3NiIsImF1ZCI6ImxvY2FsaG9zdDo3MDc2In0.TmrkcZZGF1pTw1VxAZX0ritaIIyi0ZH7wdz4x8vUBmA"
        }
      }
    );
    const data = await response.json();
    if (data.result === true) {
      console.log("Delete success!");
    }
  } catch (err) {
    console.log(err);
  }
};
