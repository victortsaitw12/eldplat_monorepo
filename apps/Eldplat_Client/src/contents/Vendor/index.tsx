import { Pane, Text, Button, PlusIcon } from "evergreen-ui";
import React, { useState } from "react";
import AddVendor from "src/features/vendors/AddVendor";
import VendorList from "src/features/vendors/VendorList";
import { BodySTY } from "./style";

interface I_vendorType {
  [key: string]: string | number | React.ReactNode;
}

// ✨✨✨: 此檔案暫時無用
function Vendor({ data }: I_vendorType) {
  const [addVendorActive, setAddVendorActive] = useState<boolean>(false);

  return (
    <BodySTY>
      {addVendorActive ? (
        <AddVendor setAddVendorActive={setAddVendorActive} />
      ) : (
        <>
          <Pane className="vendor-top">
            <Text>供應商管理</Text>
            <Button
              marginTop={24}
              marginLeft={12}
              iconBefore={PlusIcon}
              onClick={() => {
                setAddVendorActive(true);
              }}
            >
              新增供應商
            </Button>
          </Pane>

          <VendorList data={data} />
        </>
      )}
    </BodySTY>
  );
}

export default Vendor;
