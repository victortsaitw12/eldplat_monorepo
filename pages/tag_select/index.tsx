import TagSelect from "@components/TagSelect";
import React from "react";

const tag_select = () => {
  return (
    <div>
      <TagSelect
        options={[
          { label: "台灣", value: "TW" },
          { label: "日本", value: "JP" },
          { label: "美國", value: "US" }
        ]}
        handleCustomData={(t) => {
          console.log(t);
        }}
      />
    </div>
  );
};

export default tag_select;
