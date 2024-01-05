import React from "react";
import { Pane, Spinner } from "evergreen-ui";
import CreateForm from "@contents/Shift/DrawerContent/CreateForm";
import EditForm from "@contents/Shift/DrawerContent/EditForm";
import EventStatus from "@contents/Shift/DrawerContent/EventStatus";
import { UIContext } from "@contexts/scheduleContext/UIProvider";

interface I_Props {
  isOpenDrawer: boolean;
  setIsOpenDrawer: (value: boolean) => void;
  view: "monthly" | "daily";
  fetchData: () => void;
}
const DrawerContent = ({
  isOpenDrawer,
  setIsOpenDrawer,
  view,
  fetchData
}: I_Props) => {
  const UI = React.useContext(UIContext);

  const renderContent = () => {
    const refetch = () => {
      fetchData();
    };
    switch (UI.drawerType.type) {
      case "view":
        return (
          <EventStatus setIsOpenDrawer={setIsOpenDrawer} refetch={refetch} />
        );
      case "create":
        return (
          <CreateForm
            setIsOpenDrawer={setIsOpenDrawer}
            view={view}
            refetch={refetch}
          />
        );
      case "edit":
        return <EditForm refetch={refetch} />;
      default:
        return (
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={400}
          >
            <Spinner />
          </Pane>
        );
    }
  };

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
    UI.resetState();
  };

  return (
    <>
      <p>DRAWER DELETED, PLEASE CHECK THE PAGE AGAIN. BY GABON</p>
    </>
  );
};

export default DrawerContent;
