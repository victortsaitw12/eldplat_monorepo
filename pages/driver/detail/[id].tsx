import React, { useState, useEffect } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { useRouter } from "next/router";
import { toaster, Pane, Spinner } from "evergreen-ui";
import { BodySTY } from "./style";

import { DriverInfo } from "@contents/Driver/driver.type";
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getDriverById } from "@services/driver/getDriverById";
import { updateDriver } from "@services/driver/updateDriver";
import DriverDetail from "@contents/Driver/Detail";
import TableWrapper from "@layout/TableWrapper";

//
const mainFilterArray = [
  { id: 1, label: "駕駛資訊", value: "1" },
  { id: 2, label: "健康紀錄", value: "2" }
];
//

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ driverNo }) => {
  // ------- variables + useState ------- //
  const submitRef = React.useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷"edit"
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [driverData, setDriverData] = useState<DriverInfo>();
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  const { mainFilter, updateMainFilter } = useDriverStore();
  // ------- useEffect ------- //
  useEffect(() => {
    updateMainFilter("1");
  }, []);
  //
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getDriverById(driverNo);
        console.log("getDriverById:", data);
        if (!data.info) {
          toaster.warning("查無此使用者，請重新選擇");
          router.push("/driver");
        }
        setDriverData(data);
      } catch (e: any) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [driverNo]);

  // ------- function ------- //
  const changeMainFilterHandler = (value: string) => updateMainFilter(value);

  const asyncSubmitForm = async (data: any) => {
    try {
      const res = await updateDriver(driverNo, data);
      console.log("updateDriver:", res);
      if (res.status === 200) toaster.success("成功更新駕駛履歷");
      router.push("/driver");
      console.log(res);
    } catch (e: any) {
      console.log(e);
      toaster.warning(e.message);
    }
    setIsLoading(false);
  };

  return (
    <BodySTY>
      {(!isLoading && driverData && (
        <TableWrapper
          onChangeTab={changeMainFilterHandler}
          mainFilter={mainFilter}
          mainFilterArray={mainFilterArray}
          isEdit={isEdit}
          onSave={() => {
            submitRef.current && submitRef.current.click();
          }}
          onEdit={() => {
            setIsEdit(true);
          }}
          onClose={() => {
            router.push("/driver");
          }}
        >
          <DriverDetail
            isEdit={isEdit}
            submitRef={submitRef}
            asyncSubmitForm={asyncSubmitForm}
            driverData={driverData}
            formType={mainFilter}
          />
        </TableWrapper>
      )) || (
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={400}
          style={{ padding: 5 }}
        >
          <Spinner />
        </Pane>
      )}
    </BodySTY>
  );
};

interface Props {
  driverNo: string;
}
interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params } = context;
  return {
    props: {
      driverNo: params!.id
    }
  };
};

Page.getLayout = getLayout;

export default Page;
