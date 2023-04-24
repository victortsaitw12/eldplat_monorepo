import {
  Pane,
  Text,
  Button,
  IconButton,
  FullscreenIcon,
  SmallCrossIcon,
  SearchInput,
  PlusIcon
} from "evergreen-ui";
import React from "react";

import { getAllNonDriverEmployee } from "@services/driver/getAllDrivers";
import { createDriverNO } from "@services/driver/createDriver";
import { BodySTY } from "./style";
import EmployeeItem from "./EmployeeItem";

function SearchEmployee({ update, closeSearch, refetch }: any) {
  const [value, setValue] = React.useState("");
  const [allEmployees, setAllemployees] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState("");

  React.useEffect(() => {
    getAllNonDriverEmployee().then((res) => {
      setAllemployees(res.dataList);
    });
  }, [update]);

  const handleAddDriver = async (userNO: any) => {
    try {
      await createDriverNO(userNO);
      await refetch();
      closeSearch();
    } catch (err) {
      console.log(err);
    }
  };
  /*
  refetch
  */
  // const addSelectEmployeeToList = () => {};
  // const coloredValue = (val) => {
  //   return <span className="red">{val}</span>;
  // };

  return (
    <BodySTY>
      <Pane display="flex" justifyContent="space-between" className="title-bar">
        <Text className="title-label">新增駕駛</Text>
        <Pane className="right-function">
          <IconButton icon={FullscreenIcon} />
          <IconButton icon={SmallCrossIcon} onClick={closeSearch} />
        </Pane>
      </Pane>

      <Pane
        className="search-container"
        width="100%"
        height="100%"
        background="#fff"
        borderRadius="10px"
      >
        <SearchInput
          className="search-field"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={value}
          width="100%"
        />
        {allEmployees.reduce((acc: any[], item: any) => {
          if (value.trim() === "" || item.User_Name.includes(value)) {
            acc.push(
              <EmployeeItem
                key={item.User_No}
                userNo={item.User_No}
                userName={item.User_Name}
                isSelected={selectedUser === item.User_No}
                setSelectedUser={setSelectedUser}
              />
            );
          }
          return acc;
        }, [])}
        <Button
          className="add-employee-btn"
          borderRadius="32px"
          marginY={8}
          marginRight={12}
          iconBefore={PlusIcon}
          onClick={() => {
            handleAddDriver(selectedUser);
          }}
          width="100%"
        >
          新增駕駛
        </Button>
      </Pane>
    </BodySTY>
  );
}

export default SearchEmployee;
