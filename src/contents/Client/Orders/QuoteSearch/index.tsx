import React, { useState, ChangeEvent, useEffect }  from "react"
import Section from "@contents/Client/Quote/Section";
import { TextInput, Button } from "evergreen-ui";
import { useRouter } from "next/router";
import { BodySTY } from "./style";
interface I_SearchQuote {
  email: string;
  phone: string;
}

const QuoteSearch = ({ updateSearchState }: any) => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState<I_SearchQuote>({
    email: "",
    phone: ""
  })

  const handleInputChange = (
    inputType: "email" | "phone",
    value: string
  ) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [inputType]: value
    }));
  };

  const handleSearchQuote = () => {
    const queryParams = new URLSearchParams();
    queryParams.set("email", searchParams.email);
    queryParams.set("phone", searchParams.phone);

    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;

    // router.push causing a flash
    window.history.replaceState(null, "", newUrl);
    updateSearchState(true);
    console.log(searchParams.email, searchParams.phone);
  };

  useEffect(() => {
    const email = router.query.email as string;
    const phone = router.query.phone as string;

    if (email || phone) {
      setSearchParams({
        email: email || "",
        phone: phone || ""
      });
    }
  }, [router.query]);

  return (
    <BodySTY>
      <Section title="請輸入訂單聯絡人的手機與信箱">
        <form>
          <div className="input-wrapper">
            <div className="item-container">
              <div className="item-title">
              <span style={{ color: "#D14343" }}>*</span>
              <span>手機</span>
              </div>
              <TextInput
                placeholder="請輸入手機"
                value={searchParams.phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("phone", e.target.value)}
              />
            </div>
            <div className="item-container">
                <div className="item-title">
                <span style={{ color: "#D14343" }}>*</span>
                <span>信箱</span>
                </div>
                <TextInput
                  placeholder="請輸入信箱"
                  value={searchParams.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
                />
            </div>
          </div>
          <Button
            appearance="primary"
            type="submit"
            style={{
            color: "#fff",
            backgroundColor: "#5E6C84",
            fontWeight: "600",
            borderRadius: "4px",
            flex: "1",
            border: "none",
            width: "280px",
            margin: "40px 0 20px 0",
            padding: "8px 0"
            }}
            onClick={() => {handleSearchQuote()}}
          >
            查詢
          </Button>
        </form>
      </Section>
    </BodySTY>
  )
}

export default QuoteSearch