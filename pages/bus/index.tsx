import React, { useState, useEffect } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import MainBookmark from "@contents/MainBookmark";
import BusList from "@contents/Bus/BusList";
import { getAllBuses } from "@services/bus/getAllBuses";
import LoadingSpinner from "@components/LoadingSpinner";
import { useRouter } from "next/router";
import { useFilterStore } from "@contexts/filter/busFilterStore";
import { convertValueToText } from "@utils/convertValueToText";
import { BodySTY } from "./style";
//
const fakeData = [
  {
    bus_group: "北部"
  },
  {
    bus_group: "北部"
  },
  {
    bus_group: "中部"
  },
  {
    bus_group: "中部"
  },
  {
    bus_group: "南部"
  }
];
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const initializeFilter = useFilterStore((state) => state.initializeFilter);
  const updateFilter = useFilterStore((state) => state.updateFilter);
  const filter = useFilterStore((state) => state.filter);

  useEffect(() => {
    let isCanceled = false;
    getAllBuses(filter).then((res: any) => {
      console.log("res", res);
      console.log("bus filter", filter);
      const busData = res.contentList.map((bus: any, index: number) => {
        return {
          id: { label: bus.bus_no, value: bus.bus_no },
          bus_no: { label: bus.bus_no, value: bus.bus_no },
          type: { label: bus.type, value: bus.type },
          make: { label: bus.make, value: bus.make },
          model: { label: bus.model, value: bus.model },
          license_plate: {
            label: bus.license_plate,
            value: bus.license_plate
          },
          year: { label: bus.age, value: bus.age },
          bus_group: {
            label:
              index < fakeData.length
                ? fakeData[index].bus_group
                : bus.bus_group,
            value: bus.bus_group
          },
          operator: { label: bus.operator, value: bus.operator },
          status: { label: bus.status, value: bus.status },
          labels: { label: bus.labels, value: bus.labels }
        };
      });
      console.log("busData", busData);
      const convertedBusData = convertValueToText(busData);
      if (isCanceled) {
        console.log("canceled");
        return;
      }
      if (!filter) {
        console.log("conditionList", res.conditionList);
        localStorage.setItem(
          "busInitFilter",
          JSON.stringify(res.conditionList)
        );
        initializeFilter();
      }
      setData(convertedBusData);
    });
    return () => {
      isCanceled = true;
    };
  }, [filter, initializeFilter]);
  if (!data) {
    return <LoadingSpinner />;
  }
  const goToCreatePage = () => {
    router.push("/bus/create");
  };
  return (
    <BodySTY>
      <MainBookmark
        updateFilter={updateFilter}
        resetFilter={() => {
          initializeFilter();
        }}
        filter={filter}
      >
        {
          /* Put your component here */
          <BusList busData={data} goToCreatePage={goToCreatePage} />
        }
      </MainBookmark>
    </BodySTY>
  );
};

Page.getLayout = getLayout;
export default Page;
