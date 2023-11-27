export const login = async (email: string, password: string) => {
  // return DUMMY_DATA;
  const apiName = "login";
  const reqMethod = "POST";
  const reqHeaders = { UK: null };
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
      account_no: "USR202302020002",
      account_name: "王鈞樺",
      invt_sts: "03",
      orgs: [
        {
          org_no: "o-00020101",
          org_name: "平台"
        }
      ]
    }
  ],
  Result: true,
  ResultString: "BaseDomain",
  ResultInt: 0
};
