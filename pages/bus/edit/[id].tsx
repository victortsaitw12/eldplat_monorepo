import React, { useCallback, useEffect, useState } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
//
import { getLayout } from "@layout/MainLayout";
import { updateBus } from "@services/bus/updateBus";
import BusEditForm from "@contents/Bus/BusEditForm";
import { useRouter } from "next/router";
import { BodySTY } from "./style";
import { ParsedUrlQuery } from "querystring";
import { useForm } from "react-hook-form";
import { getBusDefaultData } from "@contents/Bus/BusEditForm/busDefaultData";
import { BusDataTypes } from "@contents/Bus/BusEditForm/busDefaultData";
import TableWrapper from "@layout/TableWrapper";
import { useBusStore } from "@contexts/filter/busStore";
import { getBusById } from "@services/bus/getBusById";
import LoadingSpinner from "@components/LoadingSpinner";
//
const mainFilterArray = [
  { id: 1, label: "細項", value: "Detail" },
  { id: 2, label: "維保", value: "Maintenance" },
  { id: 3, label: "生命週期", value: "Lifecycle" },
  { id: 4, label: "財務", value: "Financial" },
  { id: 5, label: "規格", value: "Specifications" }
];
//
function fakeSubmit(data: any) {
  console.log("data", data);
}
//
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ busId }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { mainFilter, updateMainFilter } = useBusStore();
  async function getDefaultValuesHandler() {
    const lowerCaseFlatternData = await getBusById(busId);
    return getBusDefaultData(lowerCaseFlatternData);
  }
  useEffect(() => {
    updateMainFilter("Detail");
  }, [updateMainFilter]);
  const {
    register,
    getValues,
    formState: { errors },
    control,
    handleSubmit
  } = useForm<BusDataTypes>({
    defaultValues: async () => getDefaultValuesHandler()
  });
  const changeMainFilterHandler = (value: string) => {
    updateMainFilter(value);
  };
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    console.log("asyncSubmitForm", data);
    try {
      const res = await updateBus(busId, data);
      console.log("response of bus update: ", res);
      router.push("/bus");
    } catch (e: any) {
      console.log(e);
    }
    setLoading(false);
  };
  const cancelFormHandler = useCallback(() => {
    router.push("/bus");
  }, [router]);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <TableWrapper
      onChangeTab={changeMainFilterHandler}
      mainFilter={mainFilter}
      mainFilterArray={mainFilterArray}
      onSave={handleSubmit(asyncSubmitForm)}
      isEdit={true}
    >
      <BodySTY>
        <BusEditForm
          submitForm={asyncSubmitForm}
          onCancel={cancelFormHandler}
          formType={mainFilter}
          errors={errors}
          handleSubmit={handleSubmit}
          register={register}
          control={control}
        />
      </BodySTY>
    </TableWrapper>
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

Page.getLayout = getLayout;
export default Page;
