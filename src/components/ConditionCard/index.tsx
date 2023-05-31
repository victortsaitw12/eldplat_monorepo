import React from "react";
import { Checkbox, Overlay, Button, Text } from "evergreen-ui";
import { DivSTY, ModalContentSTY } from "./style";
import Modal from "@components/Modal";

const ConditionCard = ({
  type,
  title,
  children
}: {
  type: "checkbox" | "view";
  title?: string;
  children?: React.ReactNode;
}) => {
  // ----- states ----- //
  const [checked, setChecked] = React.useState(true);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // ----- variables ----- //
  const conditionText = (
    <Text
      className="condiiton__textBtn"
      onClick={() => {
        setIsModalOpen(true);
      }}
    >
      {title || "預約注意事項、使用條款、隱私權條款"}
    </Text>
  );
  const conditionDetail = (
    <article className="condition__article">
      {children || (
        <>
          {" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ea
            ab et optio ipsum quos mollitia reprehenderit pariatur eaque
            praesentium maiores sunt dolorem dignissimos, at facilis itaque,
            nihil hic odit?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ea
            ab et optio ipsum quos mollitia reprehenderit pariatur eaque
            praesentium maiores sunt dolorem dignissimos, at facilis itaque,
            nihil hic odit?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ea
            ab et optio ipsum quos mollitia reprehenderit pariatur eaque
            praesentium maiores sunt dolorem dignissimos, at facilis itaque,
            nihil hic odit?
          </p>
        </>
      )}
    </article>
  );

  return (
    <>
      <DivSTY className="condiiton" type={type}>
        <div className="condiiton__cardContent">
          {type === "checkbox" ? (
            <Checkbox
              className="condiiton__checkbox"
              label={<Text className="condiiton__text">我已了解</Text>}
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
          ) : (
            ""
          )}
          {conditionText}
        </div>
      </DivSTY>
      {isModalOpen && (
        <Modal onConfirm={() => setIsModalOpen(false)}>
          <ModalContentSTY>
            {conditionText}
            {conditionDetail}
            <Button
              className="condition__confirmBtn"
              appearance="primary"
              onClick={() => setIsModalOpen(false)}
            >
              確認
            </Button>
          </ModalContentSTY>
        </Modal>
      )}
    </>
  );
};

export default ConditionCard;
