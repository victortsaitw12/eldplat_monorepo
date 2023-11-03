import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

//
import { BodySTY } from "./style";
import Header from "./Header";
import UserInfo from "./UserInfo";
import MenuList from "./MenuList";
import Search from "./Search";
import { MenuDataType } from "@mock-data/side-bar/data";
import FooterItem from "./Footer/FooterItem";
import LoadingSpinner from "@components/LoadingSpinner";
import { useRouter } from "next/router";
import CompanyProvider from "@contexts/companyContext/companyProvider";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import LabelButton from "@components/Button/Primary/Label";

//
interface Props {
  menuData: MenuDataType;
  isLoading?: boolean;
}
//
function SideBar({ menuData, isLoading }: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  const { companyData } = React.useContext<I_Company_Context>(CompanyContext);
  const [isMeunFold, setIsMenuFold] = React.useState(false);

  const handleRedirect = (url: string) => {
    router.push(url);
  };

  const handleCloseMenu = () => {
    setIsMenuFold((prev) => !prev);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    signIn("credentials", { ...inputData, redirect: false }); // !! missing in doc
  };

  return (
    <CompanyProvider>
      <BodySTY>
        <Header handleCloseMenu={handleCloseMenu} />
        <Divider />
        <div className="container">
          {isLoading && <LoadingSpinner />}
          {menuData && <MenuList menuData={menuData} />}
        </div>
        <Divider />
        <UserInfo onClick={handleRedirect.bind(null, "/employee")} />
      </BodySTY>
    </CompanyProvider>
  );
}

export default SideBar;

const Divider = () => {
  return (
    <div className="divider">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="201"
        height="2"
        viewBox="0 0 201 2"
        fill="none"
      >
        <path
          d="M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5V0.5ZM1 1.5H201V0.5H1V1.5Z"
          fill="#718BAA"
        />
      </svg>
    </div>
  );
};
