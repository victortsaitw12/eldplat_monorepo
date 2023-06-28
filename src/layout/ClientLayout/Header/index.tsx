import {
  Avatar,
  MoonIcon,
  FlashIcon,
  ThemeProvider,
  Select,
  PersonIcon
} from "evergreen-ui";
import React from "react";
import { BodySTY } from "./style";

const Header = ({ layoutProps, theme, setTheme }: any) => {
  const handleLangChange = (e: any) => {
    layoutProps?.setLocale(e.target.value);
  };
  const handleToggleTheme = () => {
    setTheme(!theme);
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
