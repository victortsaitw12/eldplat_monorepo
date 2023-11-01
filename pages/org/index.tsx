import { Pane, Text, Dialog } from "evergreen-ui";
import { GetServerSideProps, NextPageWithLayout } from "next";
import React, { useEffect, useState, useMemo, ReactNode } from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import { getLayout } from "@layout/MainLayout";
import OrgTree from "@contents/Org/OrgTree";
import ModalContent, {
  I_PopContent,
  defaultPopContent
} from "@contents/Org/ModalContent";

const DUMMY_ARR = [
  {
    id: "0-001",
    label: "雄獅通運",
    children: [
      {
        id: "0-00101",
        label: "交通事業處",
        children: [
          {
            id: "0-0010101",
            label: "大中巴業務組",
            children: [
              { id: "0-0010102", label: "A組" },
              {
                id: "0-0010102",
                label: "B組",
                children: [
                  { id: "0-0010102", label: "Aa組" },
                  { id: "0-0010102", label: "Bb組" }
                ]
              }
            ]
          },
          { id: "0-0010102", label: "中車駕駛組" },
          { id: "0-0010103", label: "機動駕駛組" },
          { id: "0-0010104", label: "廠務組" }
        ]
      },
      {
        id: "0-00102",
        label: "企劃處",
        children: [{ id: "0-0010201", label: "大中巴業務組" }]
      },
      {
        id: "0-00102",
        label: "資訊處"
      }
    ]
  }
];

const DUMMY_DDL_OP = [
  { id: "0-001", label: "雄獅通運" },
  { id: "0-00101", label: "交通事業處" }
];

const Page: NextPageWithLayout<{
  locale: string;
  setPageType: (t: string) => void;
}> = ({ locale, setPageType }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<any>();
  const [isDialogShown, setIsDialogShown] = React.useState(true);
  const [popContent, setPopContent] =
    React.useState<I_PopContent>(defaultPopContent);
  const handleCreate = () => {
    setPopContent(defaultPopContent);
  };
  const handleEdit = () => {
    setPopContent(defaultPopContent);
  };

  return (
    <BodySTY>
      <OrgTree data={DUMMY_ARR} onEdit={handleEdit} onCreate={handleCreate} />
      <Dialog
        title={popContent.title}
        isShown={isDialogShown}
        onCloseComplete={() => setIsDialogShown(false)}
        confirmLabel="確定"
        cancelLabel="取消"
      >
        <ModalContent popContent={popContent} ddlOptions={DUMMY_DDL_OP} />
      </Dialog>
    </BodySTY>
  );
};

export const getServerSideProps: GetServerSideProps<Params> = async (
  context
) => {
  const { query } = context;
  return {
    props: {}
  };
};
// Page.getLayout = getLayout;
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
