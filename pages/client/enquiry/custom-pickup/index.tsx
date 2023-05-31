import Collapse from "@components/Collapse";
import { BodySTY, StyledForm } from "./style";
import { Label } from "@components/Button/Primary";
import { useRouter } from "next/router";
import { TextInputField, Pane, ListItem } from "evergreen-ui";
const CustomPickup = () => {
  const router = useRouter();
  return (
    <BodySTY>
      <Collapse title="客製包車" viewOnly>
        <StyledForm>
          <TextInputField label={"出發日期"} />
          <TextInputField label={"回程日期"} />
          <TextInputField label={"訂車用途"} />
        </StyledForm>
      </Collapse>
      <div>注意事項</div>
      <Label
        text="前往訂車"
        onClick={() => {
          console.log("前往訂車");
        }}
      />
    </BodySTY>
  );
};
export default CustomPickup;
