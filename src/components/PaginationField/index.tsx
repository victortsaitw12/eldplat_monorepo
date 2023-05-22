import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import { BodySTY } from "./style";

import { Pagination } from "evergreen-ui";

interface I_PaginationField {
    onPageChange?: () => void;
    onClickNext?: () => void;
    onClickPrevious?: () => void;
}

function PaginationField(props: I_PaginationField) {
    const {
        onPageChange,
        onClickNext,
        onClickPrevious,
    } = props;
    return (
        <BodySTY>
            <span>
                第 1 - 3 筆， 共 3 筆
            </span>
            <Pagination
                onPageChange={onPageChange}
                onNextPage={onClickNext}
                onPreviousPage={onClickPrevious}
                page={1}
                totalPages={35}
            ></Pagination>
        </BodySTY>
    )
};

export default PaginationField;