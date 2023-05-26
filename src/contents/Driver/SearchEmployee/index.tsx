import { Pane, Spinner, Button, SearchInput, PlusIcon } from "evergreen-ui";
import React from "react";

import { getAllNonDriverEmployee } from "@services/driver/getAllDrivers";
import { createDriverNO } from "@services/driver/createDriver";
import { SearchEmployeeSTY } from "./style";
import EmployeeItem from "./EmployeeItem";

function SearchEmployee({ update, closeSearch, refetch }: any) {
  const [value, setValue] = React.useState("");
  const [allEmployees, setAllemployees] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    getAllNonDriverEmployee().then((res) => {
      setAllemployees(res.dataList);
    });
    setIsLoading(false);
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
  return (
    <SearchEmployeeSTY>
      <SearchInput
        className="search-field"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        value={value}
        width="100%"
      />
      {allEmployees.reduce((acc: any[], item: any) => {
        if (item.User_Name.includes(value)) {
          acc.push(
            <EmployeeItem
              key={item.User_No}
              userNo={item.User_No}
              userName={item.User_Name}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              value={value}
            />
          );
        }
        return acc;
      }, [])}
      {isLoading ? (
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={500}
        >
          <Spinner />
        </Pane>
      ) : (
        ""
      )}
      <Button
        className={`add-employee-btn ${selectedUser ? "" : "disabled"}`}
        borderRadius="32px"
        marginY={8}
        marginRight={12}
        iconBefore={PlusIcon}
        onClick={() => {
          handleAddDriver(selectedUser);
        }}
        width="100%"
        appearance={`${selectedUser ? "primary" : ""}`}
      >
        新增駕駛
      </Button>
    </SearchEmployeeSTY>
  );
}

export default SearchEmployee;
