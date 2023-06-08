import {
  Avatar,
  ListIcon,
  Button,
  NotificationsIcon,
  MoonIcon,
  FlashIcon,
  HelpIcon,
  mergeTheme,
  defaultTheme,
  ThemeProvider,
  Select,
  PersonIcon
} from "evergreen-ui";
import React from "react";
import { BodySTY } from "./style";
import { I_MultiLanguages } from "@typings/mutiLanguage_type";

// const theme = mergeTheme(defaultTheme, {
//   components: {
//     Button: {
//       appearances: {
//         link: {
//           color: "white",
//           fontSize: "14px",
//           fontWeight: "600",
//           paddingX: 16,
//           paddingY: 8,
//           borderRadius: 30,
//           backgroundColor: "#679DEF",
//           _hover: {
//             backgroundColor: "firebrick"
//           },
//           _active: {
//             backgroundColor: "darkred"
//           },
//           _focus: {
//             boxShadow: "0 0 0 2px lightcoral"
//           }
//         },
//         notification: {
//           color: "#6BDAAE",
//           fontSize: "14px",
//           fontWeight: "600",
//           paddingX: 8,
//           paddingY: 10,
//           border: "1px solid #6BDAAE",
//           borderRadius: 20,
//           backgroundColor: "#fff",
//           _hover: {
//             backgroundColor: "firebrick"
//           },
//           _active: {
//             backgroundColor: "darkred"
//           },
//           _focus: {
//             boxShadow: "0 0 0 2px lightcoral"
//           }
//         }
//       }
//     }
//   }
// });

const Header = ({ layoutProps, theme, setTheme }: any) => {
  const handleLangChange = (e: any) => {
    layoutProps?.setLocale(e.target.value);
  };
  const handleToggleTheme = () => {
    setTheme(!theme);
  };
  const handleClickMember = () => {
    console.log("member");
  };

  return (
    <ThemeProvider value={theme}>
      <BodySTY>
        <div className="header__title">{layoutProps?.title}</div>
        <div className="header__settings">
          <Select
            className="header__settings-lang"
            width={100}
            onChange={handleLangChange}
          >
            <option value="zh-tw">繁體中文</option>
            <option value="en-us">英語</option>
            <option value="th-th">日語</option>
          </Select>
          {theme ? (
            <FlashIcon
              className="header__settings-theme"
              onClick={handleToggleTheme}
            />
          ) : (
            <MoonIcon
              className="header__settings-theme"
              onClick={handleToggleTheme}
              color="#91A9C5"
              size={16}
            />
          )}
          <div className="header__settings-member">
            {layoutProps?.avartar ? (
              <Avatar name={layoutProps.avartar} />
            ) : (
              <PersonIcon color="#91A9C5" size={16} />
            )}
          </div>
        </div>
      </BodySTY>
    </ThemeProvider>
  );
};

export default Header;
