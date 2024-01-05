import React from "react";
import {
  MOCK_DATA,
  MOCK_CARD_DATA
} from "src/mock-data/fuel-history/FuelEntry";
import DetailTable from "@components/Table/DetailTable";
import { FuelEntryBlock } from "./style";

function FuelEntry() {
  return (
    <FuelEntryBlock>
      <div className="detail-table-wrap">
        <div className="title">Details</div>
        <DetailTable data={MOCK_DATA[0]} />
      </div>
      <div className="right-content">
        <div className="card-content">
          {MOCK_CARD_DATA.map((item, i) => (
            <div className="item" key={i}>
              {item.title}
              <div>
                <span className="number">{item.number} </span>
                <span className="unit">{item.unit}</span>
              </div>
              <div className={item.upsAndDownse}>{item.flux}</div>
            </div>
          ))}
        </div>

        <div className="location-content">
          <div className="title">Location</div>
          <p>Location is unknown or not available</p>
        </div>
      </div>
    </FuelEntryBlock>
  );
}

export default FuelEntry;
