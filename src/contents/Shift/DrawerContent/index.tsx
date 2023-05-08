import React from "react";
import { Pane, Spinner } from "evergreen-ui";
import Drawer from "@components/Drawer";
import CreateForm from "@contents/Shift/DrawerContent/CreateForm";
import EditForm from "@contents/Shift/DrawerContent/EditForm";
import EventStatus from "@contents/Shift/DrawerContent/EventStatus";
import { UIContext } from "@contexts/UIProvider";

const DrawerContent = ({
  isOpenDrawer,
  setIsOpenDrawer,
  view
}: {
  isOpenDrawer: boolean;
  setIsOpenDrawer: (value: boolean) => void;
  view: "monthly" | "daily";
}) => {
  const UI = React.useContext(UIContext);

  const renderContent = () => {
    switch (UI.drawerType.type) {
      case "view":
        return <EventStatus setIsOpenDrawer={setIsOpenDrawer} />;
      case "create":
        return <CreateForm setIsOpenDrawer={setIsOpenDrawer} view={view} />;
      case "edit":
        return <EditForm setIsOpenDrawer={setIsOpenDrawer} />;
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

  return (
    <>
      {isOpenDrawer && (
        <Drawer
          tabName={[UI.drawerType.title]}
          closeDrawer={() => {
            setIsOpenDrawer(false);
            UI.resetState();
          }}
        >
          {UI.isLoading ? (
            <Pane
              display="flex"
              alignItems="center"
              justifyContent="center"
              height={400}
              style={{ padding: 5 }}
            >
              <Spinner />
            </Pane>
          ) : (
            renderContent()
          )}
        </Drawer>
      )}
    </>
  );
};

export default DrawerContent;
