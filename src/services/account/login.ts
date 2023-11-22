export const login = async (email: string, password: string) => {
  const apiName = "login";
  const reqMethod = "POST";
  //   const reqHeaders = { UK: undefined };
  const requestBody = {
    content_priv_email: email,
    account_pw: password
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_ENDPOINT}/api/getData?url=${apiName}`,
    {
      method: reqMethod,
      body: JSON.stringify(requestBody)
    }
  );
  const result = await res.json();
  return result.data;
};

// response
const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  DataList: [
    {
      account_no: "admin",
      account_name: "AdminSystem",
      invt_sts: "03",
      orgs: [
        {
          org_no: "o",
          org_name: "平台"
        }
      ]
    }
  ],
  Result: true,
  ResultString: "BaseDomain",
  ResultInt: 0
};
