

import React, { useEffect, useState, useMemo, useRef } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import { Pane, Icon, FloppyDiskIcon, EditIcon } from "evergreen-ui";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";

//@component
import Collapse from "@components/Collapse";
import ProgressList from "@components/ProgressList";
import VerticalDetail from "@components/VerticalDetail";
import DetailList from "@components/DetailList";

//@services

//@contents

//@util
import { keysToLowercase } from "@utils/keysToLowercase";

//@context
// import { useAdminOrderStore } from "@contexts/filter/adminOrdersStore";

//@mock_data
import {
    mock_orderData,
    mock_progressdata,
    order_contact,
    order_represent
} from "@mock-data/adminOrders/mockData";
const Index: NextPageWithLayout<never> = ({ order_id }) => {
    const submitRef = useRef<HTMLButtonElement | null>(null);
    const router = useRouter();
    const { editPage } = router.query; //是否為編輯頁的判斷1或0
    const [loading, setLoading] = useState(false);
    const [orderData, setOrderData] = useState({});
    const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
    const [nowTab, setNowTab] = useState("order");
    // const {
    //     initializeSubFilter,
    //     mainFilter,
    //     updateMainFilter,
    //     subFilter,
    //     updateSubFilter,
    //     isDrawerOpen,
    //     setDrawerOpen
    // } = useAdminOrderStore();

    //
    const mainFilterArray = useMemo(
        () => [
            { id: 1, label: "訂單內容", value: "order" },
        ],
        []
    );
    //TableWrapper
    const changeMainFilterHandler = (value: string) => {
        console.log("changeMainFilterHandler", value);
        setNowTab(value)
    };

    const asyncSubmitForm = async (data: any) => {
        console.log("edited data", data);
        setLoading(true);
        try {
            console.log("response of vendor edit: ");
        } catch (e: any) {
            console.log(e);
            alert(e.message);
        }
        setLoading(false);
    };
    //
    useEffect(() => {
        setOrderData(mock_orderData);
    }, [order_id]);

    return (
        <BodySTY>
            {!loading && orderData && (
                <>
                    <TableWrapper
                        isEdit={isEdit}
                        onChangeTab={(value) => changeMainFilterHandler(value)}
                        mainFilter={nowTab}
                        mainFilterArray={mainFilterArray}
                        onSave={() => {
                            // setIsEdit(!isEdit)
                            submitRef.current && submitRef.current.click();
                        }}
                        onEdit={() => {
                            setIsEdit(true);
                        }}
                        onClose={() => {
                            router.push("/vendor");
                        }}
                    >
                        <Pane style={{ background: "#ffffff" }}>
                            <Collapse opened={true} title="ORDER229999">
                                <Pane style={{ padding: "20px" }}>
                                    <ProgressList dataLists={mock_progressdata} />
                                </Pane>
                            </Collapse>
                            <Collapse opened={true} title="付款方式">
                                <Pane style={{ padding: "20px", display: "flex", gap: "191px" }}>
                                    <VerticalDetail
                                        title="全額支付"
                                        items={[
                                            {
                                                label: "2023-05-01 前繳款"
                                            }
                                        ]}
                                    />
                                    <VerticalDetail
                                        title="NT$2,200 含稅"
                                        items={[{}]}
                                    />
                                </Pane>
                            </Collapse>
                            <Collapse opened={true} title="客製包車">
                                <Pane style={{ padding: "20px" }}>
                                    <DetailList
                                        listArray={[
                                            {
                                                title: "用車目的",
                                                value: "旅遊"
                                            },
                                            {
                                                title: "訂車注意事項",
                                                value: "客戶同意"
                                            }
                                        ]}
                                    />
                                </Pane>
                            </Collapse>
                            <Collapse opened={true} title="訂單聯絡人">
                                <Pane style={{ padding: "20px" }}>
                                    <DetailList
                                        listArray={order_contact}
                                    />
                                </Pane>
                            </Collapse>
                            <Collapse opened={true} title="旅客代表人">
                                <Pane style={{ padding: "20px" }}>
                                    <DetailList
                                        listArray={order_represent}
                                    />
                                </Pane>
                            </Collapse>
                            <Collapse title="第一天 2023-05-17">
                                <h1>測試來來來</h1>
                            </Collapse>
                            <Collapse title="第二天 2023-05-18">
                                <h1>測試來來來</h1>
                            </Collapse>
                            <Collapse title="乘車資訊">
                                <h1>測試來來來</h1>
                            </Collapse>
                            <Collapse title="特殊需求">
                                <h1>測試來來來</h1>
                            </Collapse>
                            <Collapse title="標籤">
                                <h1>測試來來來</h1>
                            </Collapse>
                        </Pane>
                    </TableWrapper>
                    <div>

                    </div>
                </>
            )}
        </BodySTY>
    );
};
interface Props {
    order_id: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async (
    context
) => {
    const { params } = context;
    return {
        props: {
            order_id: params ? params.id : ""
        }
    };
};
Index.getLayout = getLayout;
export default Index;
