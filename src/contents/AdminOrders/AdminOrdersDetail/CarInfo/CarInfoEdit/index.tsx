import React from "react";
import { Pane, Select, Text } from "evergreen-ui";
import { useFormContext } from "react-hook-form";
interface I_Props {
  quote_type?: string;
}
const CarInfoEdit = ({ quote_type = "1" }: I_Props) => {
  const { register } = useFormContext();
  return (
    <Pane style={{ padding: "20px", display: "flex", gap: "191px" }}>
      <Pane style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <Pane style={{ display: "flex", gap: "20px" }}>
          <Text style={{ minWidth: "115px" }}>用車目的</Text>
          {quote_type === "1" && (
            <Select
              {...register("purpose", { required: "此欄位必填" })}
              style={{ width: "270px" }}
            >
              <option value="01">學校/企業參訪</option>
              <option value="02">旅遊</option>
              <option value="03">戶外教學</option>
              <option value="04">企業教育訓練</option>
              <option value="05">員工旅遊</option>
              <option value="06">進香團</option>
              <option value="07">其他</option>
            </Select>
          )}
          {quote_type === "2" && <Text>接機</Text>}
          {quote_type === "3" && <Text>送機</Text>}
        </Pane>
        <Pane style={{ display: "flex", gap: "20px" }}>
          <Text style={{ minWidth: "115px" }}>訂車注意事項</Text>
          <Text>客戶同意</Text>
        </Pane>
      </Pane>
    </Pane>
  );
};
export default CarInfoEdit;
