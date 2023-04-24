interface Props {
  userNo: string;
  userName: string;
  isSelected: boolean;
  setSelectedUser: (userNo: string) => void;
}

function EmployeeItem({
  userName,
  userNo,
  isSelected,
  setSelectedUser
}: Props) {
  return (
    <div
      className="search-result"
      key={userNo}
      onClick={() => {
        setSelectedUser(userNo);
      }}
      style={{
        backgroundColor: isSelected ? "#f1f6fd" : "none"
      }}
    >
      {userName}
    </div>
  );
}

export default EmployeeItem;
