import Collapse from "@components/Collapse";
import { BodySTY, StyledForm } from "./style";
import { Label } from "@components/Button/Primary";
import { useRouter } from "next/router";
import { TextInput, Select, Button } from "evergreen-ui";
const CustomPickup = () => {
  const router = useRouter();
  return (
    <BodySTY>
      <Collapse title="客製包車" viewOnly opened={true}>
        <StyledForm>
          <label className="form-item">
            <div>
              <span style={{ color: "#D14343" }}>*</span>
              <span>出發日期</span>
            </div>
            <TextInput />
          </label>
          <label className="form-item">
            <div>
              <span style={{ color: "#D14343" }}>*</span>
              <span>回程日期</span>
            </div>
            <TextInput />
          </label>
          <label className="form-item">
            <div>
              <span>訂車用途</span>
            </div>
            <Select>
              <option value="01">學校/企業參訪</option>
              <option value="02">旅遊</option>
              <option value="03">戶外教學</option>
              <option value="04">企業教育訓練</option>
              <option value="05">員工旅遊</option>
              <option value="06">進香團</option>
              <option value="07">其他</option>
            </Select>
          </label>
        </StyledForm>
      </Collapse>
      <div>注意事項</div>
      <Button
        appearance="primary"
        onClick={() => {
          console.log("前往訂車");
        }}
      >
        前往訂車
      </Button>
    </BodySTY>
  );
};
export default CustomPickup;
