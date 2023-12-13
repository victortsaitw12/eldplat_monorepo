import React, { useEffect, useRef, useState, ReactNode } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
//
import { getLayout } from "@layout/MainLayout";
import { updateBus } from "@services/bus/updateBus";
import { useRouter } from "next/router";
import { BodySTY } from "./style";
import { ParsedUrlQuery } from "querystring";
import TabsWrapper from "@layout/TabsWrapper";
import { useBusStore } from "@contexts/filter/busStore";
import LoadingSpinner from "@components/LoadingSpinner";
import BusDetail from "@contents/Bus/BusDetail";
import { getBusById } from "@services/bus/getBusById";
import { getCreateBusOptions } from "@services/bus/getCreateBusOptions";
//
const mainFilterArray = [
  { id: 1, label: "細項", value: "1", require: true },
  { id: 2, label: "維保", value: "2" },
  { id: 3, label: "生命週期", value: "3" },
  { id: 4, label: "財務", value: "4" },
  { id: 5, label: "規格", value: "5" }
];
//
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ busId }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const { mainFilter, updateMainFilter } = useBusStore();
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  const [busDefaultData, setBusDefaultData] = useState<any>(null);
  const [options, setOptions] = useState<any>(null);
  useEffect(() => {
    updateMainFilter("1");
    setLoading(true);
    getCreateBusOptions()
      .then((res) => {
        setOptions(res.dataList[0]);
        return getBusById(busId);
      })
      .then((res) => {
        setBusDefaultData(res);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router]);

  const changeMainFilterHandler = (value: string) => {
    updateMainFilter(value);
  };
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    console.log("asyncSubmitForm", data);
    try {
      await updateBus(data);
      setIsEdit(false);
    } catch (e: any) {
      alert(e.message);
      console.log(e);
    }
    router.push("/bus/detail/" + busId + "?editPage=view");
    setLoading(false);
  };
  const fetchDDL = async (dsph_group?: string) => {
    try {
      const res = await getCreateBusOptions(dsph_group);
      if (res.statusCode === "200") {
        setOptions(res.dataList[0]);
      } else {
        throw new Error(`${res.resultString}`);
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };
  const onCancelHandler = () => {
    router.push("/bus");
  };
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <BodySTY>
      <TabsWrapper
        onChangeTab={changeMainFilterHandler}
        mainFilter={mainFilter}
        mainFilterArray={mainFilterArray}
      >
        <BusDetail
          isEdit={isEdit}
          submitRef={submitRef}
          asyncSubmitForm={asyncSubmitForm}
          busId={busId}
          formType={mainFilter}
          busDefaultData={busDefaultData}
          busOptions={options}
          fetchDDL={fetchDDL}
        />
      </TabsWrapper>
    </BodySTY>
  );
};

interface Props {
  busId: string;
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
      busId: params ? params.id : ""
    }
  };
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
