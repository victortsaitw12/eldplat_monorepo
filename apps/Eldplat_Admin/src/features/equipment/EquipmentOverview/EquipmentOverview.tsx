import Image from "next/image";
import {
  EQUIPMENT__OVERVIEW_TITLE,
  EQUIPMENT__OVERVIEW_DATA
} from "src/mock-data/equipment/Equipment";

import DetailTable from "@components/Table/DetailTable";
import { AvatarSTY, MultipleTxtSTY, TagSTY } from "@components/Table/style";
import { EquipmentOverviewSTY } from "./EquipmentOverviewSTY";

type ExpenseListDetailType = {
  title?: string;
  data?: any;
};

function EquipmentOverview({
  title = EQUIPMENT__OVERVIEW_TITLE,
  data = EQUIPMENT__OVERVIEW_DATA
}: ExpenseListDetailType) {
  return (
    <EquipmentOverviewSTY>
      <DetailTable title={title} data={data} />
      <div className="rightBar">
        <div className="top">
          <h3>Assignments</h3>
          <div className="content">
            <span>Current Assignee</span>
            <div className="userBox">
              <div className="userInfoContainer">
                <div className="userInfo">
                  <AvatarSTY>
                    <Image
                      width="50"
                      height="50"
                      src="/image/avatar1.jpg"
                      alt="test"
                    />
                  </AvatarSTY>
                  <MultipleTxtSTY>
                    <div>Carlos Garcia</div>
                    <div>Since 3 hours, 4 minutes ago</div>
                  </MultipleTxtSTY>
                </div>
                <button>Unassign</button>
              </div>
              <div className="userQRcodeContainer">
                <MultipleTxtSTY>
                  <div className="checkContainer">
                    <div>Scan to Check in/Out</div>
                    <TagSTY backgroundColor="#9BDAAE">BETA</TagSTY>
                  </div>
                  <div>
                    Quick check in/out 測試 by scanning this code with your
                    phone camera
                  </div>
                  <a>Print Labels</a>
                </MultipleTxtSTY>
                <Image
                  width="50"
                  height="50"
                  src="/image/avatar1.jpg"
                  alt="test"
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <span>History</span>
            <div className="content">
              <div className="userText">
                <AvatarSTY size={40}>
                  <Image
                    width="50"
                    height="50"
                    src="/image/avatar1.jpg"
                    alt="test"
                  />
                </AvatarSTY>
                <span>Carlos Garcia</span>
                <span>assigned by jason chen</span>
              </div>
              <div>3h</div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h3>Last Known Location</h3>

          <div>
            <div className="icon">
              <Image
                width="50"
                height="50"
                src="/image/avatar1.jpg"
                alt="test"
              />
            </div>

            <div className="description">
              Scan this equipment via Fleetio Go to actually track ist
              geolocation history over time.
              <a>Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </EquipmentOverviewSTY>
  );
}

export default EquipmentOverview;
