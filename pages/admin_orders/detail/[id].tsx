import React, { useEffect, useState, useMemo, useRef } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { Pane, Icon, FloppyDiskIcon, EditIcon } from "evergreen-ui";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";

//@content
import AdminOrdersDetal from "@contents/AdminOrders/AdminOrdersDetail";

//@services

//@context
// import { useAdminOrderStore } from "@contexts/filter/adminOrdersStore";

//@mock_data
import {
    mock_orderData,
} from "@mock-data/adminOrders/mockData";

const Index: NextPageWithLayout<never> = ({ order_type, order_id }) => {
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
                        <AdminOrdersDetal
                            isEdit={isEdit}
                            orderType={order_type}
                            orderData={orderData}
                        />
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
    const { params, query } = context;
    if (!query.type) {
        return {
            redirect: {
                permanent: false,
                destination: "/admin_orders",
            },
            props: {}
        }
    } else {
        return {
            props: {
                order_type: query.type,
                order_id: params ? params.id : ""
            }
        };
    }

};
Index.getLayout = getLayout;
export default Index;
