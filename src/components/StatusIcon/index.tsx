import { StyleIdIcon } from "./style";
const statusTextMap: { [key: string]: string } = {
  "01": "活躍中",
  "02": "已售出",
  "03": "終止服務",
  "04": "在維修廠",
  "05": "閒置中"
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
