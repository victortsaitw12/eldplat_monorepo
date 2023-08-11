import { StyleIdIcon } from "./style";
const statusTextMap: { [key: string]: string } = {
  "01": "活躍中",
  "02": "閒置中",
  "03": "在維修廠",
  "04": "終止服務",
  "05": "已售出"
};
function StatusIcon({ status }: { status: string }) {
  return (
    <StyleIdIcon status={status}>
      <div className="icon-dot"></div>
      <div className="icon-text">{statusTextMap[status]}</div>
    </StyleIdIcon>
  );
}
export default StatusIcon;
