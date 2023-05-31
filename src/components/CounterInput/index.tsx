import React from "react";
import { BodySTY } from "./style";
import cx from "classnames";
import { TextInput, MinusIcon, PlusIcon } from "evergreen-ui";
import { UseFormRegister } from "react-hook-form";
interface I_Props {
    label: string;
    register: UseFormRegister<any>;
    inpurName: string;
};

const CounterInput = ({
    label = "成人",
    inpurName,
    register
}: I_Props) => {
    const [num, setNum] = React.useState(0);
    const click_add = () => {
        setNum(num + 1);
    };
    const click_minus = () => {
        if (num - 1 <= 0) {
            setNum(0)
        } else {
            setNum(num - 1)
        }
    }
    React.useEffect(() => {
        console.log("現在數字是", num);
    }, [num])
    return (
        <BodySTY className="counter_input">
            {label && label !== "" && <div className="counter_input_label">{label}</div>}
            <div className="counter_input_content">
                <MinusIcon
                    onClick={click_minus}
                />
                <TextInput
                    value={num}
                    {...register(`${inpurName}`)}
                />
                <PlusIcon
                    onClick={click_add}
                />
            </div>
        </BodySTY>
    )
};
export default CounterInput;