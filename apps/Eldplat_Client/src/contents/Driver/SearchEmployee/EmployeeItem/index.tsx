interface Props {
  userNo: string;
  userName: string;
  selectedUser: string;
  setSelectedUser: (userNo: string) => void;
  value: string;
}

function EmployeeItem({
  userName,
  userNo,
  selectedUser,
  setSelectedUser,
  value
}: Props) {
  const replacedUserName = () => {
    const replacement: any = <span className="red">{value}</span>;
    const userNameArr = userName.split(value);
    userNameArr.splice(1, 0, replacement);

    return userNameArr;
  };
  return (
    <div
      className={`search-result ${selectedUser === userNo ? "selected" : ""}`}
      key={userNo}
      onClick={() => {
        setSelectedUser(userNo);
      }}
    >
      {replacedUserName()}
    </div>
  );
}

export default EmployeeItem;
