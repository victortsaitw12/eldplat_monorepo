import React, { useState } from "react";
import {
  Pane,
  TextInputField,
  SelectField,
  TextareaField,
  Checkbox
} from "evergreen-ui";

function Financial() {
  const [financingTab, setFinancingTab] = useState("0");

  const handleFinancingTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFinancingTab(e.target.value);
  };
  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    for (const [key, value] of formData) {
      console.log(`${key}: ${value}\n`);
    }
  };
  return (
    <Pane marginX="20px">
      <form onSubmit={submitFormHandler}>
        <p>DELETED FORMCARD, PLEASE CHECK THE PAGE AGAIN.</p>
      </form>
    </Pane>
  );
}

export default Financial;
