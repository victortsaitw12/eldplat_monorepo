import {
  Text,
  ListIcon,
  Button,
  NotificationsIcon,
  MoonIcon,
  HelpIcon,
  mergeTheme,
  defaultTheme,
  ThemeProvider,
  Select
} from "evergreen-ui";
import React from "react";
import Head from "next/head";
import { BodySTY, StyledButton } from "./style";
const theme = mergeTheme(defaultTheme, {
  components: {
    Button: {
      appearances: {
        link: {
          color: "white",
          fontSize: "14px",
          fontWeight: "600",
          paddingX: 16,
          paddingY: 8,
          borderRadius: 30,
          backgroundColor: "#679DEF",
          _hover: {
            backgroundColor: "firebrick"
          },
          _active: {
            backgroundColor: "darkred"
          },
          _focus: {
            boxShadow: "0 0 0 2px lightcoral"
          }
        },
        notification: {
          color: "#6BDAAE",
          fontSize: "14px",
          fontWeight: "600",
          paddingX: 8,
          paddingY: 10,
          border: "1px solid #6BDAAE",
          borderRadius: 20,
          backgroundColor: "#fff",
          _hover: {
            backgroundColor: "firebrick"
          },
          _active: {
            backgroundColor: "darkred"
          },
          _focus: {
            boxShadow: "0 0 0 2px lightcoral"
          }
        }
      }
    }
  }
});

const Header = ({ layoutProps }: any) => {
  const handleLangChange = (e: any) => {
    layoutProps?.setLocale(e.target.value);
  };

  return (
    <ThemeProvider value={theme}>
      <BodySTY>
        <div className="header-text">EldPlat 後台</div>
        <div className="tool-container">
          <Text className="header-title">{layoutProps?.breadcrumbs}</Text>
        </div>
        <div className="plan-info">
          <HelpIcon color="#91A9C5" size={16} />
          {/* <Select
            width={100}
            onChange={handleLangChange}
            style={{ padding: "4px 4px" }}
          >
            <option value="zh-tw">繁體中文</option>
            <option value="en-us">英語</option>
            <option value="th-th">日語</option>
          </Select> */}
        </div>
      </BodySTY>
    </ThemeProvider>
  );
};

export default Header;
