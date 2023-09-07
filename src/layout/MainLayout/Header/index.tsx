import {
  Text,
  ListIcon,
  Button,
  NotificationsIcon,
  MoonIcon,
  FlashIcon,
  HelpIcon,
  mergeTheme,
  defaultTheme,
  ThemeProvider,
  Select
} from "evergreen-ui";
import React from "react";
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
  const handleToggleTheme = () => {
    console.log("toggleTheme");
  };

  return (
    <ThemeProvider value={theme}>
      <BodySTY>
        <div className="tool-container">
          <ListIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (layoutProps?.showMenu) {
                layoutProps?.closeMenu();
              } else {
                layoutProps?.openMenu();
              }
            }}
            color="#FFFFFF"
            size={16}
          />
          <Text className="header-title">{layoutProps?.breadcrumbs}</Text>
          {/* <Button appearance="link">數據資料</Button>
          <Button appearance="link">自動化</Button>
          <Button appearance="link">對接口</Button> */}
        </div>
        <div className="plan-info">
          <NotificationsIcon
            className="notification"
            color="#FAC86B"
            size={16}
          />
          <StyledButton>使用期限還剩{30}天</StyledButton>
          <MoonIcon color="#91A9C5" size={16} />
          <HelpIcon color="#91A9C5" size={16} />
          <Select
            width={100}
            onChange={handleLangChange}
            style={{ padding: "4px 4px" }}
          >
            <option value="zh-tw">繁體中文</option>
            <option value="en-us">英語</option>
            <option value="th-th">日語</option>
          </Select>
        </div>
      </BodySTY>
    </ThemeProvider>
  );
};

export default Header;
