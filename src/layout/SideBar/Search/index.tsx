import React from "react";
import {
  CogIcon,
  SearchIcon,
  defaultTheme,
  mergeTheme,
  TextInput
} from "evergreen-ui";
//
import { BodySTY } from "./style";
//
function Index() {
  const [searchText, setSearchText] = React.useState("");
  return (
    <BodySTY>
      <div className="search-bar">
        <div className="icon prefix">
          <SearchIcon color="#fff" />
        </div>
        <TextInput
          placeholder="搜尋"
          width={200}
          paddingX={32}
          paddingY={8}
          borderRadius={30}
          color="#fff"
          background="none"
          value={searchText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchText(e.target.value)
          }
        />
        <div className="icon suffix">
          <CogIcon color="#fff" />
        </div>
      </div>
    </BodySTY>
  );
}
export default Index;
