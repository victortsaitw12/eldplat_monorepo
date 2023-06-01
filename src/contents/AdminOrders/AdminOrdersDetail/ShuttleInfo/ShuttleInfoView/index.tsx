import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Pane, TimeIcon } from "evergreen-ui"
import Collapse from "@components/Collapse";
import ScheduleList from "@components/ScheduleList";
import DetailItem from "@components/DetailList/DetailItem";
import { BodySTY } from "./style";
interface I_ShuttleInfo {
    date: string;
}

interface I_Props {
    shuttleList: Array<I_ShuttleInfo>
};

const ShuttleInfoView = ({ shuttleList }: I_Props) => {
    const { register, control } = useFormContext();
    return (
        <BodySTY>
            {
                shuttleList.map((child, i) =>
                    <Collapse opened={true} key={i} title={"第" + (i + 1) + "天  " + child.date}>
                        <Pane style={{ padding: "20px" }}>
                            <span className="detail-with-icon">
                                <TimeIcon color="#8EA8C7" size={11} />
                                <DetailItem
                                    title="出發時間"
                                    value="09:00"
                                />
                            </span>
                            <ScheduleList
                                arrayName="schedule-list"
                                register={register}
                                isEdit={false}
                                disabledFirst={true}
                                control={control}
                            />
                        </Pane>
                    </Collapse>
                )
            }
        </BodySTY>
    );
};

export default ShuttleInfoView