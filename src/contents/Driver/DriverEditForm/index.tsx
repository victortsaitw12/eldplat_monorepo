import React from "react";
import { Pane } from "evergreen-ui";
import { FormProvider, useForm } from "react-hook-form";
import { FormSTY } from "./style";

import Basic from "./SubForm/Basic";
import DriverResume from "./SubForm/DriverResume";
import DriverLicense from "./SubForm/DriverLicense";
import LanguageAbility from "./SubForm/LanguageAbility";
//
interface Props {
  userId: string;
  submitForm: (data: any) => void;
  isEdit: boolean;
  currentUserInfo: any;
  isLoading: boolean;
  submitRef: React.RefObject<HTMLButtonElement>;
}

// userId={userId}
// submitForm={asyncSubmitForm}
// isEdit={isEdit}
// currentUserInfo={currentUserInfo}
// formType={mainFilter}

function DriverEditForm({
  userId,
  submitForm,
  isEdit,
  currentUserInfo,
  isLoading,
  submitRef
}: Props) {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit
  } = useForm({
    defaultValues: currentUserInfo
  });
  React.useEffect(() => {
    if (errors) {
      // do the your logic here
      console.log(errors);
    }
  }, [errors]);
  return (
    <FormProvider {...{ register, errors, control, handleSubmit }}>
      <FormSTY
        className="add-blocks"
        onSubmit={handleSubmit((data) => {
          console.log("form-hook:", { ...data });
          submitForm({ ...data });
        })}
      >
        <button ref={submitRef} type="submit" style={{ display: "none" }}>
          儲存
        </button>
        <Pane className="left-blocks">
          <Basic currentUserInfo={currentUserInfo} isLoading={isLoading} />
          <DriverResume
            userId={userId}
            isEdit={isEdit}
            currentUserInfo={currentUserInfo}
            isLoading={isLoading}
          />
        </Pane>
        <Pane className="right-blocks">
          <DriverLicense
            userId={userId}
            isEdit={isEdit}
            currentUserInfo={currentUserInfo}
            isLoading={isLoading}
          />
          <LanguageAbility />
        </Pane>
      </FormSTY>
    </FormProvider>
  );
}

export default DriverEditForm;
