import React, { useState, useEffect } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { useRouter } from "next/router";
import { toaster, Pane, Spinner } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_driverInfo, DUMMY_DRIVERINFO } from "@contents/driver/driver.typing";
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getDriverById } from "@services/driver/getDriverById";
import { updateDriver } from "@services/driver/updateDriver";
import DriverEditForm from "@contents/Driver/DriverEditForm";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import HealthFirst from "@contents/Driver/DriverEditForm/SubForm/HealthFirst";

// import HealthFirst from "@contents/Employee/HealthFirst";

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ userId }) => {
  // ------- variables + useState ------- //
  const submitRef = React.useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷"edit"
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentUserInfo, setCurrentUserInfo] = useState<I_driverInfo>({});
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  const { mainFilter, updateMainFilter } = useDriverStore();

  const mainFilterArray = [
    { id: 1, label: "駕駛資訊", value: "info" },
    { id: 2, label: "健康紀錄", value: "health" }
  ];

  // ------- useEffect ------- //
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getDriverById(userId);
        if (!data.info) {
          toaster.success("查無此使用者，請重新選擇");
          router.push("/driver");
        }
        const responseData = { ...data.info };
        responseData.licn_issue = formatedDate(data.info.licn_issue);
        responseData.licn_exp = formatedDate(data.info.licn_exp);
        responseData.licn_examine_Date = formatedDate(
          data.info.licn_examine_Date
        );
        responseData.languages = data.languages;
        responseData.healths = data.healths;
        setCurrentUserInfo(responseData);
      } catch (e: any) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [userId, router]);

  // ------- function ------- //
  const formatedDate = (dateStr: string) => dateStr.split("T")[0];
  const changeMainFilterHandler = (value: string) => updateMainFilter(value);

  const asyncSubmitForm = async (data: any) => {
    console.log("asyncSubmitForm:", JSON.stringify(data));
    setIsLoading(true);
    try {
      const res = await updateDriver(userId, data);
      toaster.success(`成功更新${data.user_name}駕駛履歷`);
      router.push("/driver");
    } catch (e: any) {
      console.log(e);
      toaster.warning(e.message);
    }
    setIsLoading(false);
  };

  return (
    <BodySTY>
      {(!isLoading && currentUserInfo && (
        <Pane width="100%" height="100%" overflow="auto">
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
          >
            {mainFilter === "info" && (
              <DriverEditForm
                userId={userId}
                submitForm={asyncSubmitForm}
                isEdit={isEdit}
                currentUserInfo={currentUserInfo}
                formType={mainFilter}
                isLoading={isLoading}
                submitRef={submitRef}
              />
            )}
            {mainFilter === "health" && (
              <HealthFirst
                currentUserInfo={currentUserInfo}
                setInsertData={(data) => {
                  console.log(data);
                }}
                handleEmployeeChange={(e) => {
                  console.log(e);
                }}
              />
            )}
          </TableWrapper>
        </Pane>
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
  userId: string;
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
      userId: params!.id
    }
  };
};

Page.getLayout = getLayout;

export default Page;
